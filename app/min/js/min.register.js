"use strict";function switchLog(r,o,c){Array.from(o).forEach(function(e,t){e.addEventListener("click",function(){1==t?(o[1].classList.add("form-log__item--active"),r.innerHTML="Login",c[1].classList.add("form-log__is-active"),c[0].style.transform="translateX(-1000%)"):(o[1].classList.remove("form-log__item--active"),r.innerHTML="Register",c[1].classList.remove("form-log__is-active"),c[0].style.transform="translateX(0%)"),0==t?(o[0].classList.add("form-log__item--active"),r.innerHTML="Register",c[0].classList.add("form-log__is-active"),c[1].style.transform="translateX(+1000%)"):(o[0].classList.remove("form-log__item--active"),r.innerHTML="Login",c[0].classList.remove("form-log__is-active"),c[1].style.transform="translateX(0%)")})})}function checked(){var e=document.querySelectorAll(".radio-checked");Array.from(e).forEach(function(e){e.classList.toggle("radio-checked__active")})}switchLog(document.querySelector(".bread-crumbs__item--current"),document.querySelectorAll(".form-log__item"),document.querySelectorAll(".form-log")),Array.from(document.querySelectorAll(".radio")).forEach(function(e){e.addEventListener("click",checked)});