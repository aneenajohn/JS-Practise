const container = document.querySelector('.container');
const pointer = document.querySelector('.pointer');

let count = 0;

function onMouseMove(e) {
    const {
        offsetX,
        offsetY
    } = e;
    const x = offsetX - 20;
    const y = offsetY + 20;
    pointer.style.transform = `translate(${x}px,${y}px)`;
    count++;
    console.log("Count: ", count);
}

// container.addEventListener('mousemove', onMouseMove);


const throttle = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args)
        }
    }
}

// const throttledMouseMove =  throttle(onMouseMove, 100);

// container.addEventListener('mousemove', throttledMouseMove);

const throttle_v2 = (func, delay) => {
    let timeoutId;

    return (...args) => {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func(...args);
                timeoutId = null
            }, delay)
        }
    }
}

const throttledMouseMove_v2 = throttle_v2(onMouseMove, 100);

container.addEventListener('mousemove', throttledMouseMove_v2);