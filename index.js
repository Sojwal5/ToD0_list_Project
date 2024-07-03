let todolist = [
    {
      item: 'Buy Milk',
      dueDate: '4/10/2023'
    },
    {
      item: 'Go to College',
      dueDate: '4/10/2023'
    }
  ];
  
displayitems();

function addtodo() {
    let inputelement=document.querySelector('#todo_input');
    let dateelement=document.querySelector('#todo_date');
    let todoitem=inputelement.value;
    let tododate=dateelement.value;

    todolist.push({item:todoitem,dueDate:tododate});
    inputelement.value='';
    dateelement.value='';

    displayitems();
    
}

function displayitems(){
    let containerelement=document.querySelector('.todo_container');
    let newhtml='';

    for (let i=0;i<todolist.length ;i++){
        let {item,dueDate}=todolist[i];
      
      newhtml+=`
          <span>${item}</span>
          <span>${dueDate}</span>
          <button class='btn_delete' onclick="todolist.splice(${i},1 );
          displayitems();">Delete
          </button>
       `;
        
    }
    containerelement.innerHTML=newhtml;
   
}