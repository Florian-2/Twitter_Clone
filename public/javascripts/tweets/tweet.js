function bindDeleteFuncOnTweets() {
    const sectionTweets = document.querySelector(".section-tweets");
    const btns = document.querySelectorAll("[data-tweet-id]");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const tweetID = btn.dataset.tweetId;

            axios.delete(`/tweets/delete/${tweetID}`)
            .then((result) => {
                sectionTweets.innerHTML = result.data
                bindDeleteFuncOnTweets();
            })
            .catch((err) => console.log(err));
        })
    })
}
bindDeleteFuncOnTweets();