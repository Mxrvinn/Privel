"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var scrollTo = function scrollTo(goTo) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var goToNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;
  var target = document.querySelectorAll(goTo)[goToNumber];
  var targetPosition = target.offsetTop - offset;
  var startPosition = window.scrollY;
  var distance = targetPosition - startPosition;
  var duration = time;
  var startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
};

var _default = scrollTo;
exports["default"] = _default;