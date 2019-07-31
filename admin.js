
// Nacteni poctu ulozenych prispevku
let base = 0;

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    let postsDB;
    postsDB = savedPosts;
    base = savedPosts.length;
    console.log(`base = ${base}`);

    // Nacteni ulozenych prispevku

    postsDB.forEach(post => {
        $(`.postSec`).prepend(`<div id="id${post[`postId`]}">
                    <h4 class="title">${post[`title`]} (id: ${post[`postId`]})</h4>
                    <div class="post">${post[`text`]}</div>
                    <div class="delete"><button id="${post[`postId`]}">Delete</button></div>
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
    let title = $(`#inputTitle`).val();
    let post = $(`#inputPostText`).val();
    let titleCount = title.length;
    let postCount = post.length;
    if (titleCount > 0) {
        if (postCount > 0) {
            counter = base + 1;
            if (base === 0) { base = base + 1 };
            let path = `posts/${base}`;
            let postInfo = {
                title: `${title}`,
                text: `${post}`,
                postId: `${base}`
            };
            fb.ref(path).set(postInfo);
            $(`input[name=inputTitle]`).val(``);
            $(`inputPostText`).val(``);
            $(`.postSec`).prepend(
                `<div id="id${postInfo[`postId`]}">
                    <h4 class="title">${postInfo[`title`]} (id: ${postInfo[`postId`]})</h4>
                    <div class="post">${postInfo[`text`]}</div>
                    <div class="delete"><button id="${postInfo[`postId`]}">Delete</button></div>
                </div>`);
            base = counter;
            console.log(`Creating id:${postInfo[`postId`]}`);

        }
        else { alert(`Your Post is empty`) };
    }
    else { alert(`Your Title is empty`) };
});


// Smazani prispevku
$(`.postSec`).on(`click`, `.delete`, btn => {
    let removeID;
    removeID = $(btn.target).attr(`id`);
    $(`#id${removeID}`).remove();
    fb.ref(`posts/${removeID}`).remove();
    console.log(`Removing ${removeID}`);
    fb.ref("posts").once('value').then(data => {
        let savedPosts = data.val();
        base = savedPosts.length;
    });
    console.log(`base = ${base}`);
})

// Uprava prispevku
$(`form`).on(`click`, `#updateBtn`, event => {
    event.preventDefault();
    let updateTitle = $(`#inputTitle`).val();
    let updatePost = $(`#inputPostText`).val();
    let updateId = $(`#inputPostId`).val();
    let titleCount = updateTitle.length;
    let postCount = updatePost.length;
    let idCount = updateId.length;
    if (titleCount > 0) {
        if (postCount > 0) {
            if (idCount > 0) {
                let path = `posts/${updateId}`;
                let postInfo = {
                    title: `${updateTitle}`,
                    text: `${updatePost}`,
                    postId: `${updateId}`
                };
                fb.ref(path).set(postInfo);
                console.log(`Updating id:${postInfo[`postId`]}`);
                $(`input[name=inputTitle]`).val(``);
                $(`inputPostText`).val(``);
                $(`#id${postInfo[`postId`]}`).html(
                    `<div id="id${postInfo[`postId`]}">
                        <h4 class="title">${postInfo[`title`]} (id: ${postInfo[`postId`]})</h4>
                        <div class="post">${postInfo[`text`]}</div>
                        <div class="delete"><button id="${postInfo[`postId`]}">Delete</button></div>
                    </div>`);
            }
            else { alert(`Your Update Post Id number is empty`) };
        }
        else { alert(`Your Post is empty`) };
    }
    else { alert(`Your Title is empty`) };
});
