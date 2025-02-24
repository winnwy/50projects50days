const percentage = document.querySelector(".percentage");
const image = document.querySelector(".container img");

let i = 0;
const interval = setInterval(() => {
    if(i <= 100) {
        percentage.textContent = i+"%";
        percentage.style.opacity = 1 - i /100;
        image.style.filter = `blur(${100-i}px)`;
        i+=1;
    } else {
        clearInterval(interval)
    }
}, 50);

