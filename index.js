
import { showPlanetInfo } from './jsmodules/showInfo.js'
import { getBodies } from './jsmodules/getApiKeymodule.js';

// funderade på att lägga denna i en modul med, men beslutade mot det för att det
// kändes onödigt att ha en modul för en loop och en querySelector
const planetsElem = document.querySelectorAll('.planet')
for (let i = 0; i < planetsElem.length; i++) {
    planetsElem[i].addEventListener('click', async () => {
        const planets = await getBodies();
        showPlanetInfo(i, planets);
    })
};
