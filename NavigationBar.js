function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function LinkedIn() {
    var win = window.open('https://in.linkedin.com/');
    win.focus();
}

function Facebook() {
    var win = window.open('https://www.facebook.com');
    win.focus();
}

function date() {
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var msg = document.createTextNode("Todays Date: " + month + "/" + day + "/" + year);
    document.getElementById("date").appendChild(msg);
    
}
function myFunction1() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
       alert("Input not valid");
    } else {
        alert("Input OK");
    }
    document.getElementById("demo").innerHTML = text;
}

function validateForm(phone2) {
    var phoneno = /^\d{10}$/;
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") 
    {
        alert("Name must be filled out");
        return false;
    }
    
    else
    {
        alert("Form Submitted Successfully!");
        return false;

    }
        

}
   
function phonenumber() {
    var inputtxt = document.getElementById('text1').value;
    var phoneno = "123";
    if (inputtxt.match(phoneno)) {
        alert("Not a valid Phone Number");

    }
}
 /*   else {
        alert("Not a valid Phone Number");
        
    }


/*
function phonenumber() {
    var inputtxt=document.form1.text1;
    var phoneno = /^\d{10}$/;
    if (inputtxt.value.match(phoneno)) {
        alert("Not a valid Phone Number");
       
    }
    else {
        alert("Not a valid Phone Number");
        
}


/*
function validate() {
    var x = document.myForm.phone.value;
    if (x.length < 10) {

        alert("enter 10 numbers");
        return false;
        }
}
*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

