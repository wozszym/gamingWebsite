// Cookie section:
$(document).ready(function () {
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
    }, 1000);
    $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
    });
});

// pass args section:
const args0button = document.getElementById("args0");
args0button.addEventListener('click', myFunc0, false);
args0button.myParam = 'This is my parameter';
function myFunc0(evt) {
    // window.alert(evt.currentTarget.myParam);
    const jsonContact = [{ "name": "Adam", "email": "Prince", "mobile": "1234" }];
    sessionStorage.setItem('contactOptions', JSON.stringify(jsonContact));
    window.open("/play.html");
}

const args1button = document.getElementById("args1");
args1button.addEventListener('click', myFunc1, false);
args1button.myParam = 'This is my parameter';
function myFunc1(evt) {
    // window.alert(evt.currentTarget.myParam);
    const jsonContact = [{ "name": "John", "email": "Prince", "mobile": "1234" }];
    sessionStorage.setItem('contactOptions', JSON.stringify(jsonContact));
    window.open("/play.html");
}

// fill games data
const listOfGames = [
    {
        name: 'Impostor',
        image: 'https://files.cdn.spilcloud.com/thumbs-0-3/200X120_177703_1611403044.png',
        categories: ['best', 'action'],
        iFrameData: '<iframe src="http://www.freeonlinegames.com/embed/166486" width="800" height="600" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Shaun the Sheep: Baahmy Golf',
        image: 'https://files.cdn.spilcloud.com/gms_s/1617208168_462x250_Shaun-the-sheep-baahmy-golf.jpg',
        categories: ['best', 'action'],
        iFrameData: '<iframe src="http://www.freeonlinegames.com/embed/167007" width="900" height="550" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Stickman Archer 2',
        image: 'https://files.cdn.spilcloud.com/thumbs-3-1/200X120_170631_1503928241.png',
        categories: ['best', 'sport'],
        iFrameData: '<iframe src="http://www.freeonlinegames.com/embed/144162" width="800" height="500" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Break Tris',
        image: 'https://www.htmlgames.com/uploaded/thumb/bricktetris300200.jpg',
        categories: ['best', 'action', 'logical'],
        iFrameData: '<iframe src="https://cdn.htmlgames.com/BreakTris/" width="960" height="600" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Brain Trainer',
        image: 'https://www.mindgames.com/uploaded/thumb/tinglybraintrainer300.jpg',
        categories: ['best', 'logical'],
        iFrameData: '<iframe src="https://games.coolgames.com/brain-trainer/en/3.0/index.html" width="960" height="600" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: '2048 UFO',
        image: 'https://www.htmlgames.com/uploaded/thumb/2048ufo300.jpg',
        categories: ['best', 'logical'],
        iFrameData: '<iframe id="gameFrame" src="https://cdn.htmlgames.com/2048UFO/index.html?npa=0" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay" style="width: 100%; height: 480px; display: block;"></iframe>'
    }
]

function createCardForGame(gameObject) {
    return `
    <div id="${gameObject.name + 'Card'}" class="card cardHover" style="width: 13rem; margin: 5px; ">
        <img class="card-img-top" src=${gameObject.image} alt=${gameObject.name}>
        <div class="card-body">
            <h5 class="card-title">${gameObject.name}</h5>
            <a id="${gameObject.name + 'CardButton'}" href="#" class="btn btn-primary" style="width: 100%;">Play!</a>
        </div>
    </div>`
}

let contentContainer = document.querySelector('#content-container')
const htmlListOfGames = listOfGames.map(gameObject => createCardForGame(gameObject))
contentContainer.innerHTML = htmlListOfGames

// we also want to have all games when clicking home butting
const homeButton = document.querySelector('#HomeButton')
homeButton.addEventListener('click', (event) => { contentContainer.innerHTML = htmlListOfGames }, false)

// set even handlers
listOfGames.forEach(gameObject => {
    const cardItem = document.getElementById(`${gameObject.name + 'Card'}`);
    const cardButtonItem = document.getElementById(`${gameObject.name + 'CardButton'}`);

    const eventHanler = (evt) => {
        const jsonContact = [gameObject];
        sessionStorage.setItem('contactOptions', JSON.stringify(jsonContact));
        window.open("/play.html");
    }

    cardItem.addEventListener('click', eventHanler, false);
})

// add pages for nav buttons
function addHandlersForNavButtons() {
    const idsToModify = [
        "Action",
        "Logical",
        "Puzzle",
        "Cards",
        "Board",
        "Girl",
        "Sport"]

    idsToModify.forEach(cathegory => {
        const navButton = document.getElementById(`${cathegory + 'Button'}`)

        const listOfGamesForCathegoryInHtml = listOfGames
            .filter(game => game.categories.includes(cathegory.toLowerCase()))
            .map(game => createCardForGame(game))

        const eventHandler = (evt) => {
            let contentContainer = document.querySelector('#content-container')
            contentContainer.innerHTML = listOfGamesForCathegoryInHtml
        }

        navButton.addEventListener('click', eventHandler, false)
    })
}
addHandlersForNavButtons()

// end: add pages for nav buttons

// https://www.creativebloq.com/how-to/hide-your-javascript-code-from-view-source
// https://obfuscator.io/
// https://www.freeonlinegames.com/tag/archery-games/stickman-archer-2
// https://www.coolgames.com/for-publishers/
// https://www.coolmathgames.com/
// https://www.htmlgames.com/
// https://play.idevgames.co.uk/game/tetris-t-crisis
// https://www.htmlgames.com

// try to use games from: https://www.htmlgames.com/
// which seem to be free