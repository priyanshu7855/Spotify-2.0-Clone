import React, { useState } from 'react';
import { Search, Bell, User, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-b border-gray-700/50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-96' : 'w-80'}`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search songs, artists, albums..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors">
            <Bell className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200">
            <User className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};