/**
 * Runs synchronously in <head> before first paint:
 * - dark is the server-rendered default; only an explicit "light" choice removes it
 * - the CSS intro plays once per session and never for reduced-motion users;
 *   html[data-intro] is "skip" when it won't play and "done" once it has finished
 */
export const BOOT_SCRIPT = `(function(){var d=document.documentElement;try{if(localStorage.getItem("theme")==="light")d.classList.remove("dark")}catch(e){}try{if(sessionStorage.getItem("ht-intro")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches){d.setAttribute("data-intro","skip")}else{sessionStorage.setItem("ht-intro","1");setTimeout(function(){d.setAttribute("data-intro","done")},4600)}}catch(e){d.setAttribute("data-intro","skip")}})();`;
