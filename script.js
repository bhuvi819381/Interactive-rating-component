const pt1 = document.querySelector(".part1");
const pt2 = document.querySelector(".part2");
const btn = document.querySelector(".btn");
const rating = document.querySelector(".rating");
const ratingLinks = document.querySelectorAll(".num-container span")

btn.addEventListener("click", function() {
    pt1.style.display = "none";
    pt2.style.display = "block";
})


ratingLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const num = e.target.textContent;
        rating.innerHTML = num;
        ratingLinks.forEach(link => {
            link.classList.remove("active");
        })
        e.target.classList.add("active");
       
    })
})