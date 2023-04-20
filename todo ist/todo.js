let button=document.getElementById('add')
let todolist=document.getElementById('todolist')
let input=document.getElementById('input')
let todos=[]


button.addEventListener('click',()=>{
    todos.push(input.value);
    addtodo(input.value)
    input.value=''
})


function addtodo(todo){
    let para=document.createElement('p');
    para.setAttribute('id','mypara')
    para.innerText=todo;
    todolist.appendChild(para)

    para.addEventListener("click",()=>{
        para.style.textDecoration='line-through';
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove(todo);
    })}
    function remove(todo){
        let index=todos.indexOf(todo)
        if(index>-1){
           todos.splice(index,1);
        
        }


        
    }
   
    

