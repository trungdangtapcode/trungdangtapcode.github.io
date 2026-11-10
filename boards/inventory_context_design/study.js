"use strict";
// Interaction study only: authoritative game commands and drag geometry are not simulated.
const ui = Object.fromEntries(["panes", "menu", "receipt", "selection", "scenario", "quantity", "amount", "confirm"].map(id => [id, document.getElementById(id)]));
const sample = [
  {id:"rifle-1",name:"Rifle",kind:"weapon",quantity:1,rounds:8,pane:"player",icon:"rifle.png"},
  {id:"ammo-1",name:"Rifle ammo",kind:"ammo",quantity:24,pane:"player",icon:"ammo_rifle.png"},
  {id:"device-1",name:"Packed sentry",kind:"device",quantity:1,pane:"player",icon:"folded_sentry.png"},
  {id:"grenade-1",name:"Frag grenade",kind:"throwable",quantity:2,pane:"source",icon:"grenade.png"},
  {id:"ammo-2",name:"Rifle ammo",kind:"ammo",quantity:48,pane:"source",icon:"ammo_rifle.png"}
];
let items = [], selected = null, equipped = null, quantityTarget = null, consumeClick = false;
const sourceOpen = () => ui.scenario.value !== "case";
const find = id => items.find(item => item.id === id);
function actions(item) {
  const list = [];
  if (sourceOpen()) {
    const store = item.pane === "player";
    const reason = store && ui.scenario.value === "readonly" ? "Container is read-only" : ui.scenario.value === "full" ? "Destination is full" : "";
    list.push({id:"transfer",label:`${store ? "Store" : "Take"} ${item.quantity > 1 ? `stack (${item.quantity})` : "item"} → ${store ? "Supply case" : "Backpack"}`,reason});
    if (item.quantity > 1) list.push({id:"amount",label:"Transfer amount…",reason});
  }
  if (item.pane === "player") {
    if (item.kind === "weapon") list.push({id:"equip",label:equipped === item.id ? "Equipped" : "Equip",reason:equipped === item.id ? "Already in hand" : ""});
    if (item.kind === "throwable") list.push({id:"select",label:"Select throwable"});
    if (item.kind === "device") list.push({id:"deploy",label:"Deploy…"});
    if (item.rounds) list.push({id:"unload",label:`Unload ${item.rounds} rounds`});
    if (!list.length) list.push({id:"inspect",label:"Inspect"});
    if (item.quantity > 1) list.push({id:"split",label:"Split stack…"});
    list.push({id:"drop",label:item.quantity > 1 ? `Drop stack (${item.quantity})` : "Drop item"});
  } else list.push({id:"inspect",label:"Inspect"});
  return list;
}
function notice(text) { ui.receipt.textContent = text; }
function dismiss() { ui.menu.hidden = true; }
function choose(item) { selected = item.id; ui.selection.textContent = `${item.name} / ${item.pane === "player" ? "Backpack" : "Supply case"}${item.rounds ? ` / ${item.rounds} loaded rounds` : ""}`; }
function execute(item, action, quantity = item.quantity) {
  dismiss();
  if (!find(item.id)) return notice("Item changed — choose it again.");
  if (action.reason) return notice(`${action.label}: ${action.reason}. Nothing changed.`);
  if (action.id === "amount" || action.id === "split") {
    quantityTarget = {id:item.id,action:action.id}; ui.amount.max = action.id === "split" ? item.quantity - 1 : item.quantity;
    ui.amount.value = Math.min(item.quantity, Number(ui.amount.max));
    document.getElementById("quantity-title").textContent = action.label; ui.quantity.showModal(); return;
  }
  if (action.id === "transfer") {
    const destination = item.pane === "player" ? "source" : "player";
    if (quantity === item.quantity) item.pane = destination;
    else { item.quantity -= quantity; items.push({...item,id:crypto.randomUUID(),quantity,pane:destination}); }
    if (equipped === item.id) equipped = null;
    notice(`${quantity} transferred to ${destination === "player" ? "Backpack" : "Supply case"}.`);
  } else if (action.id === "equip") { equipped = item.id; notice(`${item.name} equipped.`); }
  else if (action.id === "select") notice(`${item.name} selected as throwable.`);
  else if (action.id === "deploy") notice("Study: hand off to placement preview. The real game must still require timed deployment.");
  else if (action.id === "unload") { notice(`${item.rounds} rounds returned to backpack (study).`); item.rounds = 0; }
  else if (action.id === "drop") { items = items.filter(value => value.id !== item.id); if (equipped === item.id) equipped = null; selected = null; notice("Dropped into the world (study only). Never a double-click default."); }
  else notice(`${item.name}: inspect details; no item action was applied.`);
  render();
}
function openMenu(item, x, y) {
  choose(item); ui.menu.replaceChildren();
  actions(item).forEach((action, index) => {
    const row = document.createElement("button"); row.type = "button"; row.role = "menuitem"; row.dataset.action = action.id;
    row.textContent = action.label; row.disabled = Boolean(action.reason);
    const hint = document.createElement("small"); hint.textContent = [index === 0 ? "DEFAULT · DOUBLE-CLICK" : "", action.reason].filter(Boolean).join(" / "); row.append(hint);
    row.addEventListener("click", () => execute(item, action)); ui.menu.append(row);
  });
  ui.menu.hidden = false;
  const target = document.querySelector(`[data-item="${item.id}"]`)?.getBoundingClientRect();
  const adjacent = target && target.right + ui.menu.offsetWidth + 24 < innerWidth ? target.right + 8 : target && target.left - ui.menu.offsetWidth - 8 >= 12 ? target.left - ui.menu.offsetWidth - 8 : x;
  ui.menu.style.left = `${Math.max(12, Math.min(adjacent, innerWidth - ui.menu.offsetWidth - 12))}px`;
  ui.menu.style.top = `${Math.max(12, Math.min(y, innerHeight - ui.menu.offsetHeight - 12))}px`;
  ui.menu.querySelector("button:not(:disabled)")?.focus();
}
function render() {
  ui.panes.replaceChildren();
  for (const pane of sourceOpen() ? ["player", "source"] : ["player"]) {
    const section = document.createElement("section"); section.className = "pane";
    const heading = document.createElement("h2"); heading.textContent = pane === "player" ? "BACKPACK" : "SUPPLY CASE"; section.append(heading);
    const grid = document.createElement("div"); grid.className = "grid";
    for (const item of items.filter(value => value.pane === pane)) {
      const button = document.createElement("button"); button.type = "button"; button.className = `item${selected === item.id ? " selected" : ""}`; button.dataset.item = item.id;
      const image = document.createElement("img"); image.src = `assets/${item.icon}`; image.alt = "";
      const name = document.createElement("span"); name.textContent = item.name;
      const quantity = document.createElement("small"); quantity.textContent = `${item.quantity}${equipped === item.id ? " · EQUIPPED" : ""}`;
      button.append(image, name, quantity);
      button.addEventListener("click", () => { choose(item); for (const row of document.querySelectorAll(".item")) row.classList.toggle("selected", row.dataset.item === item.id); });
      button.addEventListener("dblclick", () => execute(item, actions(item)[0]));
      button.addEventListener("contextmenu", event => { event.preventDefault(); openMenu(item,event.clientX,event.clientY); });
      button.addEventListener("keydown", event => {
        if (event.key === "Enter") { event.preventDefault(); execute(item,actions(item)[0]); }
        if ((event.shiftKey && event.key === "F10") || event.key === "ContextMenu") { event.preventDefault(); const box=button.getBoundingClientRect(); openMenu(item,box.right,box.top); }
      }); grid.append(button);
    }
    section.append(grid); ui.panes.append(section);
  }
}
ui.quantity.addEventListener("close", () => {
  const target = quantityTarget; quantityTarget = null;
  if (ui.quantity.returnValue !== "confirm" || !target) return;
  const item=find(target.id), quantity=Number(ui.amount.value);
  if (!item || !Number.isInteger(quantity) || quantity < 1 || quantity > Number(ui.amount.max)) return notice("Invalid quantity — nothing changed.");
  if (target.action === "split") { item.quantity -= quantity; items.push({...item,id:crypto.randomUUID(),quantity}); notice(`Split ${quantity} into a new stack (study).`); render(); }
  else execute(item,actions(item).find(action => action.id === "transfer"),quantity);
});
document.addEventListener("pointerdown", event => {
  if (!ui.menu.hidden && !ui.menu.contains(event.target)) {
    if (event.button === 2 && event.target.closest("[data-item]")) return;
    dismiss(); consumeClick = true; event.preventDefault(); event.stopPropagation();
  }
},true);
document.addEventListener("click", event => { if (consumeClick) { consumeClick=false; event.preventDefault(); event.stopPropagation(); } },true);
ui.menu.addEventListener("keydown", event => {
  if (!["ArrowDown","ArrowUp"].includes(event.key)) return;
  event.preventDefault();
  const rows=[...ui.menu.querySelectorAll("button:not(:disabled)")], index=rows.indexOf(document.activeElement);
  rows[(index + (event.key === "ArrowDown" ? 1 : rows.length-1)) % rows.length]?.focus();
});
document.addEventListener("keydown", event => { if (event.key === "Escape") dismiss(); });
document.addEventListener("scroll", dismiss,true); window.addEventListener("resize",dismiss);
function reset() { items=structuredClone(sample); selected=null; equipped=null; dismiss(); notice("Sample reset. Right-click or double-click an item."); render(); }
ui.scenario.addEventListener("change",reset); document.getElementById("reset").addEventListener("click",reset); reset();
