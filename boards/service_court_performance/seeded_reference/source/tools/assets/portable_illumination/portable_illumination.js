const nativeRoot = "native/";
let nativePacket;
let playing = true;
let grayscale = false;
let scale = 1;
const clipTimers = new Map();

function frameByState(state) {
  return nativePacket.frames.find(frame => frame.state === state);
}

function previewPath(file) {
  if (file.startsWith("build/")) return `../${file.slice(6)}`;
  return `../../${file}`;
}

function imageFor(id) {
  const frame = nativePacket.frames.find(candidate => candidate.id === id);
  if (frame) return nativeRoot + frame.file;
  const resource = nativePacket.reused_resources.find(candidate => candidate.id === id);
  if (!resource) throw new Error(`No native preview image is registered for ${id}.`);
  return previewPath(resource.file);
}

function renderCases() {
  const host = document.querySelector("#case-studies");
  const catalog = nativePacket.case_review;
  const cell = catalog.cell_px;
  document.documentElement.style.setProperty("--cell-size", `${cell}px`);
  const cellResource = nativePacket.reused_resources.find(resource => resource.id === "visual.inventory.cell_normal");
  document.documentElement.style.setProperty("--cell-image", `url("${previewPath(cellResource.file)}")`);
  for (const study of catalog.studies) {
    const occupied = new Set();
    const placed = [];
    const place = item => {
      for (let y = item.y; y < item.y + item.h; y++) {
        for (let x = item.x; x < item.x + item.w; x++) {
          if (x < 0 || y < 0 || x >= catalog.columns || y >= catalog.rows) throw new Error(`Case item is out of bounds: ${study.id}/${item.id}`);
          const key = `${x},${y}`;
          if (occupied.has(key)) throw new Error(`Case items overlap: ${study.id}/${key}`);
          occupied.add(key);
        }
      }
      placed.push(item);
    };
    for (const item of study.items) place(item);
    if (study.fill_empty) {
      for (let y = 0; y < catalog.rows; y++) {
        for (let x = 0; x < catalog.columns; x++) {
          if (!occupied.has(`${x},${y}`)) place({ ...study.fill_empty, x, y });
        }
      }
    }
    const card = document.createElement("article");
    card.className = "case-card";
    card.dataset.case = study.id;
    const title = document.createElement("h3");
    title.textContent = study.title;
    const board = document.createElement("div");
    board.className = "case-board";
    board.style.width = `${catalog.columns * cell}px`;
    board.style.height = `${catalog.rows * cell}px`;
    board.dataset.occupied = occupied.size;
    board.dataset.capacity = catalog.columns * catalog.rows;
    for (const item of placed) {
      const node = document.createElement("div");
      node.className = "case-item";
      node.dataset.item = item.id;
      node.dataset.columns = item.w;
      node.dataset.rows = item.h;
      node.style.left = `${item.x * cell}px`;
      node.style.top = `${item.y * cell}px`;
      node.style.width = `${item.w * cell}px`;
      node.style.height = `${item.h * cell}px`;
      const image = document.createElement("img");
      image.src = imageFor(item.id);
      image.alt = `${item.id} icon`;
      node.title = `${item.id} · ${item.w}×${item.h}`;
      node.append(image);
      if (item.quantity) {
        const quantity = document.createElement("span");
        quantity.className = "quantity";
        quantity.textContent = item.quantity;
        node.append(quantity);
      }
      board.append(node);
    }
    const note = document.createElement("p");
    note.className = "case-notes";
    note.textContent = `${occupied.size}/${catalog.columns * catalog.rows} cells occupied`;
    card.append(title, board, note);
    host.append(card);
  }
}

function renderClips() {
  const host = document.querySelector("#clip-studies");
  const clips = new Map();
  for (const frame of nativePacket.frames) {
    if (!clips.has(frame.clip_id)) clips.set(frame.clip_id, []);
    clips.get(frame.clip_id).push(frame);
  }
  for (const [clipId, frames] of clips) {
    frames.sort((a, b) => a.frame_index - b.frame_index);
    const card = document.createElement("article");
    card.className = "clip-card";
    const title = document.createElement("h3");
    title.textContent = clipId;
    const stage = document.createElement("div");
    stage.className = "clip-frame";
    const image = document.createElement("img");
    image.src = nativeRoot + frames[0].file;
    image.alt = `${clipId} authored frame`;
    stage.append(image);
    const meta = document.createElement("p");
    meta.className = "clip-meta";
    meta.textContent = `${frames.length} frame(s) · ${frames[0].canvas_size_px.join("×")} px · pivot ${frames[0].pivot_px.join(",")}`;
    card.append(title, stage, meta);
    host.append(card);
    if (frames.length > 1) {
      let frameIndex = 0;
      const advance = () => {
        if (!playing) return;
        frameIndex = (frameIndex + 1) % frames.length;
        image.src = nativeRoot + frames[frameIndex].file;
        image.alt = `${clipId} frame ${frames[frameIndex].frame_index}`;
        clipTimers.set(clipId, setTimeout(advance, frames[frameIndex].duration_ms));
      };
      clipTimers.set(clipId, setTimeout(advance, frames[0].duration_ms));
    }
  }
}

function renderContextStates() {
  const states = ["folded_icon", "deployed_off", "deployed_on", "deployed_empty", "unlit_held", "lit_airborne", "resting_burn", "spent"];
  const host = document.querySelector("#state-context");
  for (const state of states) {
    const frame = frameByState(state);
    if (!frame) continue;
    const item = document.createElement("div");
    item.className = "context-state";
    const art = document.createElement("div");
    art.className = "context-art";
    art.style.width = `${frame.canvas_size_px[0] * 2}px`;
    art.style.height = `${frame.canvas_size_px[1] * 2}px`;
    const image = document.createElement("img");
    image.src = nativeRoot + frame.file;
    image.alt = state;
    image.style.width = `${frame.canvas_size_px[0] * 2}px`;
    image.style.height = `${frame.canvas_size_px[1] * 2}px`;
    art.append(image);
    for (const [socketName, position] of Object.entries(frame.sockets || {})) {
      const marker = document.createElement("i");
      marker.className = "socket-marker";
      marker.style.left = `${position[0] * 2 - 3}px`;
      marker.style.top = `${position[1] * 2 - 3}px`;
      marker.title = `${socketName}: ${position.join(", ")}`;
      marker.dataset.socket = socketName;
      art.append(marker);
    }
    const label = document.createElement("span");
    const socketNames = Object.keys(frame.sockets || {}).join(", ");
    label.textContent = socketNames ? `${state.replaceAll("_", " ")} · ${socketNames}` : state.replaceAll("_", " ");
    item.append(art, label);
    host.append(item);
  }
}

function renderContextAssets() {
  const host = document.querySelector("#context-assets");
  for (const value of Object.values(nativePacket.scene_context)) {
    if (!value || typeof value !== "object" || !value.file) continue;
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = previewPath(value.file);
    image.alt = value.caption;
    const caption = document.createElement("figcaption");
    caption.textContent = value.caption;
    figure.append(image, caption);
    host.append(figure);
  }
}

function setScale() {
  scale = scale === 1 ? 2 : 1;
  document.documentElement.style.setProperty("--scale", scale);
  document.querySelector("#scale-button").textContent = `Scale: ${scale}×`;
}

function setGrayscale() {
  grayscale = !grayscale;
  document.body.classList.toggle("grayscale", grayscale);
  document.querySelector("#gray-button").textContent = `Grayscale: ${grayscale ? "on" : "off"}`;
}

function setPlayback() {
  playing = !playing;
  document.querySelector("#play-button").textContent = `Playback: ${playing ? "on" : "off"}`;
  if (playing) location.reload();
}

async function start() {
  nativePacket = window.portableIlluminationPacket;
  if (!nativePacket) throw new Error("Native packet metadata is missing. Run the authoring export first.");
  renderCases();
  renderClips();
  renderContextAssets();
  renderContextStates();
  document.querySelector("#receipt-state").textContent = `Source receipts: ${nativePacket.registrations.length} · Native frames: ${nativePacket.frames.length} · Atlas files: ${nativePacket.atlases.length + 1}`;
  document.querySelector("#scale-button").addEventListener("click", setScale);
  document.querySelector("#gray-button").addEventListener("click", setGrayscale);
  document.querySelector("#play-button").addEventListener("click", setPlayback);
}

start().catch(error => {
  document.querySelector("#receipt-state").textContent = error.message;
});
