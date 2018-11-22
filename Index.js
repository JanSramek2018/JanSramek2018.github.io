
// Nacteni poctu ulozenych prispevku
let base = 0;
let postsDB;

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    base = savedPosts.length;
    postsDB = savedPosts;

    // Nacteni ulozenych prispevku

    postsDB.forEach(post => {
        $(`.postSec`).prepend(`<div id="id${post[`postId`]}">
                    <h4 class="tittle">${post[`tittle`]}</h4>
                    <div class="post">${post[`text`]}</div>
        </div>`);
})
})
;
