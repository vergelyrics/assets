(function(c,l,a,r,i,t,y) {if (!l.body.classList.contains('preview')) {c[a] = c[a] || function() {(c[a].q = c[a].q || []).push(arguments);};t = l.createElement(r);t.async = 1;t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt";y = l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t, y);}})(window, document, "clarity", "script", "fmykdo5h18");
(function() {
  const scripts = [
    {
      src: "https://cmp.gatekeeperconsent.com/min.js",
      attrs: { "data-cfasync": "false" }
    },
    {
      src: "https://the.gatekeeperconsent.com/cmp.min.js",
      attrs: { "data-cfasync": "false" }
    },
    {
      src: "//www.ezojs.com/ezoic/sa.min.js",
      attrs: { async: "true" }
    }
  ];

  function loadScript(config) {
    const s = document.createElement("script");
    s.src = config.src;
    for (const [key, value] of Object.entries(config.attrs || {})) {
      s.setAttribute(key, value);
    }
    document.head.appendChild(s);
  }

  // Load all scripts sequentially
  scripts.forEach(loadScript);

  // Initialize ezstandalone after scripts
  const inlineScript = document.createElement("script");
  inlineScript.textContent = `
    window.ezstandalone = window.ezstandalone || {};
    ezstandalone.cmd = ezstandalone.cmd || [];
  `;
  document.head.appendChild(inlineScript);
})();
