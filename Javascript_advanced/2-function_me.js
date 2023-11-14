function welcomeMessage(fullName) {
    return function() {
        alert("Welcome " + fullName);
    }
}

const guillame = welcomeMessage("Guillame");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");
