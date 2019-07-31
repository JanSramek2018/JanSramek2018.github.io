
// Nacteni poctu ulozenych prispevku

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    let postsDB;
    postsDB = savedPosts;



    postsDB.forEach(post => {
        $(`.postSec`).prepend(
            `<div id="id${post[`postId`]}">
                    <h4 class="title">${post[`title`]}</h4>
                    <div class="post">${post[`text`]}</div>
                    <hr>
            </div>`);
        console.log(`${ post[`postId`]}`);
        console.log(`${ post[`title`]}`);
        console.log(`${ post[`text`]}`);

    })
})
// Nacteni ulozenych prispevku
