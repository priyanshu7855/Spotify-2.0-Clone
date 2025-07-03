import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Player } from './components/Player';
import { useMusic } from './hooks/useMusic';
import { mockSongs, mockAlbums, mockPlaylists, mockGenres } from './data/mockData';
import { Song, Album, Playlist } from './types/music';

function App() {
  const [activeView, setActiveView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [songs, setSongs] = useState(mockSongs);
  
  const {
    musicState,
    playSong,
    togglePlayPause,
    nextSong,
    previousSong,
    setVolume,
    setCurrentTime,
    toggleRepeatMode,
    toggleShuffle
  } = useMusic();

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveView('search');
    }
  }, []);

  const handleToggleLike = useCallback((song: Song) => {
    setSongs(prevSongs => 
      prevSongs.map(s => 
        s.id === song.id ? { ...s, liked: !s.liked } : s
      )
    );
  }, []);

  const handlePlayPlaylist = useCallback((playlist: Playlist) => {
    if (playlist.songs.length > 0) {
      playSong(playlist.songs[0], playlist.songs);
    }
  }, [playSong]);

  const handlePlayAlbum = useCallback((album: Album) => {
    if (album.songs.length > 0) {
      playSong(album.songs[0], album.songs);
    }
  }, [playSong]);

  const searchResults = searchQuery.trim() 
    ? songs.filter(song => 
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.album.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        
        <MainContent
          activeView={activeView}
          songs={songs}
          albums={mockAlbums}
          playlists={mockPlaylists}
          genres={mockGenres}
          searchResults={searchResults}
          currentSong={musicState.currentSong}
          isPlaying={musicState.isPlaying}
          onPlaySong={playSong}
          onTogglePlayPause={togglePlayPause}
          onToggleLike={handleToggleLike}
          onPlayPlaylist={handlePlayPlaylist}
          onPlayAlbum={handlePlayAlbum}
        />
      </div>
      
      <Player
        musicState={musicState}
        onTogglePlayPause={togglePlayPause}
        onNextSong={nextSong}
        onPreviousSong={previousSong}
        onVolumeChange={setVolume}
        onSeek={setCurrentTime}
        onToggleRepeat={toggleRepeatMode}
        onToggleShuffle={toggleShuffle}
        onToggleLike={handleToggleLike}
      />
    </div>
  );
}

export default App;