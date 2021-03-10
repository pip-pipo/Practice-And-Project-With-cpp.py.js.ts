const quizes = [{
        quistion: 'when javascript created?',
        a:1985 ,
        b:1995,
        c: 1975,
        d: 1965,
        correct: 'b'
    },
    {
        quistion: 'What is the Most Used Programming Language in 2021?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        quistion: 'What does HTML stand for?',
        a: 'Hyper text Markup Language',
        b: 'Hyper text transfer Language',
        c: 'Hyper text scripting Language',
        d: 'Hyper text protocol Language',
        correct: 'a'
    },
    {
        quistion: 'What is JavaScript?',
        a: 'JavaScript is a lightweight, compiled programming language',
        b: 'JavaScript is a lightweight, interpreted programming language',
        c: 'JavaScript is a lightweight, scripting programming language',
        d: 'JavaScript is a lightweight, low level programming language',
        correct: 'b'
    },
    {
        quistion: 'Is JavaScript a case-sensitive language??',
        a: 'confiuse, JavaScript is a not case sensitive language',
        b: 'nooryes, JavaScript is a not case sensitive language',
        c: 'no, JavaScript is a not  case sensitive language',
        d: 'Yes, JavaScript is a case sensitive language',
        correct: 'd'
    },
    {
        quistion: 'How can you create an Array in JavaScript?',
        a: 'var y = {1, 2, 3, 4, 5};',
        b: 'var y = (1, 2, 3, 4, 5);',
        c: 'var y = 1, 2, 3, 4, 5;',
        d: 'var y = [1, 2, 3, 4, 5];',
        correct: 'd'
    },
    {
        quistion: 'What is the most  Favourite Programming language for web developemnt?',
        a: 'JavaScript',
        b: 'python',
        c: 'java',
        d: 'c++',
        correct: 'a'
    },
    {
        quistion: 'How to see Output?',
        a: 'print("")',
        b: 'printf("")',
        c: 'cout<<""',
        d: 'console.log("")',
        correct: 'd'
    },
    {
        quistion: 'what is not  javascript',
        a: 'var i = 0;',
        b: 'const i = 0;',
        c: 'int i = 0;',
        d: 'let i = 0;',
        correct: 'c'
    },
    {
        quistion: 'how to write objects in javascript?',
        a: 'let i = [];',
        b: 'let i = ();',
        c: 'let i = {};',
        d: 'let i = ({});',
        correct: 'c'
    },
   

];

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const qusetionE1 = document.getElementById('question');
const title = document.querySelector('.title');
const btnSubmit = document.querySelector('.buttonSubmit');

let currentQuize = 0;
let FinalResult = []
let score = 0;
const scoreData = document.querySelector('.score')

loadQuize();

function loadQuize() {
    const currentQuizeData = quizes[currentQuize];
    title.innerText = currentQuizeData.quistion;
    a_text.innerText = currentQuizeData.a;
    b_text.innerText = currentQuizeData.b;
    c_text.innerText = currentQuizeData.c;
    d_text.innerText = currentQuizeData.d;
}

function getSelected() {
    const answers = document.querySelectorAll("input[name]");
    let dataid = undefined
    answers.forEach(data => {

        if (data.checked) {
            dataid = data.id;
        }

    })
    return dataid;
}

btnSubmit.addEventListener('click', () => {
    const myAnswer = getSelected();

    FinalResult += myAnswer;


    if (myAnswer) {

        console.log(myAnswer);
        console.log(quizes[currentQuize].correct);

        if (myAnswer === quizes[currentQuize].correct) {
            score++;
            scoreData.innerText = score;
        }



        currentQuize++;
    }
    if (quizes.length > currentQuize) {
        loadQuize();
    } else {
        currentQuize = 0;
        qusetionE1.style.display = 'none';
        btnSubmit.style.display = 'none';
        title.innerText = 'You Have Successfully completed';

        alert('���  You Finished The Quize :) ');

    }

});