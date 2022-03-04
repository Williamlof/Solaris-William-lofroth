
// denna modul Skapade jag för att separera API-hämtandet från resterande
// kod som rör hemsidan. 
// getBodies använder getApiKey för att ta emot API-nyckeln som behövs för att
// fetcha bodies från API.

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com/'

async function getApiKey() {
    const KEY_URL = `${BASE_URL}keys`;
    const response = await fetch(KEY_URL, {
        method: 'POST'
    });
    const data = await response.json();
    return data.key;
}

async function getBodies() {
    const apiKey = await getApiKey();
    const BODIES_URL = `${BASE_URL}bodies`;
    const response = await fetch(BODIES_URL, {
        method: 'GET',
        headers: { 'x-zocom': apiKey }
    });

    const data = await response.json();
    const planets = data.bodies
    return planets;
};

export { getBodies };