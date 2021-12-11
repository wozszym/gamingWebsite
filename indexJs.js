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
        cathegories: ['best', 'action'],
        iFrameData: '<iframe src="http://www.freeonlinegames.com/embed/166486" width="800" height="600" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Shaun the Sheep: Baahmy Golf',
        image: 'https://files.cdn.spilcloud.com/gms_s/1617208168_462x250_Shaun-the-sheep-baahmy-golf.jpg',
        cathegories: ['best', 'action'],
        iFrameData: '<iframe src="http://www.freeonlinegames.com/embed/167007" width="900" height="550" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Stickman Archer 2',
        image: 'https://files.cdn.spilcloud.com/thumbs-3-1/200X120_170631_1503928241.png',
        cathegories: ['best', 'sport'],
        iFrameData: '<iframe src="http://www.freeonlinegames.com/embed/144162" width="800" height="500" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Police Chase',
        image: 'https://www.freeonlinegames.com/games/163946/medium.jpg?1594827083',
        cathegories: ['best', 'action'],
        iFrameData: '<iframe src="http://www.freeonlinegames.com/embed/163946" width="960" height="600" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Break Tris',
        image: 'https://www.htmlgames.com/uploaded/thumb/bricktetris300200.jpg',
        cathegories: ['best', 'action'],
        iFrameData: '<iframe src="https://cdn.htmlgames.com/BreakTris/" width="960" height="600" frameborder="no" scrolling="no"></iframe>'
    },
    {
        name: 'Brain Trainer',
        image: 'https://www.mindgames.com/uploaded/thumb/tinglybraintrainer300.jpg',
        cathegories: ['best', 'action'],
        iFrameData: '<iframe src="https://games.coolgames.com/brain-trainer/en/3.0/index.html" width="960" height="600" frameborder="no" scrolling="no"></iframe>'
    }
]

let contentContainer = document.querySelector('#content-container')
const htmlListOfGames = listOfGames.map(gameObject => {
    return `
    <div id="${gameObject.name + 'Card'}" class="card cardHover" style="width: 13rem; margin: 5px; ">
        <img class="card-img-top" src=${gameObject.image} alt=${gameObject.name}>
        <div class="card-body">
            <h5 class="card-title">${gameObject.name}</h5>
            <a id="${gameObject.name + 'CardButton'}" href="#" class="btn btn-primary" style="width: 100%;">Play!</a>
        </div>
    </div>`
})

contentContainer.innerHTML = htmlListOfGames

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

// https://www.creativebloq.com/how-to/hide-your-javascript-code-from-view-source
// https://obfuscator.io/
// https://www.freeonlinegames.com/tag/archery-games/stickman-archer-2
// https://www.coolgames.com/for-publishers/
// https://www.coolmathgames.com/
// https://www.htmlgames.com/
// https://play.idevgames.co.uk/game/tetris-t-crisis

// try to use games from: https://www.htmlgames.com/
// which seem to be free