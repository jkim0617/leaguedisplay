let form  = document.getElementById('todo')
let input = document.getElementById('input')
let list = document.getElementById('list')
let compl = document.getElementById('compl')
let counter = 0;

form.addEventListener('submit',function(e){
    e.preventDefault();
    let entry = document.createElement('li');
    entry.innerText = input.value;
    entry.setAttribute('id',`todo-${counter}`);
    counter++
    list.append(entry);
    input.value = '';
})
// list.addEventListener('click', function(e){
//     document.getElementById(e.target.id).remove();
// })
list.addEventListener('click', function(e){
    let selection = document.getElementById(e.target.id)
    selection.style.backgroundColor = 'yellow';
    selection.setAttribute('class','selected');
})
list.addEventListener('dblclick', function(e){
    document.getElementById(e.target.id).remove();
})
let selectDel = document.getElementById('selectDel')
selectDel.addEventListener('click', function(){
    document.getElementsByClassName('selected').remove();
})