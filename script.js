setInterval(setTime, 1000)

const hourPointer = document.querySelector('[data-hour-pointer]')
const minutePointer = document.querySelector('[data-minute-pointer]')
const secondPointer = document.querySelector('[data-second-pointer]')

function setTime() {
    const currentTime = new Date()

    const secondRatio =  currentTime.getSeconds() / 60
    const minuteRatio = (secondRatio + currentTime.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentTime.getHours()) / 12

    setRotation(secondPointer, secondRatio)
    setRotation(minutePointer, minuteRatio)
    setRotation(hourPointer, hourRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}