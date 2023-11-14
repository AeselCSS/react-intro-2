import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import ArtistsDataPage from './components/pages/ArtistsDataPage';
import CreateArtistForm from './components/pages/CreateArtistForm';
import NotFoundPage from './components/pages/NotFoundPage';



export default function App() {

    return (
        <>
          <Navbar />
          <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/artists" element={<ArtistsDataPage />} />
                <Route path="/artists/create" element={<CreateArtistForm />} />
                <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
    );
}

