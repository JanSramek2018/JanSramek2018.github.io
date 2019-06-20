


fb.ref("banditStats").once('value').then(data => {
    let savedPosts = data.val();
    let postsDB;
    postsDB = savedPosts;

    

    postsDB.forEach(post => {
        $(`.postSec`).append(`
                    <tr>
                        <td>${post[`Date`]}</td>
                        <td>${post[`Kms`]}</td>
                        <td>${post[`Fuel Economy`]}</td>
                    </tr>
        </div>`);
    })
})

