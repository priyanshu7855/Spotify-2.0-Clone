import React from 'react';
import { Home, Search, Library, Plus, Heart, Music, Users, Radio } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const mainMenuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Library },
  ];

  const libraryItems = [
    { id: 'create-playlist', label: 'Create Playlist', icon: Plus },
    { id: 'liked', label: 'Liked Songs', icon: Heart },
    { id: 'albums', label: 'Albums', icon: Music },
    { id: 'artists', label: 'Artists', icon: Users },
    { id: 'radio', label: 'Radio', icon: Radio },
  ];

  const recentPlaylists = [
    'Today\'s Top Hits',
    'Chill Vibes',
    'Workout Motivation',
    'My Favorites',
    'Road Trip Songs'
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Spotify 2.0</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-6 space-y-8">
        <div className="space-y-2">
          {mainMenuItems.map(item => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 border border-green-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {libraryItems.map(item => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 border border-green-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-400 px-4 mb-3">Recently Played</h3>
          {recentPlaylists.map((playlist, index) => (
            <button
              key={index}
              onClick={() => onViewChange('playlist')}
              className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              <span className="text-sm">{playlist}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};