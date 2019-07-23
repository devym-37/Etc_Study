const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// todolist array 생성

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // toDos를 string으로 JSON을 이용해서 Object -> string 변환
}           // localStorage에 저장

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;       // 나중 생성되는 li제거를 위해 순서를 주기위해
    delBtn.innerHTML = "X";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId,
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSumit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos === null){

    } 
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSumit);
}

init();