export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  audioUrl: string;
  genre: string;
  liked: boolean;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  releaseYear: number;
  genre: string;
  songs: Song[];
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songs: Song[];
  isPublic: boolean;
  createdAt: string;
}

export interface Genre {
  id: string;
  name: string;
  color: string;
  coverUrl: string;
}

export interface MusicState {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  queue: Song[];
  currentIndex: number;
  repeatMode: 'none' | 'one' | 'all';
  shuffleMode: boolean;
}