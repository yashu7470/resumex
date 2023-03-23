let d = new Date();
a = d.getMinutes();
b = d.getHours();
c = d.toTimeString();
s = d.getSeconds();

// cd = b + ":" + a + ":" + s;

// document.querySelector('h2').innerHTML = cd;



if (c >= "06:00:00" && c < "12:00:00") {
    // document.querySelector('h1').innerText = "Goodmorning 😊";
    document.body.style.backgroundColor = "white";
}
else if (c >= "12:00:00" && c < "16:00:00") {
    // document.querySelector('h1').innerText = "Goodafternoon 😢";
    document.body.style.backgroundColor = "white";

    // document.getElementById('sml1').style.color = "gold";
    // document.getElementById('sml2').style.color = "gold";
    // document.getElementById('sml3').style.color = "gold";
    // document.getElementById('h3').style.color = "white";
    // document.getElementById('inpsec').style.color = "white";
    document.querySelector('.contactus').style.boxShadow = "3px 3px 30px blue";


}

else if (c >= "16:00:00" && c < "19:00:00") {
    // document.querySelector('h1').innerText = "Goodevening 😊";

    document.body.style.backgroundColor = "white";
    document.querySelector('.resumesec').style.boxShadow = "3px 3px 30px blue";

    //  document.getElementById('sml1').style.color = "gold";
    //  document.getElementById('sml2').style.color = "gold";
    //  document.getElementById('sml3').style.color = "gold";
    //  document.getElementById('h3').style.color = "white";
    //  document.getElementById('inpsec').style.color = "white";
    // document.querySelector('.contactus').style.boxShadow = "3px 3px 10px blue";

}
else if (c >= "19:00:00" && c < "23:59:59") {
    // document.querySelector('h1').innerText = "Goodevening 😊";
    document.body.style.backgroundColor = "black";
    document.querySelector('.resumesec').style.boxShadow = "3px 3px 30px blue";

    document.getElementById('sml1').style.color = "gold";
    document.getElementById('sml2').style.color = "gold";
    document.getElementById('sml3').style.color = "gold";
    document.getElementById('h3').style.color = "white";
    document.getElementById('inpsec').style.color = "white";
    document.querySelector('.contactus').style.boxShadow = "3px 3px 20px blue";


}
else {
    // document.querySelector('h1').innerText = "Goodnight ";
    document.body.style.backgroundColor = "black";
    document.querySelector('.resumesec').style.boxShadow = "3px 3px 30px blue";

    document.getElementById('sml1').style.color = "gold";
    document.getElementById('sml2').style.color = "gold";
    document.getElementById('sml3').style.color = "gold";
    document.getElementById('h3').style.color = "white";
    document.getElementById('inpsec').style.color = "white";
    document.querySelector('.contactus').style.boxShadow = "3px 3px 20px blue";

}


function ShowPic() {
    let value1 = document.getElementById('fpass').value;
    if (value1 == "yash") {
        //  window.open("images.html","");
        window.location.href = "images.html";
    }
    else {
        alert("Incorrect Name");
    }
}





var btnsound = document.getElementById("keypress");

function Playkeypress() {
    btnsound.play();
}

function ls1(){
    document.querySelector('.loading').style.display = "none";
}

