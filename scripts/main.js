/*fadeIn navLinks*/
let bargerIcon = document.getElementById("faicon");
let navLinks = document.querySelector(".navlinks");
bargerIcon.addEventListener("click", function(){
    this.classList.toggle("fa-align-right");
    navLinks.classList.toggle("nav-active");

});

/*fadeIn navLinks*/

/*search icon*/
var searchIcon = document.getElementById("search"),
    searchPage = document.querySelector(".search");
searchIcon.onclick = function(){
    searchPage.classList.toggle("activesearch");
}
/* ends search icon*/

/*start main content color*/

let Spans = document.querySelectorAll(".color span");
let mainImg = document.getElementById("main-img");

Spans.forEach((span) => {
    span.addEventListener("click", function(e){
        console.log(e.target.dataset.color);
        document.documentElement.style.setProperty('--bef-color', e.target.dataset.color);
        mainImg.setAttribute("src", e.target.dataset.src);
    })
});

/*ends main content color*/



let Dad = document.querySelectorAll(".dad i");
let shopeIcon = document.getElementById("icon");
Dad.forEach((i) => {
    i.addEventListener("click", function(e){
        console.log(e.target.dataset.img);
        this.classList.toggle("red");
        if(this.hasAttribute("class", "red")){
            shopeIcon.style.display = "block";
        }
    })
})
/*loader*/


function loader(){
    document.querySelector(".loader").classList.add("fadein");
}
function fadeIn(){
    setInterval(loader, 3000);
}

window.onload = fadeIn;
/* ends loader */


/*start shop fav*/
let shopeContianer = document.querySelector(".shope-contianer");
let shopeContent = document.querySelector(".all-content");
let exitContianer = document.querySelector(".exit");
let removeBtn = document.querySelector(".remove");
exitContianer.onclick = function(){
    shopeContianer.style.right = -100 + "%";
}

shopeIcon.onclick = function(){
    shopeContianer.style.right = 0;
}
removeBtn.addEventListener("click", function(){
    shopeContent.style.display = "none";
})

/* append content to shope content*/

Dad.forEach((i) => {
    i.addEventListener("click", function(e){
        // this.classList.toggle("red");
        // if(this.hasAttribute("class", "red")){
        //     shopeIcon.style.display = "block";
        // }
        
        let Div = document.createElement("div");
        Div.setAttribute("class", "shope-content")
        shopeContent.appendChild(Div);
        let Button = document.createElement("button");
        Button.innerHTML = "BUY NOW";
        Div.appendChild(Button);
        let pEleme = document.createElement("p");
        pEleme.innerHTML = e.target.dataset.text;
        Div.appendChild(pEleme);
        let image = document.createElement("img");
        image.setAttribute("src", e.target.dataset.img);
        Div.appendChild(image);
        console.log(image);

        

    })
})

let aboutImg = document.querySelector(".images");
let aboutText = document.querySelector(".text");
let dadCards = document.querySelector(".dad-cards");
window.onscroll = function(){
    let value = scrollY;
    if(value >= 1800){
        aboutText.style.right = 0;
        aboutImg.style.left = 0;
    }else{
        aboutText.style.right = -100 + "%";
        aboutImg.style.left =  -100 + "%";
    }
}

/* append content to shope content*/


/*ends shop fav*/

/*start feature section*/

let hLeft = document.querySelector(".hleft");
let hIcon = document.querySelector(".hicon");
let hIcont = document.querySelector(".hicont");
let hPic = document.querySelector(".hpic");
window.addEventListener("scroll", function(){
    let val = scrollY;
    console.log(val);
    if(val >= 2350){
        hLeft.style.left = 0;
        hPic.style.right = 0;
        hIcon.style.bottom = 0;
        hIcont.style.bottom = 0;
    }else{
        hLeft.style.left = -150 + "%";
        hPic.style.right = -100 + "%";
        hIcon.style.bottom = -100 + "%";
        hIcont.style.bottom = -100 + "%";
    }
}) 

/*end feature section*/