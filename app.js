const list_question = {
    q1: "Do you miss me?",
    q2: "Do you luve me?"
}

const btn_yes = document.querySelector("#yes");
const btn_no = document.querySelector("#no");
let question = document.querySelector('#question');

btn_yes.addEventListener('click',  ()=> {
    return question.innerHTML = list_question.q2
})

const status =()=> question.innerHTML = list_question.q1;

const app = (()=>{
    return{
        status: function () {
            status()
        }
    }
})

app().status()