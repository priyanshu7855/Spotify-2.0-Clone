import React from 'react';
import { Clock, Play, Heart, MoreHorizontal } from 'lucide-react';
import { PlaylistCard } from './PlaylistCard';
import { AlbumCard } from './AlbumCard';
import { TrackList } from './TrackList';
import { Song, Album, Playlist, Genre } from '../types/music';

interface MainContentProps {
  activeView: string;
  songs: Song[];
  albums: Album[];
  playlists: Playlist[];
  genres: Genre[];
  searchResults: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song, queue: Song[]) => void;
  onTogglePlayPause: () => void;
  onToggleLike: (song: Song) => void;
  onPlayPlaylist: (playlist: Playlist) => void;
  onPlayAlbum: (album: Album) => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  activeView,
  songs,
  albums,
  playlists,
  genres,
  searchResults,
  currentSong,
  isPlaying,
  onPlaySong,
  onTogglePlayPause,
  onToggleLike,
  onPlayPlaylist,
  onPlayAlbum
}) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const renderHomeView = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl" />
        <div className="relative bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl p-8 border border-purple-500/20">
          <h1 className="text-4xl font-bold text-white mb-2">{getGreeting()}</h1>
          <p className="text-gray-300 text-lg">Ready to discover your next favorite song?</p>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {playlists.slice(0, 6).map(playlist => (
          <div
            key={playlist.id}
            className="flex items-center bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-200 cursor-pointer group"
            onClick={() => onPlayPlaylist(playlist)}
          >
            <img
              src={playlist.coverUrl}
              alt={playlist.name}
              className="w-16 h-16 rounded-l-lg object-cover"
            />
            <div className="flex-1 px-4 py-3">
              <h3 className="text-white font-medium truncate">{playlist.name}</h3>
            </div>
            <div className="pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <Play className="w-5 h-5 text-white ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recently Played */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {albums.slice(0, 6).map(album => (
            <AlbumCard
              key={album.id}
              album={album}
              onPlay={onPlayAlbum}
            />
          ))}
        </div>
      </div>

      {/* Made For You */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Made For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {playlists.slice(0, 6).map(playlist => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onPlay={onPlayPlaylist}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderSearchView = () => (
    <div className="space-y-8">
      {searchResults.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
          <TrackList
            songs={searchResults}
            currentSong={currentSong}
            isPlaying={isPlaying}
            onPlaySong={onPlaySong}
            onTogglePlayPause={onTogglePlayPause}
            onToggleLike={onToggleLike}
          />
        </div>
      ) : (
        <>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Browse All</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {genres.map(genre => (
                <div
                  key={genre.id}
                  className={`relative bg-gradient-to-br ${genre.color} rounded-lg p-4 aspect-square cursor-pointer hover:scale-105 transition-transform duration-200 overflow-hidden`}
                >
                  <h3 className="text-white font-bold text-lg mb-2">{genre.name}</h3>
                  <img
                    src={genre.coverUrl}
                    alt={genre.name}
                    className="absolute bottom-0 right-0 w-20 h-20 object-cover rounded-lg transform rotate-12 translate-x-2 translate-y-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );

  const renderLibraryView = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Your Library</h2>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
            Recently Added
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {playlists.map(playlist => (
          <PlaylistCard
            key={playlist.id}
            playlist={playlist}
            onPlay={onPlayPlaylist}
          />
        ))}
      </div>
    </div>
  );

  const renderLikedView = () => (
    <div className="space-y-8">
      <div className="flex items-center space-x-6">
        <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Heart className="w-16 h-16 text-white fill-current" />
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium">PLAYLIST</p>
          <h1 className="text-white text-6xl font-bold mb-4">Liked Songs</h1>
          <p className="text-gray-300">Your favorite tracks</p>
          <p className="text-gray-400 text-sm mt-2">
            {songs.filter(song => song.liked).length} songs
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors hover:scale-105">
          <Play className="w-8 h-8 text-white ml-1" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart className="w-8 h-8" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-8 h-8" />
        </button>
      </div>

      <TrackList
        songs={songs.filter(song => song.liked)}
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlaySong={onPlaySong}
        onTogglePlayPause={onTogglePlayPause}
        onToggleLike={onToggleLike}
      />
    </div>
  );

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return renderHomeView();
      case 'search':
        return renderSearchView();
      case 'library':
        return renderLibraryView();
      case 'liked':
        return renderLikedView();
      default:
        return renderHomeView();
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-auto">
      <div className="p-8">
        {renderView()}
      </div>
    </div>
  );
};