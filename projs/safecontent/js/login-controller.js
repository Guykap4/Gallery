function renderUsersTable() {
    var users = getUsersFromStorage();
    var strHTMLs = users.map(function (user) {
        return `
        <tr>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.lastLoginTime}</td>
        <td>${user.isAdmin}</td>
        </tr>
        `
    })
    var elUsersTable = document.querySelector('.users-table tbody');
    elUsersTable.innerHTML = strHTMLs.join('');
}

function renderDisplay() {
    var elLoginPanel = document.querySelector('.login');
    elLoginPanel.hidden = !elLoginPanel.hidden;
    var elSecretContent = document.querySelector('.secret-content');
    if (elSecretContent.style.display === 'flex') {
        elSecretContent.style.display = 'none'
    } else {
        elSecretContent.style.display = 'flex'
    }
}

function renderAdminDiv(isAdmin) {
    var eladminDiv = document.querySelector('.admin-link');
    eladminDiv.innerHTML = isAdmin? eladminDiv.innerHTML = `<a href="http://127.0.0.1:5500/admin.html">OH LORD ADMIN CLICK ME</a>` : '';
}

function renderUsernameDiv(currUser) {
    var elUsernameDiv = document.querySelector('.display-username');
    elUsernameDiv.innerText = `Welcome ${currUser.username}!`;
}

function getInputInfo(name) {
var inputField = document.querySelector(`input[name=${name}]`).value;
return inputField;
}

function clearInputInfo() {
    document.querySelector('input[name=username]').value = '';
    document.querySelector('input[name=password]').value = '';
}