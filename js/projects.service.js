var gProjects = [
    {
        id: _makeId(),
        name: 'minesweeper',
        title: 'Mine Sweeper',
        desc: 'Good ol\' Mine Sweeper experience',
        long: 'Enjoy my shot at the classic Mine Sweeper game!',
        url: './img/portfolio/minesweeper.png',
        urlBig : 'none',
        date: '24.03.2021',
        type: 'Game',
    },
    {
        id: _makeId(),
        name: 'bookstore',
        title: 'Book Store',
        desc: 'Book store product backstage managment',
        long: 'Simulating a book store product managment system, that is able to add, remove, and update books - including price, rating.',
        url: './img/portfolio/bookstore.png',
        urlBig : 'none',
        date: '05.04.2021',
        type: 'Product System',
    },
    {
        id: _makeId(),
        name: 'chesssimulator',
        title: 'Chess Simulator',
        desc: 'Chess board for moves simulating',
        long: 'Chess board contains all pieces, with their respective moves.',
        url: './img/portfolio/chess.png',
        urlBig : 'none',
        date: '21.03.2021',
        type: 'Simulator',
    },
    {
        id: _makeId(),
        name: 'guesswho',
        title: 'Guess Who?',
        desc: 'Interactive guessing game, "evolving" with each round!',
        long: 'Think of a person, and let the game guess that person for you! with each round ends with you winning, the game learns another answer and gets smarter!',
        url: './img/portfolio/guesswho.png',
        urlBig : 'none',
        date: '06.04.2021',
        type: 'Game',
    },
    {
        id: _makeId(),
        name: 'touchnums',
        title: 'Touch Nums',
        desc: 'Speed based game, testing how good you are at spotting!',
        long: 'Game starts when you click first num (1), ends when you reach current difficulty last num. let\'s see how fast you really are...',
        url: './img/portfolio/touchnums.png',
        urlBig : 'none',
        date: '19.03.2021',
        type: 'Game',
    },
    {
        id: _makeId(),
        name: 'safecontent',
        title: 'Safe Content',
        desc: 'A system operating as a login verification',
        long: 'Runs on local storage, I wouldn\'t recommend anyone using it as a true varificaton for anything. but, secret content is quite good if I\'m being honest...',
        url: './img/portfolio/signin.png',
        urlBig : 'none',
        date: '04.04.2021',
        type: 'Login System',
    },
]

function getProjects() {
    return gProjects;
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getProjByTitle(title) {
    currProj = gProjects.find(function (proj) {
        return proj.title === title;
    })
    return currProj;
}