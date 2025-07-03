# 🎵 Spotify 2.0 Clone

A modern, feature-rich music streaming application built with React, TypeScript, and Tailwind CSS. This enhanced Spotify clone offers a beautiful user interface with advanced music management capabilities and smooth user experience.

![Spotify 2.0 Clone](https://github.com/priyanshu7855/Spotify-2.0-Clone/blob/main/Screenshot.png?raw=true)

## ✨ Features

### 🎧 Core Music Features
- **Advanced Music Player** - Full playback controls with play, pause, skip, and repeat functionality
- **Dynamic Search** - Real-time search across songs, artists, and albums
- **Playlist Management** - Create, view, and manage custom playlists
- **Album Collections** - Browse and play complete albums
- **Genre Discovery** - Explore music by different genres
- **Like/Favorite System** - Save your favorite tracks

### 🎨 User Experience
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Theme** - Modern dark interface with vibrant accent colors
- **Smooth Animations** - Micro-interactions and hover effects
- **Glassmorphism UI** - Modern glass-like effects and gradients
- **Progress Tracking** - Visual progress bars for song playback
- **Volume Control** - Adjustable audio volume with visual feedback

### 🚀 Enhanced Features
- **Queue Management** - Add songs to queue and manage playback order
- **Shuffle & Repeat** - Multiple playback modes (none, one, all)
- **Recently Played** - Track and display recently played music
- **Quick Access** - Fast access to favorite playlists and albums
- **Search Results** - Comprehensive search with filtered results

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks (useState, useCallback)
- **Code Quality**: ESLint with TypeScript support

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/priyanshu7855/Spotify-2.0-Clone
   cd spotify-2.0-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with search
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Player.tsx      # Music player controls
│   ├── MainContent.tsx # Main content area
│   ├── PlaylistCard.tsx # Playlist display cards
│   ├── AlbumCard.tsx   # Album display cards
│   └── TrackList.tsx   # Song list component
├── hooks/              # Custom React hooks
│   └── useMusic.tsx    # Music state management
├── types/              # TypeScript type definitions
│   └── music.ts        # Music-related types
├── data/               # Mock data and constants
│   └── mockData.ts     # Sample music data
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Key Components

### Music Player (`Player.tsx`)
- Full-featured audio controls
- Progress bar with seek functionality
- Volume control with visual feedback
- Repeat and shuffle modes
- Like/unlike functionality

### Search System (`Header.tsx`)
- Real-time search functionality
- Responsive search input
- Navigation controls
- User profile access

### Content Management (`MainContent.tsx`)
- Dynamic view rendering (Home, Search, Library, Liked Songs)
- Grid layouts for albums and playlists
- Track listing with interactive controls
- Genre-based browsing

### Navigation (`Sidebar.tsx`)
- Main navigation menu
- Library access
- Recently played playlists
- Quick action buttons

## 🎨 Design Features

### Color Palette
- **Primary**: Green (#1DB954) - Spotify's signature color
- **Secondary**: Purple (#8B5CF6) - Modern accent
- **Accent**: Orange (#F59E0B) - Vibrant highlights
- **Background**: Dark gradients (Gray 900 to Black)

### Visual Elements
- **Glassmorphism**: Translucent cards with backdrop blur
- **Gradients**: Smooth color transitions throughout the UI
- **Hover Effects**: Interactive feedback on all clickable elements
- **Micro-animations**: Subtle transitions for enhanced UX
- **Responsive Grid**: Adaptive layouts for different screen sizes

## 🔧 Customization

### Adding New Songs
Update the `mockData.ts` file to add new songs, albums, or playlists:

```typescript
export const mockSongs: Song[] = [
  {
    id: 'unique-id',
    title: 'Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    duration: 180, // in seconds
    coverUrl: 'https://example.com/cover.jpg',
    audioUrl: 'https://example.com/audio.mp3',
    genre: 'Pop',
    liked: false
  }
];
```

### Styling Modifications
The app uses Tailwind CSS for styling. Modify the classes in components or extend the theme in `tailwind.config.js`.

## 🌟 Future Enhancements

- [ ] **Audio Integration** - Connect with real audio files and streaming
- [ ] **User Authentication** - Login and user profile management
- [ ] **Backend Integration** - Connect with music streaming APIs
- [ ] **Offline Mode** - Download and cache music for offline listening
- [ ] **Social Features** - Share playlists and follow friends
- [ ] **Advanced Search** - Filters by genre, year, mood, etc.
- [ ] **Lyrics Display** - Show synchronized lyrics during playback
- [ ] **Equalizer** - Audio customization controls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- **Spotify** - Inspiration for the design and functionality
- **Pexels** - High-quality stock images for album covers
- **Lucide** - Beautiful icon library
- **Tailwind CSS** - Utility-first CSS framework
- **React Team** - Amazing frontend framework

## 📞 Contact

Priyanshu  - priyanshukh54@gmail.com

Project Link: [https://github.com/priyanshu7855/Spotify-2.0-Clone](https://github.com/priyanshu7855/Spotify-2.0-Clone)

---

⭐ **Star this repository if you found it helpful!**