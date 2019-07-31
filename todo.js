let base = 0;
let counter = 0;
let todosDB;
let completionStatus;

// Nacteni poctu ulozenych prispevku

fb.ref("todos").once('value').then(data => {
    let savedTodos = data.val();
    base = savedTodos.length;
    todosDB = savedTodos;

    // Nacteni ulozenych prispevku

    todosDB.forEach(todo => {
        $(`#todoList`).append(`<tr> <td id="ID${todo[`todoId`]}">${todo[`textId`]} </td> </tr>`);
    });
});

$(`#todoList`).on(`click`, event => {
    $(event.target).toggleClass(`wLine success`);
})

// Kliknuti na Submit

$(`form`).on(`submit`, event => {
    event.preventDefault();
    let todoText = $(`input`).val();
    let todoCount = todoText.length;

    if (todoCount > 0) {
        counter = base + 1;
        completionStatus = 0;
        let path = `todos/${base}`;
        let todoInfo = {
            textId: `${todoText}`,
            todoId: `${base}`,
            todoCompleted: `${completionStatus}`
        };
        fb.ref(path).set(todoInfo);
        $(`#todoList`).append(`<tr> <td id="id${todoInfo[`todoId`]}">${todoInfo[`textId`]} </td> </tr>`);
        base = counter;
    }
    else { alert(`Your Todo is empty`) };

    $(`#id${base}`).on(`click`, event => {
        $(event.target).toggleClass(`wLine success`);
        
    });

})
