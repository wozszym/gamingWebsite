

const x = JSON.parse(sessionStorage.getItem('contactOptions'))
console.log(x[0])
const gameObject = x[0]
//window.alert(x[0].name)
console.log($('#txtPlaceholder').text())
const oldText = $('#txtPlaceholder').text()
const newText = oldText + ", created for: " + gameObject.name
$('#txtPlaceholder').text(newText)

// set iFrame
//  GameDistribution.com
let iframePlaceHolder = document.querySelector("#iframePlaceHolder")
iframePlaceHolder.innerHTML = gameObject.iFrameData



