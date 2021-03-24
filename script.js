var i = 1;


function add() {
    var err = 0;
    nam = document.getElementById("name").value;
    num = document.getElementById("num").value;
    email = document.getElementById("email").value;

    
    if(nam=="" || num=="" || email==""){
        alert("Please fill all the information");
        err = 1;
    }
    if (nam.length < 3) {
        err = 1;
    }
    if (num.length < 10) {
        err = 1;
    }
    console.log(err)
    var atpos = email.indexOf("@");
    var dpos = email.lastIndexOf(".");
    if (atpos < 1 || dpos < atpos + 2 || dpos + 2 >= email.length) {
        err = 1;
    }

    if (err === 0) {

        document.getElementById("result").style.display = "flex";


        var table = document.getElementById("result");
        var trow = table.insertRow(i);

        var tnam = trow.insertCell(0);
        tnam.innerText = nam;

        var tmob = trow.insertCell(1);
        tmob.innerText = num;

        var tmail = trow.insertCell(2);
        tmail.innerText = email;

        var delbutton = trow.insertCell(3);
        delbutton.innerHTML = '<input type="button" id="delete" value="Delete" onclick="deleteRow(this)">';

        i++;
    }
    else {
        alert("Incorrect input");
    }
}

function deleteRow(r) {
    var x = r.parentNode.parentNode.rowIndex;
    document.getElementById("result").deleteRow(x);
    i--;
}