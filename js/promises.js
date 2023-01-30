
$("button").on('click', function (e) {
    let username = $('.username').val();
    fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': keys.gitHub}
    }).then(response => response.json())
        .then(data => {
            console.log(new Date(data[0].created_at).toDateString())
        }).catch(error => console.log(error));
});