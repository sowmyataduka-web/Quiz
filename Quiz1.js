questionBook=[
{
    id:1,
    question:"What is the full form of JS?",
    options:["JavaSelenium","JavaScript","JavaSource","JavaSpiders"],
    correctAnswer:"JavaScript",
},
{
    id:2,
    question:"What is the full form of DOM?",
    options:["Document Object Model","Document Option Model","Data Object Model","Dummy Object Model"],
    correctAnswer:"Document Object Model",
},
{
    id:3,
    question:"What is the full form of BOM?",
    options:["Box Object Model","Browser Object Model","Box Office Model","Bomb Object Model"],
    correctAnswer:"Browser Object Model",
},
{
    id:4,
    question:"What is the value of ('3'+3-3)?",
    options:[0,3,30,"Error"],
    correctAnswer:30,
},
{
    id:5,
    question:"What is the full form of JSON?",
    options:["JavaSript Only Notation","JavaScript Only Nation","JavaSript Object Notation","JavaScript Object Notation"],
    correctAnswer:"JavaSript Object Notation",
}
]

let nextElement=document.getElementById("button");
let questionElement=document.getElementById("question");
let optionElement=document.getElementById("option");
let scoreElement=document.getElementById("score");
let currentQuestion=0;
let score=0;
        scoreElement.textContent=`Score:${score}/${questionBook.length}`;


function displayQuestion(){
let {id,question,options,correctAnswer}=questionBook[currentQuestion];
questionElement.textContent=id+" . "+question;
options.map((opt)=>{
    let btn=document.createElement("button")
    btn.setAttribute("class","optionButtons");
    btn.textContent=opt;
    optionElement.append(btn);
    btn.addEventListener("click",()=>{
        if(opt==correctAnswer)
        {
            btn.style.backgroundColor="green";
            score+=1;
        }
        else
        {
            btn.style.backgroundColor="red";
            score -=0.25;
        }
        console.log(score);
        // setTimeout(()=>{
        //     nextQuestion();
        // },2000)

        scoreElement.textContent=`Score:${score}/${questionBook.length}`;
        let allbtns=document.querySelectorAll(".optionButtons");
        allbtns.forEach((b)=>b.disabled=true);

        
        })
    })
}
displayQuestion();
function nextQuestion(){
    currentQuestion++;
    optionElement.innerHTML="";
    if(currentQuestion==questionBook.length)
    {
        questionElement.innerHTML="Quiz Completed Successfully!!🤩"
        nextElement.style.display="none";
    }     
    else
        displayQuestion();
}