import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, 
  Volume2, VolumeX, Heart, Maximize2, Minimize2
} from 'lucide-react';
import { Song, MusicState } from '../types/music';

interface PlayerProps {
  musicState: MusicState;
  onTogglePlayPause: () => void;
  onNextSong: () => void;
  onPreviousSong: () => void;
  onVolumeChange: (volume: number) => void;
  onSeek: (time: number) => void;
  onToggleRepeat: () => void;
  onToggleShuffle: () => void;
  onToggleLike: (song: Song) => void;
}

export const Player: React.FC<PlayerProps> = ({
  musicState,
  onTogglePlayPause,
  onNextSong,
  onPreviousSong,
  onVolumeChange,
  onSeek,
  onToggleRepeat,
  onToggleShuffle,
  onToggleLike
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentSong, isPlaying, currentTime, volume, repeatMode, shuffleMode } = musicState;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = currentSong ? (currentTime / currentSong.duration) * 100 : 0;

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50 backdrop-blur-md">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            <img
              src={currentSong.coverUrl}
              alt={currentSong.title}
              className="w-14 h-14 rounded-lg object-cover shadow-lg"
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-medium truncate">{currentSong.title}</h3>
              <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
            </div>
            <button
              onClick={() => onToggleLike(currentSong)}
              className={`p-2 rounded-full transition-all duration-200 ${
                currentSong.liked 
                  ? 'text-green-500 hover:text-green-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Heart className={`w-5 h-5 ${currentSong.liked ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
            <div className="flex items-center space-x-4">
              <button
                onClick={onToggleShuffle}
                className={`p-2 rounded-full transition-all duration-200 ${
                  shuffleMode 
                    ? 'text-green-500 hover:text-green-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Shuffle className="w-4 h-4" />
              </button>
              
              <button
                onClick={onPreviousSong}
                className="p-2 rounded-full text-gray-400 hover:text-white transition-all duration-200"
              >
                <SkipBack className="w-5 h-5" />
              </button>
              
              <button
                onClick={onTogglePlayPause}
                className="p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              <button
                onClick={onNextSong}
                className="p-2 rounded-full text-gray-400 hover:text-white transition-all duration-200"
              >
                <SkipForward className="w-5 h-5" />
              </button>
              
              <button
                onClick={onToggleRepeat}
                className={`p-2 rounded-full transition-all duration-200 ${
                  repeatMode !== 'none' 
                    ? 'text-green-500 hover:text-green-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Repeat className="w-4 h-4" />
                {repeatMode === 'one' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                )}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center space-x-2 w-full">
              <span className="text-xs text-gray-400 w-10">{formatTime(currentTime)}</span>
              <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 w-10">{formatTime(currentSong.duration)}</span>
            </div>
          </div>

          {/* Volume & Expand */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onVolumeChange(volume > 0 ? 0 : 0.7)}
                className="p-2 rounded-full text-gray-400 hover:text-white transition-all duration-200"
              >
                {volume > 0 ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <div className="w-24 h-1 bg-gray-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                  style={{ width: `${volume * 100}%` }}
                />
              </div>
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-full text-gray-400 hover:text-white transition-all duration-200"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};