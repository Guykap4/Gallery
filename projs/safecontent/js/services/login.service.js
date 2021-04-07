function onLogIn() {
    var logUsername = getInputInfo('username');
    var logPassword = getInputInfo('password');

    var users = getUsersFromStorage();
    var currUser = users.find(user => user.username === logUsername);
    if (!currUser) {
        alert('Wrong Username!');
        clearInputInfo();
        return;
    }

    if (currUser.password === logPassword) {
        onSuccesfullLog(currUser);
    } else {
        alert('Wrong Password!');
        clearInputInfo();
    }
}

function onLogOut() {
    renderDisplay();
    localStorage.removeItem('currUser');
    renderAdminDiv(false);
}

function onSuccesfullLog(currUser) {
    saveUserToStorage(currUser);
    updateUserLogTime(currUser);
    renderDisplay();
    renderUsernameDiv(currUser);
    renderAdminDiv(currUser.isAdmin);
    clearInputInfo();
}

function updateUserLogTime(currUser) {
    currUser.lastLoginTime = Date.now();
    var users = getUsersFromStorage();
    modalUser = users.find(user => user.username === currUser.username);
    modalUser.lastLoginTime = currUser.lastLoginTime;
    saveUsersToStorage(users);
}
