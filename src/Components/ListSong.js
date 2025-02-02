import React, { useContext, useState } from 'react'
import { songs } from '../Context'


export default function ListSong() {
  const { DataSongs, handleSetSong } = useContext(songs);
  const [songId, setidSong] = useState(0);
  const handlePlaySong = (songId) => {
    setidSong(songId)
    handleSetSong(songId)
  };


  return (
    <div className='col-span-2 overflow-y-auto'>
      {/* Table represents the menu song */}
      <table className='w-full table-auto'>
        {/* Heading of the table */}
        <thead className='text-white h-12'>
          <tr className='bg-gray-500'  >
            <th className='w-[10%]' >#</th>
            <th className="text-left">Titles</th>
            <th className='text-left w-[10%]'>Authors</th>
            <th className='w-[10%]'>
              <i class="fa fa-download" aria-hidden="true"></i>
            </th>
          </tr>
        </thead>

        {/* All the song will be stored here */}
        <tbody>
          {DataSongs.map((songs, index) => (
            <tr value={index}
              className= {`h-12 bg-gray-800 hover:text-emerald-300	hover:bg-slate-500 hover:cursor-pointer ${songId === songs.id && 'text-teal-400 bg-slate-500'}`}

              onClick={() => handlePlaySong(songs.id)}
              typeof='button'>
              <td>{index + 1}</td>
              <td className='text-left'>{songs.name}</td>
              <td className='text-left'>{songs.author}</td>
              <td className='text-center'>
                <a href='{songs.url}'> <i class="fa fa-download" aria-hidden="true"></i></a>
              </td>
            </tr>
          )
          )
          }
        </tbody>
      </table>
    </div >
  )
}
