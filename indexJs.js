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