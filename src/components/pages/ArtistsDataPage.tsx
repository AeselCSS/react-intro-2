import { useEffect, useState } from "react";
import ArtistTable from "./ArtistTable";
//import { fetchArtists } from "../../utils/datahandler.ts";

export default function ArtistsDataPage() {
    const [artists, setArtists] = useState([])
    console.log(artists);
    

    useEffect(() => {
        

        async function fetchData() {
            const res = await fetch("http://localhost:3000/artists/");
            const data = await res.json();
            setArtists(data)
        }
        // const fetchData = async () => {
        //     const response = await fetchArtists();
        //     console.log(response);
        // };
        fetchData();

    }, []);

    return <ArtistTable artists={artists} />;
}
