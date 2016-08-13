function me() {
    var name = prompt("Enter your name");
    if (name != null) {
        document.getElementById("sayHello").innerHTML="Hello " + name;
    }
    else
    {
        alert("please enter your name next time!");
    }
    }

function reply_click() {
    alert("HI! you just clicked a button!");
}