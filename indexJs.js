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
        iFrameData: '<iframe src="https://html5.gamedistribution.com/9abe6af0fbb440b98a3e24bf7fb0636a/" width="800" height="600" scrolling="none" frameborder="0"></iframe>'
    },
    {
        name: 'Shaun the Sheep: Baahmy Golf',
        image: 'https://files.cdn.spilcloud.com/gms_s/1617208168_462x250_Shaun-the-sheep-baahmy-golf.jpg',
        cathegories: ['best', 'action'],
        iFrameData: '<iframe src="https://html5.gamedistribution.com/f31e49a239ea4685aec9e0f80798bb1c/" width="1280" height="720" scrolling="none" frameborder="0"></iframe>'
    },
    {
        name: 'Stickman Archer 2',
        image: 'https://files.cdn.spilcloud.com/thumbs-3-1/200X120_170631_1503928241.png',
        cathegories: ['best', 'sport'],
        iFrameData: '<iframe src="https://html5.gamedistribution.com/0456e9546b6b43ce892c11da41630d12/" width="800" height="500" scrolling="none" frameborder="0"></iframe>'
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