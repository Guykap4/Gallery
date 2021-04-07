var gUsers = [];

function creatUsers() {
    if (!localStorage.getItem('users')) {
        gUsers.push(_createUser('qawsedrf', 'hnnnd7hfh'))
        gUsers.push(_createUser('abcde', '1sehh5543f'))
        gUsers.push(_createUser('ffghtyj', 'arg345bhd'))
        gUsers.push(_createUser('admin', '!234Qwer', 0, true))

        saveUsersToStorage(gUsers);
    }
    gUsers = getUsersFromStorage();
    console.log(gUsers);
}

function _createUser(username, password, loginTime = 0, isAdmin = false) {
    var newUser = {
        id: _makeId(),
        username,
        password,
        lastLoginTime: loginTime,
        isAdmin,
    }
    return newUser;
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}