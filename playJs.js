
// Add handlers for nav buttons
function addHandlersForNavButtonsPlay() {
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

        const eventHandler = (evt) => {
            localStorage.setItem('navButtonClicked', `${cathegory + 'Button'}`)
            window.open("/index.html", "_self")
        }

        navButton.addEventListener('click', eventHandler, false)
    })
}
addHandlersForNavButtonsPlay()



// Display a game
const x = JSON.parse(sessionStorage.getItem('contactOptions'))
console.log(x[0])
const gameObject = x[0]
//window.alert(x[0].name)
console.log($('#txtPlaceholder').text())
const oldText = $('#txtPlaceholder').text()
const newText = oldText + gameObject.name
$('#txtPlaceholder').text(newText)

// set iFrame
//  GameDistribution.com
let iframePlaceHolder = document.querySelector("#iframePlaceHolder")
iframePlaceHolder.innerHTML = gameObject.iFrameData



