
// Nacteni poctu ulozenych prispevku

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    let postsDB;
    postsDB = savedPosts;

    

    postsDB.forEach(post => {
        $(`.postSec`).prepend(`<div id="id${post[`postId`]}">
                    <h4 class="tittle">${post[`tittle`]}</h4>
                    <div class="postMainPage">${post[`text`]}</div>
        </div>`);
    })
})
// Nacteni ulozenych prispevku