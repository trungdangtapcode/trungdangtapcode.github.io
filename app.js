(function () {
  "use strict";

  const catalog = window.BLACK_VEIL_ARCHIVE;
  const list = document.getElementById("version-list");
  const milestoneList = document.getElementById("milestone-list");
  const searchInput = document.getElementById("search-input");
  const kindFilter = document.getElementById("kind-filter");
  const statusFilter = document.getElementById("status-filter");
  const emptyState = document.getElementById("empty-state");
  const template = document.getElementById("version-card-template");
  const resultCount = document.getElementById("result-count");
  const activeFilters = document.getElementById("active-filters");
  const numberFormat = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 });
  const byteFormat = new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 });
  const kindLabels = {
    runtime: "Runtime",
    evidence: "Evidence",
    design: "Design",
    research: "Research",
    asset: "Asset work",
    unknown: "Unclassified"
  };
  const positiveTerms = ["pass", "passed", "success", "complete", "completed", "ready", "accepted"];
  const negativeTerms = ["fail", "failed", "error", "blocked", "mismatch"];
  const warningTerms = ["partial", "incomplete", "review", "pending", "prototype", "not recorded"];
  const cardDateFormat = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  });

  function safeUrl(value) {
    if (typeof value !== "string" || value.trim() === "") return null;
    const url = value.trim();
    if (/^(javascript|data|vbscript):/i.test(url)) return null;
    return url;
  }

  function displayBytes(value) {
    const bytes = Number(value);
    if (!Number.isFinite(bytes) || bytes <= 0) return "Not recorded";
    const units = ["B", "KB", "MB", "GB", "TB"];
    let amount = bytes;
    let unit = 0;
    while (amount >= 1024 && unit < units.length - 1) {
      amount /= 1024;
      unit += 1;
    }
    return `${byteFormat.format(amount)} ${units[unit]}`;
  }

  function kindLabel(value) {
    return kindLabels[value] || kindLabels.unknown;
  }

  function toneForStatus(status) {
    const normalized = String(status || "").toLowerCase();
    if (negativeTerms.some((term) => normalized.includes(term))) return "negative";
    if (warningTerms.some((term) => normalized.includes(term))) return "warning";
    if (positiveTerms.some((term) => normalized.includes(term))) return "positive";
    return "neutral";
  }

  function asText(value, fallback) {
    if (typeof value === "string" && value.trim()) return value.trim();
    return fallback;
  }

  function normalizedDate(value) {
    if (typeof value !== "string" || !value.trim()) return null;
    const timestamp = Date.parse(value);
    return Number.isFinite(timestamp) ? timestamp : null;
  }

  function formatRecordDate(value, provenance) {
    const timestamp = normalizedDate(value);
    const actualDate = timestamp === null ? "Date not recorded" : cardDateFormat.format(timestamp);
    const source = asText(provenance, "Date source not recorded");
    return `${actualDate} | ${source}`;
  }

  function selectHeroCover(versions) {
    const records = versions
      .map((version) => {
        const identity = [version.id, version.title, version.summary, ...(Array.isArray(version.tags) ? version.tags : [])]
          .filter((value) => typeof value === "string")
          .join(" ")
          .toLowerCase();
        const cover = safeUrl(version.cover);
        let priority = 0;
        if (/service[\s_-]*court/.test(identity)) priority = 2;
        if (/uit[\s_-]*building[\s_-]*c|building\s+c/.test(identity)) priority = Math.max(priority, 1);
        return { cover, priority };
      })
      .filter((record) => record.cover && record.priority > 0)
      .sort((left, right) => right.priority - left.priority);
    return records.length ? records[0].cover : null;
  }

  function renderHeroCover(versions) {
    const cover = selectHeroCover(versions);
    const image = document.getElementById("hero-cover");
    if (!cover) return;
    image.hidden = false;
    image.src = cover;
    image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
    image.addEventListener("error", () => {
      image.removeAttribute("src");
      image.remove();
    }, { once: true });
  }

  function addIconLink(parent, href, text, className) {
    const anchor = document.createElement("a");
    anchor.className = className;
    anchor.href = href;
    anchor.innerHTML = '<span></span><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
    anchor.querySelector("span").textContent = text;
    parent.append(anchor);
  }

  function makeVersionCard(version, index) {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".version-card");
    const boardUrl = safeUrl(version.doc_url || version.board_url);
    const cover = safeUrl(version.cover);
    const title = asText(version.title, asText(version.id, "Untitled record"));
    const summary = asText(version.summary, "No summary was supplied for this record.");
    const status = asText(version.status, "Status not recorded");
    const mediaCount = Number(version.media_count);
    const validMediaCount = Number.isFinite(mediaCount) && mediaCount > 0 ? Math.floor(mediaCount) : 0;

    card.style.animationDelay = `${Math.min(index, 12) * 25}ms`;
    fragment.querySelector(".cover-index").textContent = `RECORD / ${String(index + 1).padStart(3, "0")}`;
    fragment.querySelector(".cover-kind").textContent = kindLabel(version.kind);

    const image = fragment.querySelector(".cover-image");
    if (cover) {
      image.src = cover;
      image.alt = `Archive capture for ${title}`;
      image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
      image.addEventListener("error", () => {
        image.removeAttribute("src");
        image.remove();
      }, { once: true });
    } else {
      image.remove();
    }

    const coverLink = fragment.querySelector(".card-cover-link");
    if (boardUrl) {
      coverLink.href = boardUrl;
      coverLink.setAttribute("tabindex", "-1");
    } else {
      coverLink.removeAttribute("href");
    }

    const media = fragment.querySelector(".cover-media-count");
    if (validMediaCount > 0) {
      const mediaIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      mediaIcon.setAttribute("viewBox", "0 0 20 20");
      mediaIcon.setAttribute("fill", "none");
      mediaIcon.setAttribute("aria-hidden", "true");
      mediaIcon.innerHTML = '<rect x="2.5" y="4" width="15" height="12" rx="1" stroke="currentColor" stroke-width="1.2"/><circle cx="7" cy="8" r="1.2" fill="currentColor"/><path d="m4 14 4.2-3.7 2.7 2.3 2.6-2.2 2.5 2.3" stroke="currentColor" stroke-width="1.2"/>';
      media.append(mediaIcon, document.createTextNode(`${numberFormat.format(validMediaCount)} IMAGES`));
    } else {
      media.hidden = true;
    }

    fragment.querySelector(".card-date").textContent = formatRecordDate(version.date, version.date_label);
    const statusElement = fragment.querySelector(".card-status");
    statusElement.textContent = status;
    statusElement.dataset.tone = toneForStatus(status);
    fragment.querySelector(".card-title").textContent = title;
    fragment.querySelector(".card-summary").textContent = summary;

    const tags = fragment.querySelector(".card-tags");
    const safeTags = Array.isArray(version.tags) ? version.tags.filter((tag) => typeof tag === "string" && tag.trim()) : [];
    safeTags.slice(0, 5).forEach((value) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = value.trim();
      tags.append(tag);
    });
    if (safeTags.length === 0) tags.hidden = true;

    fragment.querySelector(".card-id").textContent = asText(version.id, "ID not recorded");
    const open = fragment.querySelector(".card-open");
    if (boardUrl) {
      open.href = boardUrl;
      open.setAttribute("aria-label", `Open preserved record for ${title}`);
      open.innerHTML = '<span>Open record</span><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
    } else {
      open.remove();
    }

    const searchable = [version.id, title, summary, version.status, version.date, version.date_label, ...(safeTags || [])]
      .filter(Boolean).join(" ").toLowerCase();
    card.dataset.kind = kindLabels[version.kind] ? version.kind : "unknown";
    card.dataset.status = status;
    card.dataset.search = searchable;
    card.dataset.date = String(normalizedDate(version.date) || "");
    return fragment;
  }

  function updateStatusOptions(versions) {
    const statuses = [...new Set(versions.map((entry) => asText(entry.status, "Status not recorded")))];
    statuses.sort((left, right) => left.localeCompare(right, undefined, { sensitivity: "base" }));
    statuses.forEach((status) => {
      const option = document.createElement("option");
      option.value = status;
      option.textContent = status;
      statusFilter.append(option);
    });
  }

  function updateActiveFilters() {
    activeFilters.replaceChildren();
    const terms = [];
    const query = searchInput.value.trim();
    if (query) terms.push(`Search: ${query}`);
    if (kindFilter.value !== "all") terms.push(`Type: ${kindLabel(kindFilter.value)}`);
    if (statusFilter.value !== "all") terms.push(`Status: ${statusFilter.value}`);
    terms.forEach((label) => {
      const chip = document.createElement("span");
      chip.className = "filter-chip";
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("viewBox", "0 0 12 12");
      icon.setAttribute("fill", "none");
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = '<path d="M2 2 10 10M10 2 2 10" stroke="currentColor" stroke-width="1.4"/>';
      chip.append(document.createTextNode(label), icon);
      activeFilters.append(chip);
    });
  }

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const kind = kindFilter.value;
    const status = statusFilter.value;
    const cards = [...list.children];
    let visible = 0;

    cards.forEach((card) => {
      const matches = (!query || card.dataset.search.includes(query))
        && (kind === "all" || card.dataset.kind === kind)
        && (status === "all" || card.dataset.status === status);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    resultCount.textContent = `${numberFormat.format(visible)} ${visible === 1 ? "ENTRY" : "ENTRIES"}`;
    document.getElementById("nav-count").textContent = `${numberFormat.format(cards.length)} VERSIONS`;
    list.hidden = visible === 0;
    emptyState.hidden = visible !== 0;
    updateActiveFilters();
  }

  function setStat(id, value) {
    document.getElementById(id).textContent = value;
  }

  function renderMilestones(milestones) {
    milestoneList.replaceChildren();
    if (!Array.isArray(milestones) || milestones.length === 0) {
      const note = document.createElement("p");
      note.className = "loading-note";
      note.textContent = "No milestones have been added to the archive yet.";
      milestoneList.append(note);
      return;
    }

    milestones.forEach((entry) => {
      const article = document.createElement("article");
      article.className = "milestone";
      const date = document.createElement("span");
      date.className = "milestone-date";
      date.textContent = asText(entry.date, "Date not recorded");
      const heading = document.createElement("h3");
      heading.textContent = asText(entry.title, "Untitled milestone");
      const summary = document.createElement("p");
      summary.textContent = asText(entry.summary, "No summary was supplied for this milestone.");
      article.append(date, heading, summary);

      const source = safeUrl(entry.source_url);
      if (source) {
        const link = document.createElement("a");
        link.className = "milestone-source";
        link.href = source;
        link.innerHTML = '<span>Source record</span><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5.5 10.5 10 6m-3.5 0H10v3.5" stroke="currentColor" stroke-width="1.2"/></svg>';
        article.append(link);
      }
      milestoneList.append(article);
    });
  }

  function renderArchive(data) {
    const versions = Array.isArray(data.versions) ? data.versions : [];
    document.title = `${asText(data.title, "Black Veil")} | Development Archive`;
    document.getElementById("archive-description").textContent = asText(
      data.description,
      "An evolving record of builds, experiments, and the decisions that shaped Black Veil."
    );

    if (typeof data.generated_at === "string" && data.generated_at.trim()) {
      const generated = document.getElementById("generated-date");
      const timestamp = new Date(data.generated_at);
      generated.textContent = `CATALOG / ${Number.isFinite(timestamp.getTime())
        ? new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" }).format(timestamp)
        : "Date not recorded"}`;
      generated.title = data.generated_at;
    }

    const stats = data.stats && typeof data.stats === "object" ? data.stats : {};
    setStat("stat-versions", numberFormat.format(Number.isFinite(Number(stats.versions)) ? Number(stats.versions) : versions.length));
    setStat("stat-media", Number.isFinite(Number(stats.media)) ? numberFormat.format(Number(stats.media)) : "Not recorded");
    setStat("stat-size", displayBytes(stats.bytes));

    const sorted = versions.map((entry, index) => ({ entry, index }))
      .sort((left, right) => {
        const leftDate = normalizedDate(left.entry.date);
        const rightDate = normalizedDate(right.entry.date);
        if (leftDate === null && rightDate === null) return left.index - right.index;
        if (leftDate === null) return 1;
        if (rightDate === null) return -1;
        return rightDate - leftDate || left.index - right.index;
      });

    list.replaceChildren();
    renderHeroCover(versions);
    updateStatusOptions(versions);
    sorted.forEach(({ entry }, index) => list.append(makeVersionCard(entry, index)));
    list.setAttribute("aria-busy", "false");
    renderMilestones(data.milestones);
    applyFilters();
  }

  function resetFilters() {
    searchInput.value = "";
    kindFilter.value = "all";
    statusFilter.value = "all";
    applyFilters();
    searchInput.focus();
  }

  document.getElementById("filter-form").addEventListener("submit", (event) => event.preventDefault());
  searchInput.addEventListener("input", applyFilters);
  kindFilter.addEventListener("change", applyFilters);
  statusFilter.addEventListener("change", applyFilters);
  document.getElementById("reset-filters").addEventListener("click", resetFilters);
  document.getElementById("empty-reset").addEventListener("click", resetFilters);

  document.querySelectorAll(".view-button").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.view;
      list.dataset.view = selected;
      document.querySelectorAll(".view-button").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });
  });

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const editing = target instanceof HTMLElement
      && (target.isContentEditable || ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName));
    if (event.key === "/" && !editing && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape" && target === searchInput && searchInput.value) {
      searchInput.value = "";
      applyFilters();
    }
  });

  if (!catalog || typeof catalog !== "object") {
    list.setAttribute("aria-busy", "false");
    list.hidden = true;
    emptyState.hidden = false;
    emptyState.querySelector("h3").textContent = "The catalog is not available yet.";
    emptyState.querySelector("p").textContent = "Place data/catalog.js beside this page to load the archived versions and milestones.";
    emptyState.querySelector("button").hidden = true;
    resultCount.textContent = "CATALOG MISSING";
    document.getElementById("nav-count").textContent = "CATALOG MISSING";
    return;
  }

  renderArchive(catalog);
})();
