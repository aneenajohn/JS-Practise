

// let menu = document.getElementById("menu");
// let menu = document.querySelector(".menu");
let menu = document.querySelector("#menu");
// console.log(menu);

menu.addEventListener('click', (e) => {
    let target = e.target;

    console.log(e.target.tagName);
    if(e.target.tagName === "LI"){
        window.location.href = "#" + e.target.id;
       
        console.log(e.target.classList.value);
        if(e.target.classList.value?.includes("test")){
            e.target.classList.remove("test");
        }else {
            e.target.classList.add("test");
        }
    }
    
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