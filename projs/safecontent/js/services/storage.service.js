function saveUserToStorage(userData) {
    var user = JSON.stringify(userData);
    localStorage.setItem('currUser', user);
}

function saveUsersToStorage(usersdata) {
    var users = JSON.stringify(usersdata);
    localStorage.setItem('users', users);
}

function getUsersFromStorage() {
    return JSON.parse(localStorage.getItem('users'));
}

function getCurrUserFromStorage () {
    return JSON.parse(localStorage.getItem('currUser'));
}