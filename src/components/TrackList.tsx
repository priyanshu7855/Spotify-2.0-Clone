import React from 'react';
import { Play, Pause, Heart, MoreHorizontal, Clock } from 'lucide-react';
import { Song } from '../types/music';

interface TrackListProps {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song, queue: Song[]) => void;
  onTogglePlayPause: () => void;
  onToggleLike: (song: Song) => void;
}

export const TrackList: React.FC<TrackListProps> = ({
  songs,
  currentSong,
  isPlaying,
  onPlaySong,
  onTogglePlayPause,
  onToggleLike
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isCurrentSong = (song: Song) => currentSong?.id === song.id;

  return (
    <div className="space-y-1">
      {/* Header */}
      <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-700/50">
        <div className="w-8">#</div>
        <div>Title</div>
        <div>Album</div>
        <div className="flex items-center justify-center">
          <Heart className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-center">
          <Clock className="w-4 h-4" />
        </div>
      </div>

      {/* Track List */}
      <div className="space-y-1">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={`group grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 ${
              isCurrentSong(song) ? 'bg-gray-800/50' : ''
            }`}
          >
            {/* Track Number / Play Button */}
            <div className="w-8 flex items-center justify-center">
              {isCurrentSong(song) && isPlaying ? (
                <button
                  onClick={onTogglePlayPause}
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  <Pause className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => isCurrentSong(song) ? onTogglePlayPause() : onPlaySong(song, songs)}
                  className="text-gray-400 hover:text-white transition-colors group-hover:opacity-100"
                >
                  <Play className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                  <span className="text-sm group-hover:hidden">{index + 1}</span>
                </button>
              )}
            </div>

            {/* Song Info */}
            <div className="flex items-center space-x-3 min-w-0">
              <img
                src={song.coverUrl}
                alt={song.title}
                className="w-10 h-10 rounded object-cover"
              />
              <div className="min-w-0 flex-1">
                <h4 className={`font-medium truncate ${
                  isCurrentSong(song) ? 'text-green-500' : 'text-white'
                }`}>
                  {song.title}
                </h4>
                <p className="text-gray-400 text-sm truncate">{song.artist}</p>
              </div>
            </div>

            {/* Album */}
            <div className="flex items-center">
              <span className="text-gray-400 text-sm truncate">{song.album}</span>
            </div>

            {/* Like Button */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => onToggleLike(song)}
                className={`p-1 rounded-full transition-all duration-200 ${
                  song.liked 
                    ? 'text-green-500 hover:text-green-400' 
                    : 'text-gray-400 hover:text-white opacity-0 group-hover:opacity-100'
                }`}
              >
                <Heart className={`w-4 h-4 ${song.liked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Duration / More Options */}
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-400 text-sm">{formatTime(song.duration)}</span>
              <button className="p-1 rounded-full text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};