
function ToggleReadMode() {



    if (document.body.style.filter != 'none') {

        document.body.style.filter = "none";


    } else {

        document.body.style.filter = "brightness(50%)";

    }


}


function changePP() {
    if (document.querySelector('.resumesec').style.boxShadow != 'none') {

        document.querySelector('.resumesec').style.boxShadow = "none";
        document.querySelector('.contactus').style.boxShadow = "none";


    }


    else {
        document.querySelector('.resumesec').style.boxShadow = '2px 2px 30px blue ';
        document.querySelector('.contactus').style.boxShadow = "3px 3px 20px blue";

    }

}




// function crc() {

//     
//     if (document.querySelector('.resumesec').style.backgroundColor != 'black') {

//         document.querySelector('.resumesec').style.backgroundColor = 'black';
//         document.querySelector('.resumesec').style.color = 'cadetblue';


//     }
//     else {
//         document.querySelector('.resumesec').style.backgroundColor = 'white';
//         document.querySelector('.resumesec').style.color = 'black';



//     }
// }
function crc() {

    // localStorage.setItem("crc", "setcrc")

if (document.querySelector('.resumesec').style.backgroundColor != 'black') {
    document.querySelector('.resumesec').style.backgroundColor = 'black';
    document.querySelector('.resumesec').style.color = 'cadetblue';
}

else {
    document.querySelector('.resumesec').style.backgroundColor = 'white';
    document.querySelector('.resumesec').style.color = 'black';

}


}













function cc() {
    var r = Math.floor(Math.random() * 6 + 1);

    if (r == 1) {
        document.querySelector('.resumesec').style.boxShadow = '2px 2px 30px blue ';
        document.querySelector('.contactus').style.boxShadow = "3px 3px 20px blue";
    }
    else if (r == 2) {
        document.querySelector('.resumesec').style.boxShadow = '2px 2px 30px red ';
        document.querySelector('.contactus').style.boxShadow = "3px 3px 20px red";
    }
    else if (r == 3) {
        document.querySelector('.resumesec').style.boxShadow = '2px 2px 30px green ';
        document.querySelector('.contactus').style.boxShadow = "3px 3px 20px green";
    }
    else if (r == 4) {

    }
    else if (r == 5) {
        document.querySelector('.resumesec').style.boxShadow = '2px 2px 30px gold ';
        document.querySelector('.contactus').style.boxShadow = "3px 3px 20px gold";
    }
    else if (r == 6) {
        document.querySelector('.resumesec').style.boxShadow = '2px 2px 30px aqua ';
        document.querySelector('.contactus').style.boxShadow = "3px 3px 20px aqua";
    }

    else {
        document.querySelector('.resumesec').style.boxShadow = '2px 2px 30px white ';
        document.querySelector('.contactus').style.boxShadow = "3px 3px 20px white";
    }
}