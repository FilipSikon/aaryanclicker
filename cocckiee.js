let clicked = document.querySelector(".aaryanpicture");
let counter = document.querySelector(".counter");
let upgrade1 = document.querySelector(".upgrade");
let poor = document.querySelector(".poor");
let donera = document.querySelector(".Donera");
let aaryanko = document.querySelector(".scam")
let scamcost = 50;
let upgradecost = 20;
let upgradelevel = 1;
let click = 0;
//let är en variableltyp som kan vara ha alla värden som typ int, string, float
//document.queryselector tar bara den klass (när du skriver class="...") och gör det till en variabel 

clicked.addEventListener("click",()=>{clicker(upgradelevel)});
upgrade1.addEventListener("click",Hedgecurry);
poor.addEventListener("click",Hidden);
donera.addEventListener("click",scam);
aaryanko.addEventListener("click",HeligkoHidden);
//här hämtar vi en function som händer om man trycker på knappen
//clicked (variabeln som trycks) "click" är den event som händer (det finns många olika events) efter click så callar jag funktionen
// ()=>{funktionen(...)} behövs om jag vill ha parametrar
//funktionerna:
function clicker(upgradelevel){
    click+=upgradelevel;
    counter.innerHTML = click + " curry";
    //counter.innerHTML skiver ut det nya värdet på "counter" så att siffrorna uppdateras
    //Man kan använda int och string när man skriver ut
}
function Hedgecurry(){
    if(click >= upgradecost){
        upgradelevel++;
        click -= upgradecost;
        // click -= upgradecost är samma sak som click = click-upgradecost
        upgradecost*=3;
        upgrade1.innerHTML = "Hedge_Curry lvl " + upgradelevel + " " + upgradecost + ":-";
        counter.innerHTML = click + " curry";
    }
    else{
        poor.style.visibility = "visible";
        //här gör jag så att visibility blir visible i style.css (man skulle kunna göra samma sak med color)
        //då skriver man poor.style.color = "..." (den färgen man vill ha)
    }
}
function Hidden(){
    poor.style.visibility = "hidden";
}
function HeligkoHidden(){
    aaryanko.style.visibility = "hidden";
}
function scam(){
    if(click >= scamcost){
        click-=50;
        counter.innerHTML = click + " curry";
        poor.style.visibility
        aaryanko.style.visibility = "visible";
    }
    else{
        poor.style.visibility = "visible";
    }
}
