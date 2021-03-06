# Welcome to the features/docs page
Here is the list of features in this library
## standard
these require no extra libraries

 - ### think <br> 
   this is console.log and is used like <br>
    ```javascript
    think("hello world")'
    ```
 - ### message <br> 
   this is alert and is used like <br>
    ```javascript
    message("hello world")
    ```
 - ### Math <br> 
   these are the math functions and are used like <br>
    ```javascript
    add(x, y)
    // x + y
    sub(x, y)
    // x - y
    mul(x, y)
    // x * y
    div(x, y)
    // x / y
    mod(x, y);
    // x % y
    round(x);
    // math.floor(x)
    power(x, y);
    // Math.pow(y , x);
    randomfrom(x, y);
    // x = min, y = max
    equal(x, y);
    // x == y
    minNum(x, y, z)
    // pick smallest
    maxNum(x, y, z)
    // pick biggest
    cubeRoot(num)
    // return cuberoot
    absolute(num)
    // return absolute
    EulerNum()
    // return E
    PiNum()
    // return pi
    root(num)
    // gives square root
    ```
 - ### Question <br>
   this is prompt and is used like
   ```javascript
   question("");
   ```
 - ### Include html <br>
   this is used to include html files and is used like
   ```javascript
   includeHTML("include");
   //the js
   <h5 include="filname"></h5>
   //the html, can be any tag as the h5 tag is just an example
   ```
 - ### Repeat <br>
   this is a repeat function (using lodash)
   ```javascript
   var func = function test() {
        console.log("loop");
      }
   
   repeat(10, func)
   //the js
   <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
   //the html CDN
   ```
 - ### audioSoundRepeat <br>
   this is used to forever repeat audio files
   ```javascript
   <button onclick="audioSoundRepeat('test/phaseJump1.wav')" type = "button">click me</button>
   ```
 - ### audioSound <br>
   this is used to play audio files once
   ```javascript
   <button onclick="audioSound('test/phaseJump1.wav')" type = "button">click me</button>
   ```
 - ### dragHtml <br>
   drag any element
   ```javascript
   dragHtml(id)
   ```
 - ### geo-location   
   these require https to work and will need a deployed site with https <br> used like 
   ```javascript
   postion()
   // gets your pos
   getPositionLatitude()
   // gets your latitude
   getPositionLongitude()
   // gets your longitude
   ```
   
 - ### stings
   strings functions
   ```javascript
   
   stringLength(str)
   stringJoin(str1, str2)
   stringLetter(str, num)
   stringSplice(str, l1, l2)
   ```
   
 - ### arrays
   array functions
   ```javascript
   joinArray(array1, array2)
   // joins arrays 
   removeLastElement(array)
   addElement(array, content)
   // content is a string
   reverse(array)
   // reverses order
   removeFirstElement(array)
   addNewFirstElement(array)
   ```
## JQuery <br> 
   the following are jquery 2.10 functions <br> use CDN
    ```
    <script src="https://code.jquery.com/jquery-2.1.0.js"></script>
    ```
 - ### Say <br> 
   this is Dom manipulation and is used like <br>
    ```javascript
    say("#id", "hello world");
    ```
 - ### Addpage <br> 
   this is Dom manipulation and is used to add content to the bottom of the page like <br>
    ```javascript
    addpage("<p>hello world</p>");
    ```
 - ### Fade out <br> 
   this is Dom manipulation animation and is used to add a fadeout animation <br>
    ```javascript
    fadeout(id, time);
    //time in seconds
    ```
 - ### Fade in <br> 
   this is Dom manipulation animation and is used to add a fadedout animation in to the doc again <br>
    ```javascript
     fadein(id, time);
     //time and seconds
    ```
 - ### ClickPos <br> 
   this logs the mouse position <br>
    ```javascript
     clickPos(id);
    ```
 - ### ClickFollow <br> 
   this makes the id'ed element go to a click <br>
    ```javascript
     clickfollow(id);
    ```
 - ### mouseFollow <br> 
   this makes the id'ed element go to the mouse <br>
    ```javascript
     mousefollow(id);
    ```
 - ### Keycode <br> 
   logs keycode on press
    ```javascript
     keycode();
    ```
## Canvas <br>
   the following draw using canvas and you need the following tag <br>
    ```
     "<canvas id="canvas" width="x" height="y"></canvas>" 
    ``` 
    <br>
   *do not change the id or these functions will not work*
   <br><br>
- ### canvasRectStroke <br> 
   Draws lined rectangle
    ```javascript
     canvasRectStroke(x, y, width, height, color, thickness);
    ```
- ### canvasRect <br> 
   Draws filled rectangle
    ```javascript
     canvasRect(x, y, width, height, color);
    ```
- ### canvasBeginPath <br> 
   begins canvas path
    ```javascript
     canvasBeginPath(color, thickness);
    ```
- ### canvasMove <br> 
   moves canvas pen
    ```javascript
     canvasMove(x, y);
    ```
- ### canvasLine <br> 
   Draws canvas line
    ```javascript
     canvasLine(x, y);
    ```
- ### canvasClosePath <br> 
   closes canvas path
    ```javascript
     canvasClosePath();
    ```
- ### canvasFill <br> 
   sets fill
    ```javascript
     canvasFill("color");
    ```
- ### canvasGradientFillLinear <br> 
   sets fill to a two color linear gradient
    ```javascript
     canvasGradientFillLinear(color1, color2);
    ```
- ### canvasGradientFillRadial <br> 
   sets fill to a two color radial gradient
    ```javascript
     canvasGradientFillRadial(color1, color2);
    ```
- ### canvasArc <br> 
   Use for circles, ring, arcs
    ```javascript
     canvasArc(x, y, radius, startAngle, endAngle, clockwise);
     //put in between paths
    ```
- ### canvasText <br> 
   make text on canvas
    ```javascript
    canvasText(x, y, font, text)
    ```
- ### canvasStrokeText <br> 
   make text on canvas, this is slightly thicker
    ```javascript
    canvasStrokeText(x, y, font, text)
    ```
## two.js
- ### twoRect <br> 
   use two.js to make an svg rect
    ```javascript
    twoRect(x, y, width, height, colorstroke, colorfill)
    ```
- ### twoCircle <br> 
   use two.js to make an svg circle
    ```javascript
    twoCircle(x, y, radius, colorstroke, colorfill, thickness)
    ```
- ### twoRoundRect <br> 
   use two.js to make an svg rounded rect
    ```javascript
    twoRoundRect(x, y, width, height, radius, colorstroke, colorfill)
    ```
