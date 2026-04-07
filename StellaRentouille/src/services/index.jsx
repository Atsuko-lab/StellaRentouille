


export const getPlanets = async () => {
    const response = await fetch('/planets.json');
    const data = await response.json();
    return data.planets;
}


