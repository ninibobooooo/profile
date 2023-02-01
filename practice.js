var password=123456;
var input;

// while(password!=input){input=prompt("請輸入密碼");}
// alert("登入成功");

const sideMenuAbout = document.getElementById('side-menu-about')
sideMenuAbout.addEventListener("mouseover",

    function(){
        this.innerText = "關於我";
        this.style.color = "black";   
    }
)
sideMenuAbout.addEventListener("mouseout",

    function(){
        this.innerText = "About";
        this.style.color = "white";   
    }
)

const sideMenuMotivations = document.getElementById('side-menu-motivations')
sideMenuMotivations.addEventListener("mouseover",

    function(){
        this.innerText = "轉職動機";
        this.style.color = "black";   
    }
)
sideMenuMotivations.addEventListener("mouseout",

    function(){
        this.innerText = "Motivations";
        this.style.color = "white";   
    }
)

const sideMenuFuture = document.getElementById('side-menu-future')
sideMenuFuture.addEventListener("mouseover",

    function(){
        this.innerText = "未來規劃";
        this.style.color = "black";   
    }
)
sideMenuFuture.addEventListener("mouseout",

    function(){
        this.innerText = "Future";
        this.style.color = "white";   
    }
)

const sideMenuExperience = document.getElementById('side-menu-experience')
sideMenuExperience.addEventListener("mouseover",

    function(){
        this.innerText = "工作經驗";
        this.style.color = "black";   
    }
)
sideMenuExperience.addEventListener("mouseout",

    function(){
        this.innerText = "Experience";
        this.style.color = "white";   
    }
)




    

