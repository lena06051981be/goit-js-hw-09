!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),span:document.querySelector("span")};console.log(t.startBtn),console.log(t.stopBtn),console.log(t.span),t.startBtn.addEventListener("click",(function(){o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));console.log(t),document.body.style.backgroundColor=t}),1e3),t.startBtn.setAttribute("disabled",!1),t.stopBtn.removeAttribute("disabled"),t.span.innerHTML=""})),t.stopBtn.addEventListener("click",(function(){clearInterval(o),console.log("notice: color change stopped, push start to continue, have a good day) "),t.span.innerHTML="   <b>notice</b>: color change stopped, push start to continue, have a good day)",t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled")}));var o=""}();
//# sourceMappingURL=01-color-switcher.7f981643.js.map
