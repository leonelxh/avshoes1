function showpage2(){
    document.getElementById('products').style.display = "none";
    document.getElementById('products-2').style.display = "block";
    let button2 = document.getElementById('button-1-22');
    button2.style.color = "gray";
    button2.style.borderColor = "gray";
   let button = document.getElementById('button-1-2');
   button.style.color = "black";
   button.style.borderColor = "black";
}
document.getElementById('products-2').style.display = "none";
function showpage1(){
    document.getElementById('products-2').style.display = "none";
    document.getElementById('products').style.display = "block";
    let button = document.getElementById('button-1-2');
    button.style.color = "gray";
    button.style.borderColor = "gray";
    let button2 = document.getElementById('button-1-22');
    button2.style.color = "black";
    button2.style.borderColor = "black";
}
function order(){
    document.getElementById('container').style.display = 
    "block";
    document.getElementById('overlay').style.display = 
    "block";
}
function closeorder(){
    document.getElementById('container').style.display = 
    "none";
    document.getElementById('overlay').style.display = 
    "none"
}
function order2(){
    document.getElementById('container2').style.display =
    "block";
    document.getElementById('overlay2').style.display =
    "block";
}
function closeorder2(){
    document.getElementById('container2').style.display =
    "none";
    document.getElementById('overlay2').style.display =
    "none";
}


document.getElementById('form-group').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(this);
    
    // Make an AJAX request to your server-side script
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // If the request is successful, you can handle the response here
            console.log('Message sent successfully');
        } else {
            // If there was an error, you can handle it here
            console.error('Error sending message:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        // If there was a network error, you can handle it here
        console.error('Network error occurred');
    };
    xhr.send(formData);
});