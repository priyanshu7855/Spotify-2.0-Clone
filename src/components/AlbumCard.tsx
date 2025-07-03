import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { Album } from '../types/music';

interface AlbumCardProps {
  album: Album;
  onPlay: (album: Album) => void;
  onLike?: (album: Album) => void;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album, onPlay, onLike }) => {
  return (
    <div className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-[1.02] border border-gray-700/30">
      <div className="relative">
        <img
          src={album.coverUrl}
          alt={album.title}
          className="w-full aspect-square object-cover rounded-lg shadow-lg"
        />
        
        {/* Play Button Overlay */}
        <button
          onClick={() => onPlay(album)}
          className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-400 hover:scale-110"
        >
          <Play className="w-6 h-6 text-white ml-1" />
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-white font-semibold text-lg mb-1 truncate">{album.title}</h3>
        <p className="text-gray-400 text-sm mb-2 truncate">{album.artist}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">{album.releaseYear} • {album.genre}</span>
          
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {onLike && (
              <button
                onClick={() => onLike(album)}
                className="p-1 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Heart className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            )}
            <button className="p-1 rounded-full hover:bg-gray-700 transition-colors">
              <MoreHorizontal className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};