$(`form`).on(`submit`, event => {
    event.preventDefault();
    let title = $(`input`).val();
    let post = $(`textarea`).val();
    let tittleCount = title.length;
    let postCount = post.length;
    if (tittleCount > 0) {
        if (postCount > 0) {
            $(`.postSec`).prepend(`<h4 class="title">${title}</h4>
            <div class="post">${post}</div>`);
            $(`input[name=inputTitle]`).val(``);
            $(`textarea`).val(``);
        }
        else { alert(`Your Post is empty`) }
    }
    else { alert(`Your Tittle is empty`) }
    let path = "posts/1";
    let dataToSave = {
        title: "My first saved blog post",
        text: "Some hilarious content, which proves how awesome I am."
};
fb.ref(path).set(dataToSave);
});

