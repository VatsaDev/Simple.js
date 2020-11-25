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
    ```
 - ### Question <br>
   this is prompt and is used like
   ```javascript
   question("");
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
