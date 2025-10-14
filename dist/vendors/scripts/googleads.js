// !function(e){const t="pointer-events:none;height:1px;width:0;opacity:0;visibility:hidden;position:fixed;bottom:0;",o=e.createElement("div"),a=e.createElement("div"),n=e.createElement("ins"),d=e.head;o.id="div-gpt-ad-3061307416813-0",o.style=t,a.className="textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox ads",a.style=t,n.className="adsbygoogle",n.style="display:none;";const i={allowed:null,elements:[o,a,n]};!function(t){const s=e.body;"function"==typeof t&&(s.appendChild(o),s.appendChild(a),s.appendChild(n),setTimeout((()=>{if(0===o.offsetHeight||0===a.offsetHeight||n.firstElementChild)i.allowed=!1,t(i);else{const o=e.createElement("script");o.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",o.async=!0,o.crossOrigin="anonymous",o.onload=()=>{i.allowed=!0,t(i)},o.onerror=()=>{i.allowed=!1,t(i)},d.appendChild(o)}o.remove(),a.remove(),n.remove()}),40))}((function(t){e.documentElement.setAttribute("data-ad-blocker",t.allowed?"false":"true"),!t.allowed&&window.toastNotif&&"function"==typeof toastNotif.already&&window.toastNotif.already("Ad blocker detected")}))}(document);

(function() {
  const publisherId = 'ca-pub-6775067462642603';
  const adConfig = {
    slot1: {
      html: `<!-- VergeLyrics_AD1 -->
        <ins class="adsbygoogle" style="display:block"
          data-ad-client="${publisherId}"
          data-ad-slot="2324490715"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>`,
    },
    slot2: {
      html: `<!-- VergeLyrics_AD2 -->
        <ins class="adsbygoogle" style="display:block"
          data-ad-client="${publisherId}"
          data-ad-slot="5472881313"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>`,
    },
    slot4: {
      html: `<!-- VergeLyrics_AD4 -->
        <ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px"
          data-ad-client="${publisherId}"
          data-ad-slot="5015330716"></ins>`,
    },
    slot5: {
      html: `<!-- VergeLyrics_AD5 -->
        <ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px"
          data-ad-client="${publisherId}"
          data-ad-slot="9809327123"></ins>`,
    },
  };

  // ---- Load AdSense script once ----
  function loadAdsenseOnce() {
    if (window.__adsenseLoaded) return Promise.resolve();
    return new Promise((resolve, reject) => {
      if (window.adsbygoogle) { window.__adsenseLoaded = true; return resolve(); }
      const s = document.createElement('script');
      s.async = true;
      s.crossOrigin = 'anonymous';
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
      s.onload = () => { window.__adsenseLoaded = true; resolve(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // ---- Insert ad into slot ----
  function renderAd(slotId) {
    const el = document.getElementById(slotId);
    if (!el || el.dataset.loaded === 'true') return;

    const conf = adConfig[slotId];
    if (!conf) return;

    el.innerHTML = conf.html;
    (adsbygoogle = window.adsbygoogle || []).push({});
    el.dataset.loaded = 'true';

    // Retry if unfilled after 10s
    setTimeout(() => {
      if (el.offsetHeight < 50) { // heuristic for unfilled
        console.warn(`[Ad Retry] ${slotId}`);
        el.dataset.loaded = 'false';
        el.innerHTML = '';
        renderAd(slotId);
      }
    }, 10000);
  }

  // ---- Observe visible ads ----
  function initAdObserver() {
    const ads = document.querySelectorAll('.c-ad > div[id]');
    if (!ads.length) return;

    const total = ads.length;
    let loadedCount = 0;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target;
        const id = target.id;

        if (entry.isIntersecting && target.dataset.loaded !== 'true') {
          renderAd(id);
          loadedCount++;
        }

        // disconnect when all filled
        if (loadedCount >= total) {
          setTimeout(() => observer.disconnect(), 3000);
        }
      });
    }, { rootMargin: '200px' });

    ads.forEach(el => observer.observe(el));

    // --- Watch for dynamically added .c-ad elements ---
    const mo = new MutationObserver(muts => {
      muts.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1 && node.matches('.c-ad > div[id]')) {
            observer.observe(node);
          } else if (node.nodeType === 1) {
            node.querySelectorAll('.c-ad > div[id]').forEach(inner => observer.observe(inner));
          }
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  // ---- Safe initializer (works even if DOM already loaded) ----
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  // ---- Start ----
  ready(() => {
    loadAdsenseOnce()
      .then(initAdObserver)
      .catch(e => console.error('AdSense load failed:', e));
  });
})();

!function e(){const a=document.documentElement.getAttribute("data-ad-blocker");if(null!==a){if("false"!==a&&"true"===a){const e=document.querySelector(".lyricsContainer, .lyricsContain");e&&(e.innerHTML='<div class="f fdc w100 gap-10 ai-c jc-c noItm"><div class="nItmSvg"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="M15.728 14.443a.91.91 0 0 1-1.286 1.286 3.433 3.433 0 0 0-2.443-1.012c-.923 0-1.79.359-2.443 1.012a.909.909 0 1 1-1.286-1.286 5.237 5.237 0 0 1 3.728-1.544 5.234 5.234 0 0 1 3.73 1.544zm-6.75-3.526c.226-.225.355-.538.355-.857s-.129-.631-.355-.857a1.222 1.222 0 0 0-.857-.355c-.319 0-.631.13-.857.355-.225.226-.355.539-.355.857s.13.632.355.857c.225.225.538.355.857.355s.632-.129.857-.355zm6.901-2.069c-.319 0-.631.13-.857.355-.226.226-.355.538-.355.857s.129.632.355.857c.226.225.538.355.857.355s.632-.13.857-.355c.226-.225.355-.538.355-.857s-.129-.631-.355-.857a1.224 1.224 0 0 0-.857-.355zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path></svg></div><div class="nItmTxt">Unfortunately, to show full lyrics, please disable your ad blocker and refresh this page...</div></div>'),document.querySelectorAll("[data-play-id]").forEach((e=>{e.disabled=!0,e.classList.add("disabled")}))}}else setTimeout(e,1e3)}();
