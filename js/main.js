const q_data = [
    {
        question : ' ؟لتعريف القائمة في لغة البايثون يتم استخدام ',
        a : '()',
        b : '<>', 
        c : '{}', 
        d : '[]',
        correct : 'd'
    },
    {
        question : 'دالة if فيما تستخدم بلغة البايثون؟',
        a : 'لعمل شرط',
        b : 'لعمل تكرار', 
        c : 'لعمل كلاس', 
        d : 'لعمل دالة',
        correct : 'a'
    },
    {
        question : 'لتعريف متغير في لغة البايثون؟ ',
        a : 'var',
        b : 'def', 
        c : 'yeid', 
        d : 'لا شيء مما سبق',
        correct : 'd'
    },
    {
        question : 'لتحويل قيمة متغير رقمي إلى نصي في لغة البايثون يتم استخدام',
        a : 'str()',
        b : 'float()', 
        c : 'int()', 
        d : 'print()',
        correct : 'a'
    },
    {
        question : 'لإدخال قيمة من خلال المستخدم يتم استخدام  ',
        a : 'print()',
        b : 'input()',
        c : 'append()', 
        d : 'join()', 
        correct : 'b'
    },
    
];

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btn = document.getElementById('submit');


const answer_elem= document.querySelectorAll('.answer');


let crrent_question = 0;
let crrent_quiz = 0;
let answer = undefined;
let score = 0;

load_quiz = ()=>{
    console.log(q_data[crrent_quiz]);
    const crrent_quiz_data = q_data[crrent_quiz];
    question.innerHTML = crrent_quiz_data.question;
    a_text.innerText = crrent_quiz_data.a;
    b_text.innerText = crrent_quiz_data.b;
    c_text.innerText = crrent_quiz_data.c;
    d_text.innerText = crrent_quiz_data.d;

    crrent_question++;

};

getSelected = ()=>{
    let answer= undefined;
    answer_elem.forEach((elem) =>{
        if(elem.checked){
            answer = elem.id;
        }
    });
    return answer;
};

deSelected = () =>{
    answer_elem.forEach((elem) =>{
        elem.checked = false;
    });
};

btn.addEventListener('click', ()=>{
    const answer = getSelected();
    if(answer){
        if(answer===q_data[crrent_quiz].correct){
            score++;
        }
        crrent_quiz++;
    }

    if(crrent_quiz < q_data.length){
        load_quiz();
    }else{
        quiz.innerHTML = `<h2> you answerd correctly at ${score} / ${q_data.length} questions</h2>
        <button onclick = "location.reload()">إعادة المحاولة </button>`
    }
});

load_quiz();




    
    
