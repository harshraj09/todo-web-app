// IEFE
(() => {
   
    let todoListArray = [];
    
    const form = document.querySelector(".form");
    const input = document.querySelector(".form_input");
    const ul = document.querySelector(".todolist");

    form.addEventListener('submit', e => {
      e.preventDefault();
      let itemId = String(Date.now());
    
      let todoItem = input.value;

      addItemToDOM(itemId , todoItem);
      addItemToArray(itemId, todoItem);
      input.value = '';
    });
  
    ul.addEventListener('click', e => {
      let id = e.target.getAttribute('data-id')
      if (!id) return 
      removeItemFromDOM(id);
      removeItemFromArray(id);
    });
  
    function addItemToDOM(itemId, todoItem) {
      const listItem = document.createElement('li')
      listItem.setAttribute("data-id", itemId);
      listItem.innerText = todoItem
      ul.append(listItem);
    }
  
    function addItemToArray(itemId, todoItem) {
      todoListArray.push({ itemId, todoItem});
      console.log(todoListArray)
    }
  
    function removeItemFromDOM(id) {
      var li = document.querySelector('[data-id="' + id + '"]');
      ul.removeChild(li);
    }
  
    function removeItemFromArray(id) {
      todoListArray = todoListArray.filter(item => item.itemId !== id);
      console.log(todoListArray);
    }
  
  })();
