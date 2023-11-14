import { useState } from "react";
import "../../styles/CreateArtistForm.css"

export default function CreateArtistForm() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const artist = { name, image };
        const artistAsJson = JSON.stringify(artist);
        console.log(artist);

        await fetch("http://localhost:3000/artists/", {
            method: "POST",
            body: artistAsJson,
            headers: {"Content-Type": "application/json"}
        });

        clearForm()

    }

    function clearForm() {
        setName("");
        setImage("");
    }

    return (
        <>
            <h1>Create new artist</h1>
            <form onSubmit={handleSubmit} action="">
                <div className="table">
                    <label htmlFor="">Name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" value={name} required />
                    <label htmlFor="">image</label>
                    <input onChange={(e) => setImage(e.target.value)} type="text" value={image} />
                </div>
                <button>Submit</button>
            </form>
        </>
    );
}
