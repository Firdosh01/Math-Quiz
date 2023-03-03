const questionEl = document.getElementById("question")
const questionFormEl = document.getElementById("questionForm")
const scoreEl = document.getElementById("score")
let storeAnswer;
let score = 0;
let toastBox = document.getElementById('toastBox')
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateQuestion = () => {
    const randomNumber1 = randomNumber(1, 10);
    const randomNumber2 = randomNumber(1, 10);
    const questionType = randomNumber(1, 4);
    let question;
    let answer;

    
    if (questionType == 1) {
        question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
        answer = randomNumber1 * randomNumber2;

    } else if (questionType == 2) {
        question = `Q. What is ${randomNumber1} Add to ${randomNumber2} ?`;
        answer = randomNumber1 + randomNumber2;

    } else if (questionType == 3) {
        question = `Q. What is ${randomNumber1} Divided by ${randomNumber2} ?`;
        answer = randomNumber1 / randomNumber2;
    }
    else {
        question = `Q. What is ${randomNumber1} Subtract from ${randomNumber2} ?`;
        answer = randomNumber1 - randomNumber2;
    }
    return { question, answer };
}


const showQuestion = () => {
    const { question, answer } = generateQuestion();
    questionEl.innerText = question;
    storeAnswer = answer;
}
showQuestion()

const checkAnswer = (event) => {
    event.preventDefault();
    const formData = new FormData(questionFormEl)

    const userAnswer = parseInt(formData.get("answer"));
    if (userAnswer == storeAnswer) {
        score += 1;
        let toast  = document.createElement('div')
        toast.classList.add('toast');
        toast.innerHTML = `Your are Correct and your score is ${score}`;
        toastBox.appendChild(toast)

        setTimeout(()=> {
            toast.remove();
        },6000);
    }else {
        score -= 1;
        let toast  = document.createElement('div')
        toast.classList.add('toast');
        toast.innerHTML = `Your are Wrong and your score is ${score}`;
        toastBox.appendChild(toast)

        setTimeout(()=> {
            toast.remove();
        },6000);
    }
    scoreEl.innerText = score;
    event.target.reset()
    showQuestion()
    console.log("answer", userAnswer);
};