import React, { useContext } from 'react'
import { songs } from '../Context';

export default function DetailSong() {
  const {song} = useContext(songs);
   
  return (
    <div className='col-span-1 text-left  p-3'>
      <h2 className='text-cyan-400 font-bold'>Now playing</h2>
      <h2 className='text-zinc-500 text-2xl'>{song.name}</h2>
      {/* Song avatar */}
      <div className='w-[240px] m-auto mt-10'>
        <img src={song.links.images[0].url} alt='avatar'></img>
      </div>

      {/* album avatar */}
      <div className='flex justify-evenly items-center mt-10 '>
        <img className='w-[77px]  rounded-full'  src={song.links.images[1].url} alt='avatar'></img>
        <span className='text-xl'>{song.author}</span>


      </div>
    </div>
  )
}
