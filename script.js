let paper = document.querySelectorAll(".paper");
let i = 0, j = 0;
const formated = (value) => {
    return parseInt(value) < 10 ? "0" + value : value;
}
paper[i].textContent = formated(parseInt(paper[0].textContent));
setInterval(() => {
    j = (i == 1) ? i - 1 : i + 1;
    paper[j].classList.remove("animate");
    paper[j].classList.remove("z-index-2");
    paper[i].classList.add("animate");
    paper[i].classList.add("z-index-2");
    j = (i == 1) ? 0 : 1;
    paper[j].textContent = (parseInt(paper[i].textContent) + 1 == 31) ? formated(1) : formated(parseInt(paper[i].textContent) + 1);
    i = (i == 1) ? 0 : i + 1;
}, 1000);
