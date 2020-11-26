const quizData = [
    {
        question: "Which data structure follows a uni-directional reference to its sibling nodes?",
        a: "Doubly-linked list",
        b: "Singly-linked list",
        c: "Stacks",
        d: "AVL",
        correct: "b"
    },
    {
        question: "Which of these gets initialised when entering a function scope?",
        a: "let",
        b: "var",
        c: "const",
        d: "function",
        correct: "d"
    },
    {
        question: "Which array method lets us delete an array element in-place?",
        a: "Slice",
        b: "indexOf",
        c: "Splice",
        d: "Includes",
        correct: "c"
    },
    {
        question: "Which is part of the web api of Javascript run-time environment?",
        a: "DOM",
        b: "Call stack",
        c: "Event Loop",
        d: "Callback queue",
        correct: "a"
    },
    {
        question: "Which of these is a module bundler?",
        a: "Webpack",
        b: "ES6",
        c: "setTimeOut()",
        d: "Bootstrap",
        correct: "a"
    }
]


const answerEls = document.querySelectorAll(".answer");
const quizQuestion = document.querySelector("h2");
const submitBtn = document.querySelector("button");
const a_text = document.querySelector("label[for=a]");
const b_text = document.querySelector("label[for=b]");
const c_text = document.querySelector("label[for=c]");
const d_text = document.querySelector("label[for=d]");
const quizContainer = document.querySelector(".quiz-container");


//event listeners
submitBtn.addEventListener("click", changeQuestion);




let counter = 0;
let score = 0;
function quizDataInsert() {
    deSelect();
    quizQuestion.innerText = quizData[counter].question;
    a_text.innerText = quizData[counter].a;
    b_text.innerText = quizData[counter].b;
    c_text.innerText = quizData[counter].c;
    d_text.innerText = quizData[counter].d;
}

quizDataInsert();

function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

function deSelect() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}


function changeQuestion() {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[counter].correct) {
            score++;
        }
        counter++;
    }

    if (!quizContainer.classList.contains("slide-in")) {
        quizContainer.classList.add("slide-in")
    } else {
        quizContainer.classList.remove("slide-in");
        setTimeout(function () {
            quizContainer.classList.add("slide-in")
        }, 0);
    }

    if (counter < quizData.length) {
        quizDataInsert();
    } else {
        quizContainer.innerHTML = `<h2>You've scored ${score} out of ${quizData.length}.</h2><button onclick="document.location.reload()">Refresh</button>`
    }
}



