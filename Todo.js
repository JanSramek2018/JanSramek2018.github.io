let base = 0;
let counter = 0;


// Nacteni poctu ulozenych prispevku = DODELAT
let todosDB;

fb.ref("todos").once('value').then(data => {
    let savedTodos = data.val();
    base = savedTodos.length;
    todosDB = savedTodos;

    // Nacteni ulozenych prispevku

    todosDB.forEach(todo => {
        $(`ul`).append(`<li id="ID${todo[todoId]}">${todo[text]}</li>`);
    });
// Dodelat

$(`li`).on(`click`, event => {
    $(event.target).toggleClass(`wLine`);
})
// Kliknuti na Submit
$(`form`).on(`submit`, event => {
    event.preventDefault();
    let todo = $(`input`).val();
    let todoCount = todo.length;

    if (todoCount > 0) {
        counter = base + 1;
        let path = `todos/${base}`;
        let todoInfo = {
            text: `${todoText}`,
            todoId: `${base}`
        };
        fb.ref(path).set(todoInfo);
        $(`ul`).append(`<li id="ID${counter}">${todo}</li>`);
        base = counter;
    }
    else { alert(`Your Todo is empty`) };

    $(`#ID${counter}`).on(`click`, event => {
        $(event.target).toggleClass(`wLine`);
    })
})