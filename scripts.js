/* Add your JavaScript to this file */

window.onload = () => {
    let messageDisplay = document.querySelector('.message');

    let emailInput = document.querySelector('#email');

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        messageDisplay.innerHTML = '';
        let newPElement = document.createElement("p");

        if (emailInput.value.trim().length < 1) {
            let newTextNode = document.createTextNode("Please enter a valid email address.");
            newPElement.appendChild(newTextNode);
            messageDisplay.appendChild(newPElement);
        } else {
            let newTextNode = document.createTextNode(`Thank you! Your email address ${emailInput.value.trim()} has been added to our mailing list!`);
            newPElement.appendChild(newTextNode);
            messageDisplay.appendChild(newPElement);
        }
    });
}



