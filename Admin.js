
// Nacteni poctu ulozenych prispevku
let base = 0;
let postsDB;
let idbutton;
let removeID;

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    base = savedPosts.length;
    postsDB = savedPosts;

    // Nacteni ulozenych prispevku

    postsDB.forEach(post => {
        $(`.postSec`).prepend(`<div id="id${post[`postId`]}">
                    <h4 class="tittle">${post[`tittle`]}</h4>
                    <div class="post">${post[`text`]}</div>
                    <div class="delete"><button id="id${post[`postId`]}">Delete</button></div>
        </div>`);


    // Neni potreba
    console.log(`${savedPosts}`);
    savedPosts.forEach(element => {
        console.log(element);
    });
    // Neni potreba
})
})
;


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
            let postInfo = {
                tittle: `${tittle}`,
                text: `${post}`,
                postId: `${base}`
            };
            fb.ref(path).set(postInfo);
            $(`input[name=inputTittle]`).val(``);
            $(`textarea`).val(``);
            $(`.postSec`).prepend(
                `<div id="id${postInfo[`postId`]}">
                    <h4 class="tittle">${postInfo[`tittle`]}</h4>
                    <div class="post">${postInfo[`text`]}</div>
                    <div class="delete"><button id="id${postInfo[`postId`]}">Delete</button></div>
                </div>`);
            base = counter;
                
        }
        else { alert(`Your Post is empty`) };
    }
    else { alert(`Your Tittle is empty`) };
});


// Smazani prispevku
$(`.postSec`).on(`click`, `button`, btn => {
    console.log($(btn.target).attr(`id`));
    removeID = $(btn.target).attr(`id`);
    fb.ref(`posts/${removeID}`).remove();
    console.log(`${removeID}`);
})
