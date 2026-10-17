
const flashcards = [
    {
        icon: "💻",
        question: "What does HTML stand for?",
        answerTitle: "HTML",
        answer: "HyperText Markup Language"
    },
    {
        icon: "🎨",
        question: "What is CSS used for?",
        answerTitle: "CSS",
        answer: "CSS styles web pages by controlling colors, layouts, fonts, and spacing."
    },
    {
        icon: "⚡",
        question: "What is JavaScript?",
        answerTitle: "JavaScript",
        answer: "A programming language used to add interactivity and dynamic behavior to websites."
    },
    {
        icon: "🌐",
        question: "What is a web browser?",
        answerTitle: "Web Browser",
        answer: "Software used to access and display websites, such as Chrome, Firefox, and Edge."
    },
    {
        icon: "🧱",
        question: "What is an HTML element?",
        answerTitle: "HTML Element",
        answer: "A part of a web page usually made up of an opening tag, content, and a closing tag."
    },
    {
        icon: "📦",
        question: "What is a JavaScript array?",
        answerTitle: "Array",
        answer: "An array stores multiple values in a single variable."
    },
    {
        icon: "🔑",
        question: "What is a JavaScript object?",
        answerTitle: "Object",
        answer: "An object stores related data as key-value pairs."
    },
    {
        icon: "🖱️",
        question: "What is a DOM?",
        answerTitle: "DOM",
        answer: "The Document Object Model represents a web page so JavaScript can access and change its elements."
    },
    {
        icon: "🔄",
        question: "What is an event listener?",
        answerTitle: "Event Listener",
        answer: "A function that waits for an event, such as a click, and runs code when it happens."
    },
    {
        icon: "📱",
        question: "What is responsive web design?",
        answerTitle: "Responsive Design",
        answer: "A design approach that makes websites adapt to different screen sizes and devices."
    }
];

const flashcard = document.getElementById("flashcard");
const questionIcon = document.getElementById("questionIcon");
const questionText = document.getElementById("questionText");
const answerTitle = document.getElementById("answerTitle");
const answerText = document.getElementById("answerText");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function displayFlashcard() {
    const card = flashcards[currentIndex];

    questionIcon.textContent = card.icon;
    questionText.textContent = card.question;
    answerTitle.textContent = card.answerTitle;
    answerText.textContent = card.answer;

    progressText.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
    progressFill.style.width = `${((currentIndex + 1) / flashcards.length) * 100}%`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === flashcards.length - 1;

    flashcard.classList.remove("flipped");
    flashcard.setAttribute("aria-pressed", "false");
    flashcard.setAttribute("aria-label", `Question: ${card.question}. Click to reveal the answer.`);
}

function toggleFlashcard() {
    const isFlipped = flashcard.classList.toggle("flipped");

    flashcard.setAttribute("aria-pressed", String(isFlipped));

    const card = flashcards[currentIndex];
    flashcard.setAttribute(
        "aria-label",
        isFlipped
            ? `Answer: ${card.answer}`
            : `Question: ${card.question}. Click to reveal the answer.`
    );
}

function showNextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        displayFlashcard();
    }
}

function showPreviousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        displayFlashcard();
    }
}

flashcard.addEventListener("click", toggleFlashcard);

flashcard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleFlashcard();
    }
});

prevBtn.addEventListener("click", showPreviousCard);
nextBtn.addEventListener("click", showNextCard);

displayFlashcard();
