
# Day 28 Internship Project: Flashcard Learning App

## Project Overview

The Flashcard Learning App is an interactive web application developed using HTML5, CSS3, and JavaScript. It helps users learn and revise concepts through question-and-answer cards.

Users can click a flashcard to reveal its answer and navigate through the cards using Previous and Next buttons. A progress indicator displays the current card number.

## Objectives

- Practice CSS 3D transforms and flip animations.
- Understand JavaScript arrays and objects.
- Track the current card using a variable.
- Implement Previous and Next navigation.
- Update the user interface dynamically.
- Create a responsive learning interface.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Features

- 10 predefined question-and-answer flashcards.
- 3D flip animation on click.
- Previous and Next navigation buttons.
- Progress bar showing the current position.
- Question and answer display.
- Responsive design for desktop and mobile devices.
- Keyboard support for flipping cards.
- No external API or database required.

## Flashcard Topics

1. HTML
2. CSS
3. JavaScript
4. Web Browsers
5. HTML Elements
6. JavaScript Arrays
7. JavaScript Objects
8. DOM
9. Event Listeners
10. Responsive Web Design

## Project Structure

Day_28_Flashcard_App/
- index.html
- style.css
- script.js
- README.md

## How to Run

1. Create a folder named Day_28_Flashcard_App.
2. Create the four files listed in the project structure.
3. Copy the appropriate code into each file.
4. Save all files.
5. Open index.html in a web browser.
6. Click the flashcard to reveal the answer.
7. Use the Previous and Next buttons to navigate between cards.

You can also open the project in Visual Studio Code and run it using the Live Server extension.

## Working Procedure

The questions and answers are stored in a JavaScript array of objects. Each object contains an icon, question, answer title, and answer.

The current card is tracked using a variable called currentIndex. When a user clicks a card, JavaScript toggles a CSS class that applies a 3D rotation animation.

The Previous and Next buttons update the current index and display the corresponding card. The progress text and progress bar are also updated automatically.

## Hardware Requirements

- Computer or laptop
- Keyboard and mouse or touchpad
- Sufficient memory to run a modern web browser

## Software Requirements

- Windows, macOS, or Linux
- Visual Studio Code or another text editor
- Google Chrome, Microsoft Edge, Firefox, or another modern browser

## Testing

- Verified that the first flashcard appears on page load.
- Checked that clicking a card reveals its answer.
- Checked that clicking again returns to the question.
- Tested Previous and Next navigation.
- Verified the progress indicator updates correctly.
- Checked that navigation buttons are disabled at the beginning and end.
- Checked the layout on different screen sizes.

## Limitations

- The questions and answers are predefined.
- Users cannot add or edit flashcards.
- Learning progress is not saved after the page is refreshed.
- The application does not use a database or backend.

## Future Scope

- Allow users to create their own flashcards.
- Add subject-wise flashcard categories.
- Include a quiz mode and score calculation.
- Save learning progress using local storage.
- Add search and flashcard filtering.
- Introduce spaced repetition for revision.

## Conclusion

The Flashcard Learning App provides an interactive way to learn and revise concepts. This project helps develop practical skills in JavaScript arrays and objects, state tracking, DOM manipulation, CSS 3D transforms, event handling, and responsive web design.
