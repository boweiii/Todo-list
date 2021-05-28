// /////////////////////////////////////////////////小日曆////////////////////////////////////
$(function () {
    $("#dateChooser").datepicker({
      changeMonth: true,
      changeYear: true,
      altField: "#alternate",
      altFormat: "DD, d MM, yy"
    })
  }  
);
// ////////////////////////////////////////////////menu/////////////////////////////////////
let openMenu = document.querySelector('.open-menu')
let closeMenu = document.querySelector('.close-menu')
openMenu.addEventListener('click',()=>{
  $('.menu-all-list').animate({ left: "0px" }, 500);
})
closeMenu.addEventListener('click',()=>{
  $('.menu-all-list').animate({ left: "-300px" }, 500);
})
// ////////////////////////////////////////////////todo list////////////////////////////////
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#addBtn')
let input = document.querySelector('#newTodo')
let doneList = document.querySelector('#my-done')



// 監聽滑鼠動作
addBtn.addEventListener('click', input_Value)
// 監聽鍵盤動作
input.addEventListener('keypress', keyInputValue)

// 新增項目
function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <span for="todo">${text}</span>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
  // 清空輸入框
  input.value = ''
}

// 新增完成項目
function addDoneItem (text) {
  let doneItem = document.createElement('li')
  doneItem.innerHTML = `
    <span class="checked" for="todo">${text}</span>
    <i class="delete fa fa-trash"></i>
  `
  doneList.appendChild(doneItem)
}

// 按下滑鼠執行
function input_Value(){
  let inputValue = input.value
  if (inputValue.replace(/\s*/g,"").length !== 0){
    addItem (inputValue)
  }
}
// 按下Enter執行
function keyInputValue(event){
  if(event.key === 'Enter'){
    input_Value()
  } 
}

// delet todoList
function deleteListItem(event){
  let target = event.target
  if (target.classList.contains('delete')){
    target.parentElement.remove()
  }
  else if(target.matches('span')){
    event.target.classList.toggle('checked')
    // target.parentElement.remove()  //可加可不加，因為一個DOM元素只會出現在DOM的一個位置上，可直接appendChild搬移
    doneList.appendChild(event.target.parentElement)
  }
}
// delet doneList
function deleteDoneListItem(event){
  let target = event.target
  if (target.classList.contains('delete')){
    target.parentElement.remove()
  }
  else if(target.matches('span')){
    event.target.classList.toggle('checked')
    // target.parentElement.remove()  //可加可不加，因為一個DOM元素只會出現在DOM的一個位置上，可直接appendChild搬移
    list.appendChild(event.target.parentElement)
  }
}

list.addEventListener('click',deleteListItem)
// 監聽 doneList
doneList.addEventListener('click',deleteDoneListItem)

