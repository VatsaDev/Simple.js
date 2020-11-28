# Simple.js v0.1.3

[![GitHub license](https://img.shields.io/github/license/VatsaDev/Simple.js)](https://github.com/VatsaDev/Simple.js/blob/main/LICENSE)<br>
[![GitHub license](https://img.shields.io/badge/version-0.1.3-blue)](https://github.com/VatsaDev/Simple.js/blob/main/main.js)<br><br>
A js library to make things simple <br>
you can use it to teach people like children, as it is designed to lower unfamiliar symbols and words
<br>
<br>
to see full features list click [Here](features.md)<br>
to see changelog click [Here](changelog.md)<br><br>
to use include these CDNs <br>
https://code.jquery.com/jquery-2.1.0.js - jquery 2.1.0 <br>
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js - lodash 4.17.20 (***for repeat only***) <br>
## Examples 
### Without Simple.js 
<br>

```javascript
  ctx.lineWidth = 4;

  ctx.strokeStyle = "Red";
  ctx.beginPath();  
  ctx.arc(100, 100, 10, 0, Math.PI * 2, false);  
  ctx.stroke();

  ctx.strokeStyle = "Orange";
  ctx.beginPath();  
  ctx.arc(100, 100, 20, 0, Math.PI * 2, false);  
  ctx.stroke();

  ctx.strokeStyle = "Yellow";
  ctx.beginPath();  
  ctx.arc(100, 100, 30, 0, Math.PI * 2, false);  
  ctx.stroke();

  ctx.strokeStyle = "Green";
  ctx.beginPath();  
  ctx.arc(100, 100, 40, 0, Math.PI * 2, false);  
  ctx.stroke();

  ctx.strokeStyle = "Blue";
  ctx.beginPath();  
  ctx.arc(100, 100, 50, 0, Math.PI * 2, false);  
  ctx.stroke();
  
  ctx.strokeStyle = "Purple";
  ctx.beginPath();  
  ctx.arc(100, 100, 60, 0, Math.PI * 2, false);  
  ctx.stroke();
  
```
### With Simple.js
```javascript
  canvasBeginPath("red", 4);

      canvasArc(200, 200, 10, 0, 360, false, "Red", 4);
      canvasArc(200, 200, 20, 0, 360, false, "Orange", 4);
      canvasArc(200, 200, 30, 0, 360, false, "Yellow", 4);
      canvasArc(200, 200, 40, 0, 360, false, "Green", 4);
      canvasArc(200, 200, 50, 0, 360, false, "Blue", 4);
      canvasArc(200, 200, 60, 0, 360, false, "Purple", 4);

  canvasClosePath();
```
You can see the obvious difference! Use this today.
<br><br>
CDN
```javascript 

  <script src = "https://vatsadev.github.io/Simple.js/main.js"></script> 

```
download file <br>
<a href="main.js" download>Click here to download</a>
