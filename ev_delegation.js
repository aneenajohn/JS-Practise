

// let menu = document.getElementById("menu");
// let menu = document.querySelector(".menu");
let menu = document.querySelector("#menu");
// console.log(menu);

menu.addEventListener('click', (e) => {
    let target = e.target;
    switch(target.id){
        case "home":
            console.log("Home is clicked!");
            break;
        case "profile":
            console.log("profile is clicked");
            break;
        case "dashboard":
            console.log("dashboard is clicked");
            break;
    }
})