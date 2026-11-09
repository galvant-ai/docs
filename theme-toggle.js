/*
 * Replaces Mintlify's single theme button with a three-way segmented control
 * (Light / Dark / System). It stores the preference in the same localStorage
 * key Mintlify uses and dispatches a storage event so the site's own theme
 * provider applies it. The active button is highlighted via CSS that reads
 * the data-theme-preference attribute Mintlify sets on <html>.
 */
(function () {
  var KEY = 'isDarkMode';
  var ORDER = ['light', 'dark', 'system'];
  var LABELS = { light: 'Light', dark: 'Dark', system: 'System' };

  function applyDirectly(value) {
    var d = document.documentElement;
    var resolved = value === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : value;
    d.classList.remove(resolved === 'dark' ? 'light' : 'dark');
    d.classList.add(resolved);
    d.setAttribute('data-theme-preference', value);
  }

  function setTheme(value) {
    try { window.localStorage.setItem(KEY, value); } catch (e) { /* storage blocked */ }
    applyDirectly(value);
    try {
      window.dispatchEvent(new StorageEvent('storage', { key: KEY, newValue: value }));
    } catch (e) { /* older browsers; direct apply already done */ }
    sync();
  }

  function sync() {
    var current = document.documentElement.getAttribute('data-theme-preference') || 'system';
    var buttons = document.querySelectorAll('.galvant-theme-seg-btn');
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute('data-theme-value') === current;
      buttons[i].setAttribute('aria-checked', on ? 'true' : 'false');
    }
  }

  function build(trigger) {
    var seg = document.createElement('div');
    seg.className = 'galvant-theme-seg';
    seg.setAttribute('role', 'radiogroup');
    seg.setAttribute('aria-label', 'Theme');

    ORDER.forEach(function (value) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'galvant-theme-seg-btn';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('data-theme-value', value);
      btn.setAttribute('aria-label', LABELS[value] + ' theme');
      btn.title = LABELS[value];

      var source = trigger.querySelector('[data-theme-preference-icon="' + value + '"] svg');
      if (source) {
        var svg = source.cloneNode(true);
        svg.removeAttribute('class');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        btn.appendChild(svg);
      } else {
        btn.textContent = LABELS[value];
      }

      btn.addEventListener('click', function () { setTheme(value); });
      seg.appendChild(btn);
    });

    return seg;
  }

  function mount() {
    var trigger = document.getElementById('theme-preference-menu-trigger');
    if (!trigger || !trigger.parentNode) return;
    if (trigger.parentNode.querySelector('.galvant-theme-seg')) return;
    trigger.parentNode.insertBefore(build(trigger), trigger);
    sync();
  }

  function start() {
    mount();
    // Mintlify re-renders the navbar on client-side navigation; re-mount when needed.
    new MutationObserver(function () { mount(); }).observe(document.body, { childList: true, subtree: true });
    // Keep aria-checked in step when the theme changes from elsewhere (system change, other tab).
    new MutationObserver(sync).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme-preference']
    });
  }

  if (document.readyState === 'complete') {
    start();
  } else {
    window.addEventListener('load', start);
  }
})();
