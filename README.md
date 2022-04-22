# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Branden Chong**

Time spent: **20** hours spent in total

Link to project: (https://vagabond-delightful-exhaust.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added a start home page
- [x] Added a you win page
- [x] Added a you lose page
- [x] Added navigation between the different pages
- [x] Added different difficulties changing the game speed
- [x] Added background images


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
***Changing difficulty in the homepage***
<img src="https://recordit.co/QhXw86kxmC.gif" width=900><br>

***Difficulty changed in the gamepage***
<img src="https://recordit.co/cbzUJDeQm9.gif" width=900><br>

***Gameplay***
<img src="https://recordit.co/9h0N5rntp8.gif" width=900><br>

***Win Page***
<img src="https://recordit.co/RkcVLWI8ED.gif" width=900><br>

***Lose Page***
<img src="https://recordit.co/wiQONwzIWr.gif" width=900><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I utilized resources such as stackoverflow, w3schools, teamtreehouse.com, developer.mozilla.org, and homeandlearn.co.uk. Some examples of the links I used are listed below. 

List:
- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
- https://www.w3schools.com/js/js_loop_for.asp
- https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts#:~:text=To%20clear%20all%20timeouts%20they
- https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward
- https://www.w3schools.com/html/html_images_background.asp


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge I encountered while working on the game was creating the timer and connecting it to the game. I was lost as to where to start and did not have any previous knowledge of this topic, so I went online. By looking at previous people’s projects on stopwatches made with Javascript and some stackoverflow submissions, I was able to learn about the process in which it was needed to create a stopwatch. Through my research, I learned about Javascript built in functions like setInterval and clearInterval. I also learned about the importance of clearing the interval (because it would be running in the background and using memory) with timer ids. Because of this, I made sure to create a function to clear intervals before starting any new intervals. After creating the necessary functions (startTimer and  clearIntervals) with my newfound knowledge, I drew out a plan that would start the timer as soon as the clue sequence would start playing. This would start the timer. I also made sure to add logic to state that if the timer ran to zero, the player would lose. This was only half the equation. I also had to make sure to reset the clock as soon as a new clue sequence played (signaling that the player passed the previous clue sequence). After layering the functions together in a logical manner, I was able to come up with a working, clean solution not only in code, but with the knowledge of timers in Javascript embedded in my brain.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

While working on the project, I became very curious about the many layers that I can see coming with web development. On the visual side, I am curious about animations and other CSS tools I have seen in many cool websites I have been on. On the logical side, I am curious about authentication and how it works. In my classes, I have learned about hashing and have taken an SQL class that taught me about relational databases. I want to learn how to create a large, scalable server and database to handle large amounts of data in a neat way, and to handle that data in a secure manner. I am excited to learn about web development and the many intricacies it can bring.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would definitely spend time working on refactoring the code. Because of the learning-as-you-go approach that I took with this project, I compromised on readability and neatness when it came to my code. I found throughout the process that this actually wasted time in the long run, because I spent so much time going back and looking for specific parts of my code between the javascript, the HTML, and the CSS. Therefore, if I went back, I would reorganize the code with comment headers labeling each section of the CSS and  HTML files. I would also write comments in the javascript code detailing what each function does. Lastly, I would organize my files into folders, because I had more than one page of HTML, CSS, and javascript respectively.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Branden Chong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.