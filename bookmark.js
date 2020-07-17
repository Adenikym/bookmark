console.log("maryam")

const navSlide=  () =>
{
    const burger= document.querySelector(".burger");
    const nav= document.querySelector('.topnav');
    const listItems= document.querySelectorAll(".none");

    burger.addEventListener("click",()=>{nav.classList.toggle("nav-active");
});

//animate links

listItems.forEach((item, index) => {
    item.getElementsByClassName.aimation = 'navLinkFade o.5s ease forwards ${index/7 + 0.3}s ';
    
})

};

navSlide();

function myFunction() {
    let y = document.getElementById('myChromium');
    if(y.style.display === "none"){
        y.style.display='block';
    }

    else{
        y.style.display ="none"
    }
}


function myBook() {
    let y = document.getElementById('mybookmark');
    if(y.style.display === "block"){
        y.style.display='none';
    }

    else {
        y.style.display ="block"
    }
}


function myBrow() {
    let y = document.getElementById('mybrowser');
    if(y.style.display === "none"){
        y.style.display='block';
    }

    else{
        y.style.display ="none"
    }
}


function myMob() {
    let y = document.getElementById('myMobile');
    if(y.style.display === "none"){
        y.style.display='block';
    }

    else{
        y.style.display ="none"
    }
}




