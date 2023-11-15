const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Tel Aviv',
    occupation: 'Engineer'
}

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. your occupation is: ${this.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
