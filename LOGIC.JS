

window.addEventListener("scroll", () => {
    let inner = document.querySelector(".inner");
    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromTop = document.documentElement.scrollTop;

    let real_Height = height - clientHeight;
    let result = fromTop * 100 / real_Height;
    let absolute_result = Math.round(result);

    inner.style.width = `${absolute_result}%`;
});