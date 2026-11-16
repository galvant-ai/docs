/*
 * Appends the current page to Mintlify's breadcrumb eyebrow, so the trail
 * reads e.g. "Chat > Ask Scout > Use tables and charts" instead of stopping
 * at the parent. The page label comes from the active sidebar item, so it
 * matches the sidebarTitle. Re-runs on client-side navigation.
 */
(function () {
  var MARK = 'galvant-breadcrumb-current';

  function currentLabel() {
    var active = document.querySelector('#sidebar a[aria-current="page"], nav a[aria-current="page"]');
    var text = active ? active.textContent.trim() : '';
    if (!text) {
      var h1 = document.getElementById('page-title');
      text = h1 ? h1.textContent.trim() : '';
    }
    return text;
  }

  function makeChevron(list) {
    // Prefer Mintlify's own chevron so the style matches exactly.
    var existing = list.querySelector('li.breadcrumb-item svg');
    if (existing) return existing.cloneNode(true);

    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('viewBox', '0 0 18 18');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2.5');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('class', 'size-3 text-gray-400 dark:text-gray-500 shrink-0');

    // Reuse the icon sprite when the page has it; otherwise draw the chevron inline.
    var symbol = document.querySelector('symbol[id$="-ChevronRight"]');
    if (symbol) {
      var use = document.createElementNS(NS, 'use');
      use.setAttribute('href', '#' + symbol.id);
      svg.appendChild(use);
    } else {
      var path = document.createElementNS(NS, 'path');
      path.setAttribute('d', 'M6.75 3.5L12.25 9L6.75 14.5');
      svg.appendChild(path);
    }
    return svg;
  }

  function update() {
    var list = document.querySelector('#header nav[aria-label="Breadcrumb"] ol');
    if (!list) return;
    var label = currentLabel();
    if (!label) return;

    var existing = list.querySelector('.' + MARK);
    if (existing) {
      if (existing.getAttribute('data-breadcrumb-title') === label) return;
      existing.remove();
    }

    var items = list.querySelectorAll('li.breadcrumb-item');
    if (!items.length) return;
    var last = items[items.length - 1];
    if (last.getAttribute('data-breadcrumb-title') === label) return;

    // Give the previous last item a chevron so every level is separated the same way.
    if (!last.querySelector('svg')) {
      last.appendChild(makeChevron(list));
    }

    var li = document.createElement('li');
    li.className = last.className + ' ' + MARK;
    li.setAttribute('data-breadcrumb-title', label);
    li.setAttribute('aria-current', 'page');
    li.textContent = label;
    list.appendChild(li);
  }

  function start() {
    update();
    new MutationObserver(function () { update(); }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'complete') {
    start();
  } else {
    window.addEventListener('load', start);
  }
})();
