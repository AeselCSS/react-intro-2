import "../../styles/ArtistTable.css"


type Artist = {
    id: number,
    name: string,
    image: string
}

type props = {
    artists: Artist[]
}

export default function ArtistTable({ artists }: props) {
    
    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Image</td>
                </tr>
            </thead>
            <tbody>
                {artists.map((artist) => {
                    return (
                        <tr key={artist.id}>
                            <td>{artist.id}</td>
                            <td>{artist.name}</td>
                            <td><img className="image" src={artist.image}/></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}