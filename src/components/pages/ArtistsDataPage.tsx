import { useEffect, useState } from "react";
import ArtistTable from "./ArtistTable";
import { PageLoader } from "./PageLoader";
//import { fetchArtists } from "../../utils/datahandler.ts";

type Artist = {
    id: number;
    name: string;
    image: string;
};

export default function ArtistsDataPage() {
    const [artists, setArtists] = useState<Artist[] | null>(null)
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

    if (!artists) {
        return <PageLoader/>
    } 
        
    return <ArtistTable artists={artists} />;
    
}
