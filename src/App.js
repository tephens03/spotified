import './App.css';
import Navbar from './Components/Navbar';
import DetailSong from './Components/DetailSong';
import ListSong from './Components/ListSong';
import { songs } from './Context';
import DataSongs from './data/songs.json';
import Playing from './Components/Playing';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';



function App() {
  const [song,setSong] = useState(DataSongs[0]);

  const handleSetSong = (songId) => {
    const song = DataSongs.find(song => song.id === songId) 
    setSong(song);
  }

  if(!song) setSong(DataSongs[0]);
  return (
    <div className="App">
      <songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        {/* for h-main-height, when specifying the class we have to add h at the beginning but int the config we dont have to */}
        <div id='home' className='text-white sm:grid sm:grid-cols-3 h-main-height bg-slate-700'>
          <DetailSong />
          <ListSong />
        </div>

        <Playing />

      </songs.Provider>



    </div >
  )
}

export default App;
