// Denna modul valde jag att göra då det är mycket variabler som bara används
// till en funktion.
const sun = document.querySelector('.sun')
const overlay = document.querySelector('.overlay')
const planetDescEl = document.querySelector('#planet-desc')
const planetNameEl = document.querySelector('#planet-name')
const planetNameLatinEl = document.querySelector('#planet-name-latin')
const planetCircumferenceEl = document.querySelector('#planet-circumference')
const planetDistEl = document.querySelector('#distanceFromSun')
const planetMaxEl = document.querySelector('#maxTemp')
const planetMinEl = document.querySelector('#minTemp')
const planetMoonEl = document.querySelector('#moons')
const closeBtn = document.querySelector('.closeBtn')

let sunClass = 

closeBtn.addEventListener('click', toggleOverlayOff)

function toggleOverlayOn() {
    overlay.classList.add("display");
}

function toggleOverlayOff() {
    overlay.classList.remove("display");
    sun.classList.remove(sunClass)

}

async function showPlanetInfo(i, planets) {
    toggleOverlayOn();
    planetNameEl.innerHTML = planets[i].name.toUpperCase();
    planetNameLatinEl.innerHTML = planets[i].latinName.toUpperCase();
    planetDescEl.innerHTML = planets[i].desc;
    planetCircumferenceEl.innerHTML = `${planets[i].circumference} Km`
    planetMaxEl.innerHTML = `${planets[i].temp.day} C`;
    planetMinEl.innerHTML = `${planets[i].temp.night} C`;
    planetDistEl.innerHTML = `${planets[i].distance} Km`;
    planetMoonEl.innerHTML = planets[i].moons.join(', ');
    changeSunColor(i, planets);
}

function changeSunColor(i, planets){

sun.classList.add(`${planets[i].name}`)

sunClass = planets[i].name

}
export {showPlanetInfo}

