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
        $(`ul`).append(`<li id="ID${todo[`todoId`]}">${todo[`textId`]}</li>`);
    });
});

$(`ul`).on(`click`, event => {
    $(event.target).toggleClass(`wLine`);
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
        $(`ul`).append(`<li id="id${todoInfo[`todoId`]}">${todoInfo[`textId`]}</li>`);
        base = counter;
    }
    else { alert(`Your Todo is empty`) };

    $(`#id${base}`).on(`click`, event => {
        $(event.target).toggleClass(`wLine`);
        
    });

})
