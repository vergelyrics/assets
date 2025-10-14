// !function(e){const t="pointer-events:none;height:1px;width:0;opacity:0;visibility:hidden;position:fixed;bottom:0;",o=e.createElement("div"),a=e.createElement("div"),n=e.createElement("ins"),d=e.head;o.id="div-gpt-ad-3061307416813-0",o.style=t,a.className="textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox ads",a.style=t,n.className="adsbygoogle",n.style="display:none;";const i={allowed:null,elements:[o,a,n]};!function(t){const s=e.body;"function"==typeof t&&(s.appendChild(o),s.appendChild(a),s.appendChild(n),setTimeout((()=>{if(0===o.offsetHeight||0===a.offsetHeight||n.firstElementChild)i.allowed=!1,t(i);else{const o=e.createElement("script");o.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",o.async=!0,o.crossOrigin="anonymous",o.onload=()=>{i.allowed=!0,t(i)},o.onerror=()=>{i.allowed=!1,t(i)},d.appendChild(o)}o.remove(),a.remove(),n.remove()}),40))}((function(t){e.documentElement.setAttribute("data-ad-blocker",t.allowed?"false":"true"),!t.allowed&&window.toastNotif&&"function"==typeof toastNotif.already&&window.toastNotif.already("Ad blocker detected")}))}(document);

(function (window, document) {
  /**
   * Configuration
   */
  const DEMO_MODE = false; // true = placeholder mode
  const AD_CLIENT_ID = 'ca-pub-6775067462642603';

  const body = document.body;
  if (!body) return;

  const isDesktop = body.classList.contains('desktop');
  const isMobile = body.classList.contains('mobile');
  if (!isDesktop && !isMobile) return;

  /**
   * Ad slot configurations
   */
  const adSlotsConfig = {
    slot1: { slotId: '6361622853', desktop: { style: 'display:inline-block;width:728px;height:90px;' }, mobile: { style: 'display:block;width:300px;height:250px;', format: 'auto' } },
    slot2: { slotId: '2324490715', desktop: { style: 'display:inline-block;width:728px;height:90px;' }, mobile: { style: 'display:block;width:300px;height:250px;', format: 'auto' } },
    slot3: { slotId: '5472881313', desktop: { style: 'display:inline-block;width:728px;height:90px;' }, mobile: { style: 'display:block;width:300px;height:250px;', format: 'auto' } },

    // ✅ Custom fluid in-article format
    slot4: { slotId: '9166032519', type: 'fluid' },
    slot5: { slotId: '3907441751', type: 'fluid' },
  };

  /**
   * Dynamically load Google AdSense script
   */
  function loadAdSenseScript(callback) {
    if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
      callback();
      return;
    }
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.onload = callback;
    document.head.appendChild(script);
  }

  /**
   * Load ad into a container
   */
  function loadAd(container, slotConfig) {
    if (container.hasAttribute('data-loaded')) return;

    let adHTML = '';

    if (slotConfig.type === 'fluid') {
      // ✅ In-article fluid ad
      adHTML = `
        <ins class="adsbygoogle"
             style="display:block; text-align:center;"
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="${AD_CLIENT_ID}"
             data-ad-slot="${slotConfig.slotId}"></ins>`;
    } else {
      // ✅ Normal responsive ad
      const currentConfig = isDesktop ? slotConfig.desktop : slotConfig.mobile;
      const styleAttr = currentConfig.style ? `style="${currentConfig.style}"` : '';
      const formatAttr = currentConfig.format ? `data-ad-format="${currentConfig.format}"` : '';

      adHTML = `
        <ins class="adsbygoogle"
             ${styleAttr}
             data-ad-client="${AD_CLIENT_ID}"
             data-ad-slot="${slotConfig.slotId}"
             data-full-width-responsive="false"
             ${formatAttr}></ins>`;
    }

    // Insert and immediately push the ad
    container.insertAdjacentHTML('beforeend', adHTML);

    if (!DEMO_MODE) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense load failed for:', slotConfig.slotId, e);
      }
    }

    container.setAttribute('data-loaded', 'true');
  }

  /**
   * Lazy-load ads with smart observer
   */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const slotName = container.id;
        const slotConfig = adSlotsConfig[slotName];

        if (slotConfig) {
          loadAd(container, slotConfig);
          observer.unobserve(container); // Stop observing once loaded
        }
      }
    });

    // ✅ Disconnect if all ads loaded
    const allAdContainers = document.querySelectorAll('.c-ad > div[id]');
    const remaining = Array.from(allAdContainers).filter(c => !c.getAttribute('data-loaded'));
    if (remaining.length === 0) observer.disconnect();
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  /**
   * Observe all ad containers
   */
  Object.keys(adSlotsConfig).forEach(slotName => {
    const el = document.getElementById(slotName);
    if (el) observer.observe(el);
  });

  /**
   * Load AdSense script once
   */
  if (!DEMO_MODE) loadAdSenseScript(() => {});
})(window, document);

!function e(){const a=document.documentElement.getAttribute("data-ad-blocker");if(null!==a){if("false"!==a&&"true"===a){const e=document.querySelector(".lyricsContainer, .lyricsContain");e&&(e.innerHTML='<div class="f fdc w100 gap-10 ai-c jc-c noItm"><div class="nItmSvg"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="M15.728 14.443a.91.91 0 0 1-1.286 1.286 3.433 3.433 0 0 0-2.443-1.012c-.923 0-1.79.359-2.443 1.012a.909.909 0 1 1-1.286-1.286 5.237 5.237 0 0 1 3.728-1.544 5.234 5.234 0 0 1 3.73 1.544zm-6.75-3.526c.226-.225.355-.538.355-.857s-.129-.631-.355-.857a1.222 1.222 0 0 0-.857-.355c-.319 0-.631.13-.857.355-.225.226-.355.539-.355.857s.13.632.355.857c.225.225.538.355.857.355s.632-.129.857-.355zm6.901-2.069c-.319 0-.631.13-.857.355-.226.226-.355.538-.355.857s.129.632.355.857c.226.225.538.355.857.355s.632-.13.857-.355c.226-.225.355-.538.355-.857s-.129-.631-.355-.857a1.224 1.224 0 0 0-.857-.355zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path></svg></div><div class="nItmTxt">Unfortunately, to show full lyrics, please disable your ad blocker and refresh this page...</div></div>'),document.querySelectorAll("[data-play-id]").forEach((e=>{e.disabled=!0,e.classList.add("disabled")}))}}else setTimeout(e,1e3)}();
