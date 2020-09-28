const title ="skamieliny ta, ta, ta   no i fum pany ";

// zmienne
var y = 1;
var dlugosc =title.length;
// aktywacja funkcji przy włączeniu strony
window.onload=load;
// funkcja wpisania tekstu do <h1></h1>
function load(){
var h = document.createElement("h1");
h.setAttribute("id","heading");
document.body.appendChild(h);
}

// funkcja slice'owania tekstu 
function sliceText(){
    var tekst=title.slice(0,y);
    // inkrementacja zmiennej y
    y++;

    document.getElementById("heading").innerHTML=tekst;
    // reset tekstu po wyświetleniu całosci 
    if(y < dlugosc){
        y += 1;
    }
    else{
        y=0;
    }

}

setInterval(sliceText,100)