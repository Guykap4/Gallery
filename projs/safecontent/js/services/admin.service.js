var sortAFirst = false;
var sortloginbig = false;

function init() {
    renderUsersTable();
    isAdmin();
}

function sortByUsername() {
    var users = getUsersFromStorage();
    if (!sortAFirst) {
        users.sort(function (a, b) {
            if (a.username.toLowerCase() > b.username.toLowerCase()) return 1;
            if (b.username.toLowerCase() > a.username.toLowerCase()) return -1;
        })
        sortAFirst = true;
    } else {
        users.sort(function (a, b) {
            if (a.username.toLowerCase() > b.username.toLowerCase()) return -1;
            if (b.username.toLowerCase() > a.username.toLowerCase()) return 1;
        })
        sortAFirst = false;
    }
    saveUsersToStorage(users);
    renderUsersTable();
}

function sortByloginTime() {
    var users = getUsersFromStorage();
    if (!sortloginbig) {
        users.sort(function (a, b) {
            if (a.lastLoginTime > b.lastLoginTime) return 1;
            if (b.lastLoginTime > a.lastLoginTime) return -1;
        })
        sortloginbig = true;
    } else {
        users.sort(function (a, b) {
            if (a.lastLoginTime > b.lastLoginTime) return -1;
            if (b.lastLoginTime > a.lastLoginTime) return 1;
        })
        sortloginbig = false;
    }
    saveUsersToStorage(users);
    renderUsersTable();
}

function isAdmin() {
    var currUser = getCurrUserFromStorage();
    if (!currUser.isAdmin) location = "http://127.0.0.1:5500/index.html";
}