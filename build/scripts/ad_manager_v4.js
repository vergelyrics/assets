(function(){"use strict";
    const AD_SLOTS = {
        "parchar_top_post": {
            sponsored: {
                active: false,
                provider: "Sponsored",
                desktop: {
                    title: "VergeLyrics Sponsored Ad Desktop Top Post",
                    url: "/p/advertise.html?goto=Top_Post",
                    img: "https://assets.vergelyrics.com/build/parchar/default/720x90_Parchar_Default.webp",
                    width: "720",
                    height: "90"
                },
                mobile: {
                    title: "VergeLyrics Sponsored Ad Mobile Top Post",
                    url: "/p/advertise.html?goto=Top_Post",
                    img: "https://assets.vergelyrics.com/build/parchar/default/300x250_Parchar_Default.webp",
                    width: "300",
                    height: "250"
                }
            },

            fallback: {
                provider: "VergeLyrics Ads",
                desktop: {
                    title: "Default VergeLyrics Ads Desktop Top Post",
                    url: "/p/advertise.html?goto=Top_Post",
                    img: "https://assets.vergelyrics.com/build/parchar/default/720x90_Parchar_Default.webp",
                    width: "720",
                    height: "90"
                },
                mobile: {
                    title: "Default VergeLyrics Ads Mobile Top Post",
                    url: "/p/advertise.html?goto=Top_Post",
                    img: "https://assets.vergelyrics.com/build/parchar/default/300x250_Parchar_Default.webp",
                    width: "300",
                    height: "250"
                }
            }
        },

        "parchar_banner": {
            sponsored: {
                active: false,
                provider: "Sponsored",
                desktop: {
                    title: "VergeLyrics Sponsored Ad Desktop Banner",
                    url: "/p/advertise.html?goto=Banner",
                    img: "https://assets.vergelyrics.com/build/parchar/default/320x50_Parchar_Default.webp",
                    width: "320",
                    height: "50"
                },
                mobile: {
                    title: "VergeLyrics Sponsored Ad Mobile Banner",
                    url: "/p/advertise.html?goto=Banner",
                    img: "https://assets.vergelyrics.com/build/parchar/default/320x50_Parchar_Default.webp",
                    width: "320",
                    height: "50"
                }
            },

            fallback: {
                provider: "VergeLyrics Ads",
                desktop: {
                    title: "Default VergeLyrics Ads Banner",
                    url: "/p/advertise.html?goto=Banner",
                    img: "https://assets.vergelyrics.com/build/parchar/default/320x50_Parchar_Default.webp",
                    width: "320",
                    height: "50"
                },
                mobile: {
                    title: "Default VergeLyrics Ads Banner",
                    url: "/p/advertise.html?goto=Banner",
                    img: "https://assets.vergelyrics.com/build/parchar/default/320x50_Parchar_Default.webp",
                    width: "320",
                    height: "50"
                }
            }
        }
    };
const GENERAL_SETTINGS={adBlockChecker:true,adBlockMessage:"Adblocker is on!",googleProvider:"Google Adsense",defaultFallbackProvider:"VergeLyrics In-House",safetyTimeoutMs:6000};let hasAlertedAdBlock=false;let adBlockCheckTimer=null;let anyAdSenseResponded=false;function showAdBlockToast(message){document.documentElement.setAttribute("data-adblocker","true");if(typeof window.toastNotif==="function"){window.toastNotif(message);}else if(typeof toastNotif==="function"){toastNotif(message);}}function checkAdBlocker(){adBlockCheckTimer=null;if(!GENERAL_SETTINGS.adBlockChecker||hasAlertedAdBlock)return;const isScriptLoaded=Boolean(window.adsbygoogle&&window.adsbygoogle.loaded===true);if(!isScriptLoaded||!anyAdSenseResponded){hasAlertedAdBlock=true;showAdBlockToast(GENERAL_SETTINGS.adBlockMessage||"Adblocker is on!");}}function scheduleAdBlockCheck(){if(!GENERAL_SETTINGS.adBlockChecker||hasAlertedAdBlock)return;if(adBlockCheckTimer)clearTimeout(adBlockCheckTimer);adBlockCheckTimer=setTimeout(checkAdBlocker,GENERAL_SETTINGS.safetyTimeoutMs+500);}function getDeviceType(){const isMobile=window.innerWidth<=768||/android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent);return isMobile?"mobile":"desktop";}function getScrollOffset(){return Math.max(window.pageYOffset||0,document.documentElement?document.documentElement.scrollTop||0:0,document.body?document.body.scrollTop||0:0);}function insertDirectAd(slot,item,deviceType,config,stateClass){const data=(config&&config[deviceType])||(config&&(config.desktop||config.mobile));const providerName=(config&&config.provider)||GENERAL_SETTINGS.defaultFallbackProvider;item.classList.remove("is-loading-parchar","is-initial","bg-yellow");item.classList.add(stateClass);const loader=item.querySelector(".vl-loader-svg");if(loader)loader.remove();slot.setAttribute("data-parchar-provider",providerName);const ins=item.querySelector("ins.adsbygoogle");if(ins){ins.classList.add("hidden!");}const existingLink=item.querySelector("a.outline-hidden");if(existingLink)existingLink.remove();if(!data||!data.img){slot.style.display="none";slot.classList.add("is-unfilled");return;}const link=document.createElement("a");link.className="outline-hidden block w-full h-full flex items-center justify-center";link.setAttribute("aria-label",data.title||"Advertisement");link.title=data.title||"Advertisement";link.href=data.url||"#";if(data.url&&/^https?:\/\//i.test(data.url)){link.target="_blank";link.rel="noopener noreferrer";}const img=document.createElement("img");img.src=data.img;img.alt=data.title||"Advertisement";img.className="block max-w-full h-auto object-cover";const widthVal=parseInt(data.width,10);const heightVal=parseInt(data.height,10);if(!isNaN(widthVal))img.setAttribute("width",String(widthVal));if(!isNaN(heightVal))img.setAttribute("height",String(heightVal));link.appendChild(img);item.appendChild(link);}function mountParcharSlot(slot,deviceType){if(!slot||slot.dataset.parcharInit==="true")return;slot.dataset.parcharInit="true";const item=slot.querySelector(".parchar-item")||slot;const slotId=slot.id||"";const slotConfig=AD_SLOTS[slotId];if(slotConfig&&slotConfig.sponsored&&slotConfig.sponsored.active){insertDirectAd(slot,item,deviceType,slotConfig.sponsored,"is-sponsored");return;}const pick=slot.querySelector(".parchar-pick");if(!pick)return;const template=pick.querySelector(`template[data-device="${deviceType}"]`)||pick.querySelector("template");if(!template||!template.content)return;const clone=document.importNode(template.content,true);const ins=clone.querySelector("ins.adsbygoogle");if(!ins)return;item.appendChild(clone);const loader=item.querySelector(".vl-loader-svg");if(loader)loader.remove();item.classList.remove("is-initial");item.classList.add("is-loading-parchar");let isResolved=false;let observer=null;let safetyTimer=null;function onAdFilled(){if(isResolved)return;isResolved=true;anyAdSenseResponded=true;if(safetyTimer)clearTimeout(safetyTimer);if(observer)observer.disconnect();if(adBlockCheckTimer){clearTimeout(adBlockCheckTimer);adBlockCheckTimer=null;}item.classList.remove("is-loading-parchar","bg-yellow");item.classList.add("is-loaded");slot.setAttribute("data-parchar-provider",GENERAL_SETTINGS.googleProvider);}function onAdUnfilled(fromAdSenseStatus){if(isResolved)return;isResolved=true;if(fromAdSenseStatus)anyAdSenseResponded=true;if(safetyTimer)clearTimeout(safetyTimer);if(observer)observer.disconnect();const fallbackConfig=(slotConfig&&slotConfig.fallback)||null;insertDirectAd(slot,item,deviceType,fallbackConfig,"is-fallback");}safetyTimer=setTimeout(function(){if(!isResolved){onAdUnfilled(false);}},GENERAL_SETTINGS.safetyTimeoutMs);const currentStatus=ins.getAttribute("data-ad-status");if(currentStatus==="filled"||ins.querySelector("iframe")){onAdFilled();}else if(currentStatus==="unfilled"){onAdUnfilled(true);}else{observer=new MutationObserver(function(){const status=ins.getAttribute("data-ad-status");if(status==="filled"||ins.querySelector("iframe")){onAdFilled();}else if(status==="unfilled"){onAdUnfilled(true);}});observer.observe(ins,{attributes:true,attributeFilter:["data-ad-status","data-adsbygoogle-status"],childList:true});}try{(window.adsbygoogle=window.adsbygoogle||[]).push({});}catch(err){console.warn("Parchar AdSense push error:",err);onAdUnfilled(false);}}let isProcessing=false;async function processSlotsSequentially(){if(isProcessing)return;isProcessing=true;try{const deviceType=getDeviceType();const slots=Array.from(document.querySelectorAll(".parchar-slot:not([data-parchar-init='true'])"));const adsenseSlots=[];slots.forEach(function(slot){const slotId=slot.id||"";const slotConfig=AD_SLOTS[slotId];if(slotConfig&&slotConfig.sponsored&&slotConfig.sponsored.active){mountParcharSlot(slot,deviceType);}else{adsenseSlots.push(slot);}});if(adsenseSlots.length>0){scheduleAdBlockCheck();}for(let i=0;i<adsenseSlots.length;i++){mountParcharSlot(adsenseSlots[i],deviceType);if(i<adsenseSlots.length-1){await new Promise(function(resolve){setTimeout(resolve,2000);});if(!anyAdSenseResponded){scheduleAdBlockCheck();}}}}finally{isProcessing=false;}}let isTriggered=false;let backupTimer=null;function activateAds(){if(isTriggered)return;isTriggered=true;if(backupTimer){clearTimeout(backupTimer);backupTimer=null;}window.removeEventListener("scroll",onScrollCheck);document.removeEventListener("scroll",onScrollCheck);if(document.body){document.body.removeEventListener("scroll",onScrollCheck);}window.removeEventListener("touchmove",onScrollCheck);document.removeEventListener("click",activateAds);processSlotsSequentially();}function onScrollCheck(){if(getScrollOffset()>=50){activateAds();}}window.addEventListener("scroll",onScrollCheck,{passive:true});document.addEventListener("scroll",onScrollCheck,{passive:true});window.addEventListener("touchmove",onScrollCheck,{passive:true});document.addEventListener("click",activateAds,{passive:true,once:true});if(document.body){document.body.addEventListener("scroll",onScrollCheck,{passive:true});}const scrollableDistance=Math.max(document.documentElement?document.documentElement.scrollHeight:0,document.body?document.body.scrollHeight:0)-window.innerHeight;const backupDelay=scrollableDistance<50?1500:4500;backupTimer=setTimeout(activateAds,backupDelay);onScrollCheck();window.initParcharAds=processSlotsSequentially;window.AD_SLOTS=AD_SLOTS;})();
