(function (window, document) {
  /**
   * Configuration
   */
  const DEMO_MODE = false; // true = show placeholder ads, false = load real AdSense
  const AD_CLIENT_ID = 'ca-pub-6775067462642603'; // <<< your real AdSense client ID

  /**
   * Run only if body has either "desktop" or "mobile" class
   */
  const isDesktop = document.body.classList.contains('desktop');
  const isMobile = document.body.classList.contains('mobile');
  if (!isDesktop && !isMobile) return;

  /**
   * Ad slot configurations
   */
  const adSlotsConfig = {
    slot1: {
      slotId: '6361622853',
      desktop: {
        style: 'display:inline-block;width:728px;height:90px',
        format: '',
      },
      mobile: {
        style: 'display:block;width:100%;height:90px',
        format: 'auto',
      },
    },
    slot2: {
      slotId: '2324490715',
      desktop: {
        style: 'display:inline-block;width:728px;height:90px',
        format: '',
      },
      mobile: {
        style: 'display:block;width:100%;height:90px',
        format: 'auto',
      },
    },
    slot3: {
      slotId: '5472881313',
      desktop: {
        style: 'display:inline-block;width:728px;height:90px',
        format: '',
      },
      mobile: {
        style: 'display:block;width:100%;height:90px',
        format: 'auto',
      },
    },
    slot4: {
      slotId: '5015330716',
      desktop: {
        style: 'display:inline-block;width:300px;height:250px',
        format: '',
      },
      mobile: {
        style: 'display:block;width:300px;height:250px;',
        format: 'auto',
      },
    },
    slot5: {
      slotId: '9809327123',
      desktop: {
        style: 'display:inline-block;width:300px;height:250px',
        format: '',
      },
      mobile: {
        style: 'display:block;width:300px;height:250px;',
        format: 'auto',
      },
    },
  };

  /**
   * Load Google AdSense script dynamically
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
   * Load ad into container
   */
  function loadAd(container, slotConfig) {
    if (container.getAttribute('data-loaded')) return;

    const currentDeviceConfig = isDesktop ? slotConfig.desktop : slotConfig.mobile;
    const adSlot = slotConfig.slotId;
    const style = currentDeviceConfig.style;
    const format = currentDeviceConfig.format;
    const adFormatAttr = format ? `data-ad-format="${format}"` : '';
    const adStyleAttr = style ? `style="${style}"` : '';

    let html;
    if (DEMO_MODE) {
      html = `<ins class="adB">Demo Ad Loaded: ${adSlot} (${isDesktop ? 'Desktop' : 'Mobile'})</ins>`;
    } else {
      html = `<ins class="adsbygoogle" ${adStyleAttr}
        data-ad-client="${AD_CLIENT_ID}"
        data-ad-slot="${adSlot}"
        data-full-width-responsive="false"
        ${adFormatAttr}></ins>`;
    }

    container.insertAdjacentHTML('beforeend', html);

    if (!DEMO_MODE) {
      // Wait a bit to ensure layout width is ready before rendering ad
      setTimeout(() => {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error('AdSense push error:', e);
        }
      }, 300);
    }

    container.setAttribute('data-loaded', 'true');
  }

  /**
   * Lazy-load with IntersectionObserver
   */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const slotName = container.id;
          const slotConfig = adSlotsConfig[slotName];
          if (slotConfig) {
            loadAd(container, slotConfig);
            observer.unobserve(container);
          }
        }
      });

      const allAdContainers = document.querySelectorAll('.c-ad > div[id]');
      const remaining = Array.from(allAdContainers).filter((c) => !c.getAttribute('data-loaded'));
      if (remaining.length === 0) observer.disconnect();
    },
    { root: null, rootMargin: '0px', threshold: 0.1 }
  );

  /**
   * Observe all ad containers
   */
  Object.keys(adSlotsConfig).forEach((slotName) => {
    const container = document.getElementById(slotName);
    if (container) observer.observe(container);
  });

  /**
   * Load AdSense script
   */
  if (!DEMO_MODE) {
    loadAdSenseScript(() => console.log('AdSense script loaded'));
  }
})(window, document);

!function e(){const a=document.documentElement.getAttribute("data-ad-blocker");if(null!==a){if("false"!==a&&"true"===a){const e=document.querySelector(".lyricsContainer, .lyricsContain");e&&(e.innerHTML='<div class="f fdc w100 gap-10 ai-c jc-c noItm"><div class="nItmSvg"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="M15.728 14.443a.91.91 0 0 1-1.286 1.286 3.433 3.433 0 0 0-2.443-1.012c-.923 0-1.79.359-2.443 1.012a.909.909 0 1 1-1.286-1.286 5.237 5.237 0 0 1 3.728-1.544 5.234 5.234 0 0 1 3.73 1.544zm-6.75-3.526c.226-.225.355-.538.355-.857s-.129-.631-.355-.857a1.222 1.222 0 0 0-.857-.355c-.319 0-.631.13-.857.355-.225.226-.355.539-.355.857s.13.632.355.857c.225.225.538.355.857.355s.632-.129.857-.355zm6.901-2.069c-.319 0-.631.13-.857.355-.226.226-.355.538-.355.857s.129.632.355.857c.226.225.538.355.857.355s.632-.13.857-.355c.226-.225.355-.538.355-.857s-.129-.631-.355-.857a1.224 1.224 0 0 0-.857-.355zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"></path></svg></div><div class="nItmTxt">Unfortunately, to show full lyrics, please disable your ad blocker and refresh this page...</div></div>'),document.querySelectorAll("[data-play-id]").forEach((e=>{e.disabled=!0,e.classList.add("disabled")}))}}else setTimeout(e,1e3)}();
