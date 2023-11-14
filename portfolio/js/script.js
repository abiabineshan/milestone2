var namee = document.querySelector(".abine")
changename = prompt("enter ur name")
namee.innerHTML = changename;

var peyar = document.querySelector(".suri")
form = prompt("enter ur subject")
peyar.innerHTML = form;

// var typed = newTyped('#element', {
//     strings: ['Web Developer', 'Graphic Designer', 'Web Designer', 'Photo Grapher'],
//     typeSpeed: 50,
// });

// const btn = document.querySelector('button');
// const ul = document.querySelector('ul');

// btn.addEventListener('#changeTextButton',()=>{
//     const li = document.createElement('h1');
//     li.innerText = 'this is li';
//     ul.appendChild(li)}
// );

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendMessageButton').addEventListener('click', function () {
        var name = document.getElementById('nameInput').value;
        var email = document.getElementById('emailInput').value;
        var number = document.getElementById('numberInput').value;
        var message = document.getElementById('messageInput').value;

        var data = `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`;
        alert(data);
        alert('Your Message is Successfully Submitted');
    });

        // alert('Your Message is Successfully Submitted');
});

document.addEventListener('DOMContentLoaded', function () {
    var changeTextButton = document.getElementById('changeTextButton');
    var additionalText = document.getElementById('additionalText');

    changeTextButton.addEventListener('click', function () {
        if (additionalText.style.display === 'none') {
            additionalText.style.display = 'block';
        } else {
            additionalText.style.display = 'none';
        }
    });
});


