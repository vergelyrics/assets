(function loadDynamicGPT(){
  const adContainerId='gpt',adSlotId='div-gpt-ad-1760384006499-0',adUnitPath='/23202279818/bannerTop';
  window.googletag=window.googletag||{cmd:[]};

  // --- Dynamic Style ---
  const style=document.createElement('style');
  style.id='gpt-ads-css';
  style.textContent=`.gpt-loaded .vTheme{padding-bottom:calc(8rem + 70px)} .gpt-ads{bottom:70px;max-height:90px;overflow:hidden} .gpt-in{min-height:90px} .gpt-in > *{max-height:90px}`;
  document.head.appendChild(style);

  const root=document.getElementById(adContainerId);
  if(!root)return;
  const wrapper=document.createElement('div');
  wrapper.className='gpt-ads';
  wrapper.innerHTML=`<div class="gpt-in"><div id="${adSlotId}"></div></div>`;
  root.appendChild(wrapper);
  document.body.classList.add('gpt-loaded');

  // --- Execute GPT after 2s ---
  setTimeout(function(){
    googletag.cmd.push(function(){
      const REFRESH_KEY='refresh',REFRESH_VALUE='true',SECONDS_TO_WAIT_AFTER_VIEWABILITY=30;
      const isMobile=/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const adSizes=isMobile?[[320,50],[728,90]]:[[728,90],[320,50]];
      const slot=googletag.defineSlot(adUnitPath,adSizes,adSlotId).setTargeting(REFRESH_KEY,REFRESH_VALUE).addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.pubads().collapseEmptyDivs();
      googletag.pubads().addEventListener('impressionViewable',function(e){
        const s=e.slot;
        if(s.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE)>-1){
          setTimeout(function(){googletag.pubads().refresh([s])},SECONDS_TO_WAIT_AFTER_VIEWABILITY*1000);
        }
      });
      googletag.enableServices();
      googletag.display(adSlotId);
    });

    // --- Check after 5s for display:none ---
    setTimeout(function(){
      const adDiv=document.getElementById(adSlotId);
      if(adDiv&&getComputedStyle(adDiv).display==='none'){
        console.error('GPT failed, switching to AdSense');
        const gptIn=adDiv.parentElement;
        gptIn.innerHTML='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6775067462642603" data-ad-slot="1783335088" data-ad-format="auto" data-full-width-responsive="true"></ins>';
        setTimeout(function(){(adsbygoogle=window.adsbygoogle||[]).push({});},2000);
      }
    },5000);
  },2000);
})();
