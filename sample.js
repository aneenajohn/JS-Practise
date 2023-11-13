
const container = document.querySelector('.container');
const pointer = document.querySelector('.pointer');

let count =0;
container.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } =  e;
    const x = offsetX - 20;
    const y = offsetY + 20;
    pointer.style.transform = `translate(${x}px,${y}px)`;
    count++;
    console.log("Count: ", count);
})