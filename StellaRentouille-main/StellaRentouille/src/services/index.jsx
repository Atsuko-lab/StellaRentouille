


export const getPlanets = async () => {
    const response = await fetch('/planets.json');
    const data = await response.json();
    return data.planets;
}


export const getAsteroids = async () => {
    const response = await fetch('/asteroides.json');
    const data = await response.json();
    return data.asteroides;
}

export const getSoleil = async () => {
    const response = await fetch('/soleil.json');
    const data = await response.json();
    return data.soleils;
}