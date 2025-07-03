import { Song, Album, Playlist, Genre } from '../types/music';

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: 200,
    coverUrl: 'https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    liked: true
  },
  {
    id: '2',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: 174,
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    liked: false
  },
  {
    id: '3',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: 178,
    coverUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    liked: true
  },
  {
    id: '4',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: 203,
    coverUrl: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Pop',
    liked: false
  },
  {
    id: '5',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'Stay',
    duration: 141,
    coverUrl: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Hip-Hop',
    liked: true
  },
  {
    id: '6',
    title: 'Industry Baby',
    artist: 'Lil Nas X, Jack Harlow',
    album: 'MONTERO',
    duration: 212,
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '',
    genre: 'Hip-Hop',
    liked: false
  }
];

export const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'After Hours',
    artist: 'The Weeknd',
    coverUrl: 'https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=300',
    releaseYear: 2020,
    genre: 'Pop',
    songs: [mockSongs[0]]
  },
  {
    id: '2',
    title: 'Fine Line',
    artist: 'Harry Styles',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    releaseYear: 2019,
    genre: 'Pop',
    songs: [mockSongs[1]]
  },
  {
    id: '3',
    title: 'SOUR',
    artist: 'Olivia Rodrigo',
    coverUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
    releaseYear: 2021,
    genre: 'Pop',
    songs: [mockSongs[2]]
  },
  {
    id: '4',
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    coverUrl: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=300',
    releaseYear: 2020,
    genre: 'Pop',
    songs: [mockSongs[3]]
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'The biggest songs right now',
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    songs: [mockSongs[0], mockSongs[1], mockSongs[2]],
    isPublic: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Relax and unwind with these chill tracks',
    coverUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
    songs: [mockSongs[1], mockSongs[3]],
    isPublic: true,
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    name: 'Workout Motivation',
    description: 'Get pumped with these high-energy tracks',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    songs: [mockSongs[4], mockSongs[5]],
    isPublic: true,
    createdAt: '2024-01-05'
  },
  {
    id: '4',
    name: 'My Favorites',
    description: 'Your personal collection of liked songs',
    coverUrl: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=300',
    songs: mockSongs.filter(song => song.liked),
    isPublic: false,
    createdAt: '2024-01-01'
  }
];

export const mockGenres: Genre[] = [
  {
    id: '1',
    name: 'Pop',
    color: 'from-pink-500 to-purple-600',
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Hip-Hop',
    color: 'from-orange-500 to-red-600',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Rock',
    color: 'from-gray-500 to-gray-800',
    coverUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Electronic',
    color: 'from-blue-500 to-cyan-600',
    coverUrl: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '5',
    name: 'Jazz',
    color: 'from-amber-500 to-yellow-600',
    coverUrl: 'https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '6',
    name: 'Classical',
    color: 'from-indigo-500 to-purple-600',
    coverUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];