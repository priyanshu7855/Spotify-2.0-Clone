import { useState, useCallback } from 'react';
import { Song, MusicState } from '../types/music';

export const useMusic = () => {
  const [musicState, setMusicState] = useState<MusicState>({
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    volume: 0.7,
    queue: [],
    currentIndex: 0,
    repeatMode: 'none',
    shuffleMode: false
  });

  const playSong = useCallback((song: Song, queue: Song[] = []) => {
    setMusicState(prev => ({
      ...prev,
      currentSong: song,
      isPlaying: true,
      queue: queue.length > 0 ? queue : [song],
      currentIndex: queue.length > 0 ? queue.findIndex(s => s.id === song.id) : 0
    }));
  }, []);

  const togglePlayPause = useCallback(() => {
    setMusicState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying
    }));
  }, []);

  const nextSong = useCallback(() => {
    setMusicState(prev => {
      if (prev.queue.length === 0) return prev;
      
      let nextIndex = prev.currentIndex + 1;
      if (nextIndex >= prev.queue.length) {
        nextIndex = prev.repeatMode === 'all' ? 0 : prev.currentIndex;
      }
      
      if (nextIndex !== prev.currentIndex) {
        return {
          ...prev,
          currentSong: prev.queue[nextIndex],
          currentIndex: nextIndex,
          currentTime: 0
        };
      }
      
      return prev;
    });
  }, []);

  const previousSong = useCallback(() => {
    setMusicState(prev => {
      if (prev.queue.length === 0) return prev;
      
      let prevIndex = prev.currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = prev.repeatMode === 'all' ? prev.queue.length - 1 : 0;
      }
      
      return {
        ...prev,
        currentSong: prev.queue[prevIndex],
        currentIndex: prevIndex,
        currentTime: 0
      };
    });
  }, []);

  const setVolume = useCallback((volume: number) => {
    setMusicState(prev => ({
      ...prev,
      volume: Math.max(0, Math.min(1, volume))
    }));
  }, []);

  const setCurrentTime = useCallback((time: number) => {
    setMusicState(prev => ({
      ...prev,
      currentTime: time
    }));
  }, []);

  const toggleRepeatMode = useCallback(() => {
    setMusicState(prev => ({
      ...prev,
      repeatMode: prev.repeatMode === 'none' ? 'all' : prev.repeatMode === 'all' ? 'one' : 'none'
    }));
  }, []);

  const toggleShuffle = useCallback(() => {
    setMusicState(prev => ({
      ...prev,
      shuffleMode: !prev.shuffleMode
    }));
  }, []);

  return {
    musicState,
    playSong,
    togglePlayPause,
    nextSong,
    previousSong,
    setVolume,
    setCurrentTime,
    toggleRepeatMode,
    toggleShuffle
  };
};