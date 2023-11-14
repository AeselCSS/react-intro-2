
async function fetchArtists() {
    return await (await fetch("http//localhost:3000/artists")).json();
}

export {fetchArtists}