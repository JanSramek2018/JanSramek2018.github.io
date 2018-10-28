let base = 0;
let counter = 0;

$(`form`).on(`submit`, event => {
    event.preventDefault();
    let title = $(`input`).val();
    let post = $(`textarea`).val();
    let tittleCount = title.length;
    let postCount = post.length;
        if (tittleCount > 0) {
        if (postCount > 0) {
            counter = base + 1;
            let path = `posts/${counter}`;
            base = counter;
            let dataToSave = {
                title: `${title}`,
                text: `${post}`,
                postId: `${counter}`
            };
            fb.ref(path).set(dataToSave);
            $(`.postSec`).prepend(`<h4 class="title">${title}</h4>
            <div class="post">${post}</div>`);
            $(`input[name=inputTitle]`).val(``);
            $(`textarea`).val(``);
            
        }
        else { alert(`Your Post is empty`) }
    }
    else { alert(`Your Tittle is empty`) }

});

