"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "Which one is the type of a javascript file?",
            options: [".ts", ".js", ".jsx", ".j"]
        }, {
            title: "Inside which HTML element do we put the JavaScript?",
            options: ["<scripting>", "<script>", "<js>", "<javascript>"]
        }, {
            title: "Where is the correct place to insert a JavaScript?",
            options: [
                "The <head> section",
                "Both the <head> section and the <body> section are correct",
                "The <body> section",
                "Anywhere in the HTML document"]
        }, {
            title: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
            options: [
                '<script name="xxx.js">',
                '<script src="xxx.js">',
                '<script link="xxx.js">',
                '<script href="xxx.js">'
            ]
        }, {
            title: 'How do you write "Hello World" in an alert box?',
            options: [
                'msg("Hello World");',
                'alert("Hello World");',
                'msgBox("Hello World");',
                'console.log("Hello World");',
            ]
        }, {
            title: 'How do you create a normal function in JavaScript?',
            options: [
                'function:myFunction()',
                'function myFunction()',
                'function* myFunction()',
                'function = myFunction()',
            ]
        }, {
            title: 'How do you call a function named "myFunction"?',
            options: [
                'call myFunction()',
                'myFunction()',
                'call:myFunction()',
                'alo myFunction()',
            ]
        },/*{
            title: 'How does a WHILE loop start?',
            options: [
                'while i= 1 to 10',
                'while (i<=10, i++)',
                'while(i<=10)',
                'while i<=10',
            ]
        }, {
            title: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
            options: [
                'document.getElementById("demo").innerHTML= "Hello world"',
                'document.getElementByName("p").innerHTML = "Hello world"',
                '#demo.innerHTML = "Hello world"',
                'document.getElement("p") = "Hello world"',
            ]
        }, {
            title: 'How to write an IF statement in JavaScript?',
            options: [
                'if i=5 then',
                'if (i==5)',
                'if i= 5',
                'if i==5 then',
            ]
        }, {
            title: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            options: [
                'if(i!=5)',
                'if i=!5 then',
                'if(i<>5)',
                'if i<>5',
            ]
        }, */
    ];

    quiz = new Quiz(
        "Basic JavaScript Quiz",
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
        70,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();


