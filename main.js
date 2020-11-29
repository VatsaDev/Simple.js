//starting message
console.log(
  "%c Enabled, to use please launch a local or live server. Made by sensei VatsaDev",
  "background: #222; color: #bada55"
);
//globals
var game;
//program

//normal
function think(statement) {
  console.log(statement);
}

function message(content) {
  alert(content);
}

function question(content) {
  prompt(content);
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function dragHtml(id) {
  dragElement(document.getElementById(id));
  document.getElementById(id).style.position = "absolute";
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

//arrays

function joinArray(array1, array2) {
  return array1.concat(array2);
}

function removeLastElement(array) {
  array.pop();
}

function addElement(array, content) {
  array.push(content);
}

function reverse(array) {
  array.reverse();
}

function removeFirstElement(array) {
  array.shift();
}

function addNewFirstElement(array) {
  array.unshift();
}
//geolocation

function postion() {
  getCurrentPosition();
}

function getPositionLatitude() {
  return position.coords.latitude;
}

function getPositionLongitude() {
  return position.coords.longitude;
}
//date

function getYear() {
  var d = new Date();
  return d.getFullYear();
}
function getMonth() {
  var d = new Date();
  return d.getMonth();
}

function getWeekday() {
  var d = new Date();
  return d.getDay();
}

function getMonthDate() {
  var d = new Date();
  return d.getDate();
}

//math

function minNum(x, y, z) {
  return min(x, y, z);
}

function maxNum(x, y, z) {
  return max(x, y, z);
}

function cubeRoot(num) {
  return cbrt(num);
}

function absolute(num) {
  return abs(num);
}

function EulerNum() {
  return Math.E;
}

function PiNum() {
  return Math.PI;
}

function root(num) {
  return Math.sqrt(num);
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function mod(x, y) {
  return x % y;
}

function round(num) {
  return Math.floor(num);
}

function randomfrom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function power(level, num) {
  return Math.pow(num, level);
}

function equal(num1, num2) {
  if (num1 == num2) {
    return true;
  } else {
    return false;
  }
}

//jquery

function say(id, content) {
  $(id).text(content);
}

function addpage(content) {
  $("body").append(content);
}

function fadeout(id, sec) {
  var time = sec * 1000;
  $(id).fadeOut(time);
}

function fadein(id, sec) {
  var time = sec * 1000;
  $(id).fadeIn(time);
}

function wait(sec, func) {
  var time = sec * 1000;
  setTimeout(func, time);
}

function clickHandler(event) {
  console.log("Click! " + event.pageX + " " + event.pageY);
}

function clickPos(id) {
  $(id).click(clickHandler);
}

function mousefollow(id) {
  $("html").mousemove(function (event) {
    $(id).offset({ left: event.pageX, top: event.pageY });
  });
}

function clickfollow(id) {
  $("html").click(function (event) {
    $(id).offset({ left: event.pageX, top: event.pageY });
  });
}

function keycode() {
  $("body").keydown(function (event) {
    console.log(event.keyCode);
  });
}

//lodash
function repeat(times, func) {
  _.times(times, func);
}

//canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function canvasRectStroke(x, y, width, height, color, thickness) {
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.strokeRect(x, y, width, height);
}

function canvasRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function canvasBeginPath(color, thickness) {
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.beginPath();
}

function canvasMove(x, y) {
  ctx.moveTo(x, y);
}

function canvasLine(x, y) {
  ctx.lineTo(x, y);
}

function canvasClosePath() {
  ctx.stroke();
}

function canvasFill(color) {
  ctx.fillStyle = color;
  ctx.fill();
}

function canvasGradientFillLinear(color1, color2) {
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, color1);
  grd.addColorStop(1, color2);
  ctx.fillStyle = grd;
  ctx.fill();
}

function canvasGradientFillRadial(color1, color2) {
  var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd.addColorStop(0, color1);
  grd.addColorStop(1, color2);
  ctx.fillStyle = grd;
  ctx.fill();
}

function canvasArc(
  x,
  y,
  radius,
  startAngle,
  endAngle,
  clockwise,
  color,
  thickness
) {
  ctx.lineWidth = thickness;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, startAngle, endAngle, clockwise);
}

function canvasText(x, y, font, text) {
  ctx.font = font;
  ctx.fillText(text, x, y);
}

function canvasStrokeText(x, y, font, text) {
  ctx.font = font;
  ctx.strokeText(text, x, y);
}

//audio

function audioSoundRepeat(url) {
  var audio = new Audio(url);

  audio.oncanplaythrough = function () {
    audio.play();
  };

  audio.loop = loop;

  audio.onended = function () {
    audio.play();
  };
}

function audioSound(url) {
  var audio = new Audio(url);

  audio.oncanplaythrough = function () {
    audio.play();
  };
}

//two.js

function twoRect(x, y, width, height, colorstroke, colorfill) {
  var elem = document.getElementById("draw-area");
  var two = new Two({ fullscreen: false }).appendTo(elem);
  var rect = two.makeRectangle(x, y, width, height);
  rect.stroke = colorstroke;
  rect.fill = colorfill;
  two.update();
}

function twoCircle(x, y, radius, colorstroke, colorfill, thickness) {
  var elem = document.getElementById("draw-area");
  var two = new Two({ fullscreen: false }).appendTo(elem);
  var circle = two.makeCircle(x, y, radius);
  circle.stroke = colorstroke;
  circle.fill = colorfill;
  circle.linewidth = thickness;
  two.update();
}

function twoRoundRect(x, y, width, height, radius, colorstroke, colorfill) {
  var elem = document.getElementById("draw-area");
  var two = new Two({ fullscreen: false }).appendTo(elem);
  var roundedRect = new Two.RoundedRectangle(x, y, width, height, radius);
  roundedRect.stroke = colorstroke;
  roundedRect.fill = colorfill;
  two.update();
}
