# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic? 
   > Your answer here The kidsList.js module contains the logic for handling clicks and showing alerts. The Kids() function sets up the HTML and attaches the event listener. The event listener in kidsList.js reacts to click events, processes the data attributes, and triggers the alert.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Your answer here the function's purpose is to find and return the celebrity that matches each child’s celebrityId since each child can be paired with a different celebrity, you need to determine the appropriate celebrity for each child individually.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Your answer here we use data-sport to store the sport information in each list item we retrieve this information when a list item is clicked by accessing the data-sport attribute of the clicked element. we then use the window.alert to show it in the browser when the celebrity is clicked on
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Your answer here we import the functions from each module. they are supposed to return html so it can be included in the html on the web page. We use the document.querySelector to find the DOM. We then created the html with what we imported kids, celebrities, and pairings. The content from what we imported will be used in that html and then put on a webpage by using mainContainer.innerHTML = applicationHTML. We then have what we need for everything to show up on the webpage.
