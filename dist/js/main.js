"use strict";var body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector(".header"),navBtn=document.querySelector(".close"),navBtnPopUp=document.querySelector(".close-pop-up"),popUp=document.querySelector(".wrap-pop-up");function closePopUp(){navBtnPopUp&&navBtnPopUp.addEventListener("click",(function(){popUp.classList.add("cancel")}))}function closenav(){header.classList.remove("nav-open"),navBtn.style.marginRight="0",body.classList.remove("scroll-hidden")}function togglenav(){header.classList.toggle("nav-open"),header.classList.contains("nav-open")?(navBtn.style.marginRight=window.innerWidth-html.offsetWidth+"px",body.classList.add("scroll-hidden")):(body.classList.remove("scroll-hidden"),navBtn.style.marginRight="0")}window.onload=function(){pagescroll(),closePopUp()},navBtn.addEventListener("click",togglenav);var links=header.querySelectorAll("a");function pagescroll(){var e=0;window.addEventListener("scroll",(function(){e<pageYOffset&pageYOffset>header.offsetHeight&&header.classList.add("scroll"),(e=pageYOffset)<5&&header.classList.remove("scroll")}))}function addScript(e,t){localStorage.getItem(e)&&(t=1);var n=document.createElement("script");return n.async=!0,n.src=e,setTimeout((function(){body.appendChild(n),localStorage.setItem(e,!0)}),t),n}function accordionInit(e){window.addEventListener("load",(function(){var t=e.querySelectorAll(".accordion__item"),n=function(t){var n=e.querySelector(".is-open");o(t),n&&n!==t&&o(n)};t.forEach((function(e){var t=e.querySelector(".accordion__title-text");t.addEventListener("click",(function(){n(e)})),t.addEventListener("keydown",(function(t){"Enter"!==t.code&&"Space"!==t.code||(t.preventDefault(),n(e))}))}));var o=function(e){var t=e.querySelector(".accordion__body");e.classList.contains("is-open")?(t.removeAttribute("style"),e.classList.remove("is-open")):(t.style.overflow="hidden",t.style.transition="max-height 10s cubic-bezier(0.22, 0.61, 0.36, 1)",t.style.maxHeight="2000px",e.classList.add("is-open"))}}))}if(links.forEach((function(e){e.addEventListener("click",closenav)})),window.addEventListener("load",(function(){var e=window.matchMedia("(max-width: 480px)").matches,t=1,n=document.querySelector(".swiper-delay_js");if(n){var o=parseInt(n.dataset.time);o>0&&(t=1+o/5,e&&(t=o),addScript("js/swiper-min.js",t).addEventListener("load",(function(){addScript("js/slider-init.js",0)})))}})),document.querySelector(".accordion")){var accordions=document.querySelectorAll(".accordion");accordions.forEach((function(e){accordionInit(e)}))}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImh0bWwiLCJoZWFkZXIiLCJuYXZCdG4iLCJuYXZCdG5Qb3BVcCIsInBvcFVwIiwiY2xvc2VQb3BVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbG9zZW5hdiIsInJlbW92ZSIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJ0b2dnbGVuYXYiLCJ0b2dnbGUiLCJjb250YWlucyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsIm9ubG9hZCIsInBhZ2VzY3JvbGwiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwc2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJhZGRTY3JpcHQiLCJwYXRoIiwic3RpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic29tZUpzIiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwic3JjIiwic2V0VGltZW91dCIsImFwcGVuZENoaWxkIiwic2V0SXRlbSIsImFjY29yZGlvbkluaXQiLCJhY2NvcmRpb24iLCJpdGVtcyIsIm9wZW5lZEl0ZW0iLCJpdGVtIiwib3BlbmVkX2l0ZW0iLCJ0b2dnbGVfaXRlbSIsImZvckVhY2giLCJ0aXRsZSIsImV2ZW50IiwiY29kZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlQXR0cmlidXRlIiwib3ZlcmZsb3ciLCJ0cmFuc2l0aW9uIiwibWF4SGVpZ2h0IiwibGluayIsIm1lZGlhUXVlcnkyIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzd2lwZXJMb2FkaW5nRGVsYXkiLCJzd2lwRGVsYXkiLCJhZGR0aW1lIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwidGltZSIsImFjY29yZGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBLGFBQ0EsSUFBTUEsS0FBTUMsU0FBU0MsY0FBYyxRQUM3QkMsS0FBS0YsU0FBU0MsY0FBYyxRQUM1QkUsT0FB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RUFBb0JFLEdBRXBCbEMsVUFBVSxtQkFBcUJnQyxHQUFvQnBELGlCQUFpQixRQUFPLFdBQ3pFb0IsVUFBVSxvQkFBc0IsRUFDakMsSUFHTixDQUNBLElBNENLNUIsU0FBU0MsY0FBYyxjQUFlLENBQ3hDLElBQU1pRSxXQUFhbEUsU0FBU3dCLGlCQUFpQixjQUM3QzBDLFdBQVduQixTQUFRLFNBQUFOLEdBQ2pCRCxjQUFjQyxFQUNmLEdBQ0YiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5jb25zdCBib2R5ID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGh0bWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG5jb25zdCBoZWFkZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG5jb25zdCBuYXZCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcbmNvbnN0IG5hdkJ0blBvcFVwPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtcG9wLXVwXCIpO1xuY29uc3QgcG9wVXA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwLXBvcC11cFwiKTtcblxud2luZG93Lm9ubG9hZD0gZnVuY3Rpb24oKXtcbiAgcGFnZXNjcm9sbCgpO1xuICBjbG9zZVBvcFVwKCk7XG59O1xuXG5mdW5jdGlvbiBjbG9zZVBvcFVwKCl7XG4gICAgaWYobmF2QnRuUG9wVXApIHtcbiAgICAgICAgbmF2QnRuUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcG9wVXAuY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIFxuICAgICAgZnVuY3Rpb24gY2xvc2VuYXYoKSB7XG4gIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gIG5hdkJ0bi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1oaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlbmF2KCkge1xuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcGVuXCIpO1xuICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1vcGVuXCIpKSB7XG4gICAgbmF2QnRuLnN0eWxlLm1hcmdpblJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSBodG1sLm9mZnNldFdpZHRoICsgXCJweFwiO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWhpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhpZGRlbicpO1xuICAgIG5hdkJ0bi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xuICB9XG59XG5uYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZW5hdik7XG5jb25zdCBsaW5rcyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5saW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VuYXYpO1xufSk7IFxuICAgICAgIGZ1bmN0aW9uIHBhZ2VzY3JvbGwoKXtcbiAgICBsZXQgcHNjcm9sbCA9IDA7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgaWYgKHBzY3JvbGw8cGFnZVlPZmZzZXQmcGFnZVlPZmZzZXQ+aGVhZGVyLm9mZnNldEhlaWdodCl7XG4gICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBwc2Nyb2xsPXBhZ2VZT2Zmc2V0O1xuXG4gICAgICAgIGlmKHBzY3JvbGwgPCA1KSB7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiAgXG4gICAgICBmdW5jdGlvbiBhZGRTY3JpcHQocGF0aCAsc3RpbWVvdXQpeyAgXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0ocGF0aCkpIHtcbiAgICAgIHN0aW1lb3V0PTE7IFxuICAgIH0gIFxuICAgIGNvbnN0IHNvbWVKcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOyBcbiAgICBzb21lSnMuYXN5bmM9dHJ1ZTtcbiAgICBzb21lSnMuc3JjPXBhdGg7ICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc29tZUpzKTsgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwYXRoICwgdHJ1ZSk7XG4gIH0sIHN0aW1lb3V0KTsgICAgIFxuICAgICAgcmV0dXJuICggXG4gICAgICAgICAgc29tZUpzIFxuICAgICAgKSBcbn0gICBcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpeyAgIFxuY29uc3QgbWVkaWFRdWVyeTIgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDgwcHgpJykubWF0Y2hlczsgIFxubGV0IHN3aXBlckxvYWRpbmdEZWxheT0xOyBcbmNvbnN0IHN3aXBEZWxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItZGVsYXlfanMnKTsgXG5pZihzd2lwRGVsYXkpeyBcbiAgY29uc3QgYWRkdGltZT0gcGFyc2VJbnQoc3dpcERlbGF5LmRhdGFzZXQudGltZSk7XG4gIGlmKGFkZHRpbWU+MCl7XG4gICAgc3dpcGVyTG9hZGluZ0RlbGF5PTErIGFkZHRpbWUvNTtcbiAgICBpZiAobWVkaWFRdWVyeTIpIHtcbiAgICAgIHN3aXBlckxvYWRpbmdEZWxheSA9YWRkdGltZTtcbiAgICB9IFxuICAgICAgYWRkU2NyaXB0KCdqcy9zd2lwZXItbWluLmpzJyAsIHN3aXBlckxvYWRpbmdEZWxheSkuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PntcbiAgICAgICAgYWRkU2NyaXB0KCdqcy9zbGlkZXItaW5pdC5qcycgLCAwKTtcbiAgICAgIH0pIFxuICAgICAgLy9zd2lwZXIgbG9hZGluZyBvbmx5IGlmIHN3aXBlciBkZWxheSBkYXRhdGltZSA+IDBcbiAgfSAgXG59ICAgXG59KVxuICAgICAgXG5mdW5jdGlvbiBhY2NvcmRpb25Jbml0KGFjY29yZGlvbikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IGl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uX19pdGVtXCIpOyBcbiAgICAgIGNvbnN0IG9wZW5lZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBvcGVuZWRfaXRlbSA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKFwiLmlzLW9wZW5cIik7IFxuICAgICAgICB0b2dnbGVfaXRlbShpdGVtKTsgXG4gICAgICAgIGlmIChvcGVuZWRfaXRlbSAmJiBvcGVuZWRfaXRlbSAhPT0gaXRlbSkge1xuICAgICAgICAgIHRvZ2dsZV9pdGVtKG9wZW5lZF9pdGVtKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgXG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvbl9fdGl0bGUtdGV4dFwiKTsgXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoICkgPT4ge1xuICAgICAgICAgIG9wZW5lZEl0ZW0oaXRlbSk7XG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7IFxuICAgICAgICAgIGlmIChldmVudC5jb2RlPT09J0VudGVyJ3x8ZXZlbnQuY29kZT09PSdTcGFjZScpeyBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgb3BlbmVkSXRlbShpdGVtKTtcbiAgICAgICAgICB9IFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IHRvZ2dsZV9pdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX2JvZHlcIik7XG4gIFxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICBib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnbWF4LWhlaWdodCAxMHMgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpJztcbiAgICAgICAgICBib2R5LnN0eWxlLm1heEhlaWdodCA9ICcyMDAwcHgnO1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvblwiKSkgeyBcbiAgICBjb25zdCBhY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25cIik7XG4gICAgYWNjb3JkaW9ucy5mb3JFYWNoKGFjY29yZGlvbiA9PiB7XG4gICAgICBhY2NvcmRpb25Jbml0KGFjY29yZGlvbik7XG4gICAgfSk7IFxuICB9XG5cbiBcblxuXG5cbiJdfQ==
