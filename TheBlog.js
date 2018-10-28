
// Nacteni poctu ulozenych prispevku
let base = 0;
let postsDB;
let idbutton;
fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    base = savedPosts.length;
    postsDB = savedPosts;

    // Nacteni ulozenych prispevku

    postsDB.forEach(post => {
        $(`.postSec`).prepend(`<h4 class="tittle">${post[`postId`]}. ${post[`tittle`]}</h4>
                <div class="post">${post[`text`]}</div>
                <div class="delete"><button id="id${post[`postId`]}">Delete post</button></div>`);

    });


    // Neni potreba
    console.log(`${savedPosts}`);
    savedPosts.forEach(element => {
        console.log(element);
    });
    // Neni potreba
});


// Kliknuti na Submit
$(`form`).on(`submit`, event => {
    event.preventDefault();
    let tittle = $(`input`).val();
    let post = $(`textarea`).val();
    let tittleCount = tittle.length;
    let postCount = post.length;
    if (tittleCount > 0) {
        if (postCount > 0) {
            counter = base + 1;
            let path = `posts/${base}`;
            let dataToSave = {
                tittle: `${tittle}`,
                text: `${post}`,
                postId: `${base}`
            };
                        fb.ref(path).set(dataToSave);
            $(`input[name=inputTittle]`).val(``);
            $(`textarea`).val(``);
            $(`.postSec`).prepend(`<h4 class="tittle">${dataToSave[`postId`]}. ${dataToSave[`tittle`]}</h4>
            <div class="post">${dataToSave[`text`]}</div>
            <div class="delete"><button id="id${base}">Delete post</button></div>`);
            base = counter;
        }
        else { alert(`Your Post is empty`) };
    }
    else { alert(`Your Tittle is empty`) };
});

$(`.postSec`).on(`click`, `button`, btn => {
    console.log($(btn.target).attr(`id`));
});
    



