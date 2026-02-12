import { useAudio } from '@/contexts/AudioContext';
import { Slider } from '@/components/ui/slider';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Shuffle,
  Repeat,
  Repeat1,
  Heart,
  ListMusic,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const formatTime = (seconds: number) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const AudioPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    progress,
    duration,
    volume,
    isShuffle,
    repeatMode,
    toggle,
    seek,
    setVolume,
    nextTrack,
    previousTrack,
    toggleShuffle,
    toggleRepeat,
  } = useAudio();

  if (!currentTrack) {
    return (
      <footer className="fixed bottom-0 left-0 right-0 h-20 bg-player border-t border-border flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Select a track to start playing</p>
      </footer>
    );
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-player border-t border-border px-4 z-50">
      <div className="h-full max-w-screen-2xl mx-auto grid grid-cols-3 items-center gap-4">
        
        <div className="flex items-center gap-4">
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className="w-14 h-14 rounded-md object-cover shadow-lg"
          />
          <div className="hidden sm:block min-w-0">
            <h4 className="text-sm font-medium text-foreground truncate">
              {currentTrack.title}
            </h4>
            <p className="text-xs text-muted-foreground truncate">
              {currentTrack.artist}
            </p>
          </div>
          <button className="hidden sm:block p-2 hover:text-primary transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleShuffle}
              className={cn(
                'p-2 transition-colors',
                isShuffle ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Shuffle className="w-4 h-4" />
            </button>

            <button
              onClick={previousTrack}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={toggle}
              className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-background" />
              ) : (
                <Play className="w-5 h-5 text-background ml-0.5" />
              )}
            </button>

            <button
              onClick={nextTrack}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            <button
              onClick={toggleRepeat}
              className={cn(
                'p-2 transition-colors',
                repeatMode !== 'off' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {repeatMode === 'one' ? (
                <Repeat1 className="w-4 h-4" />
              ) : (
                <Repeat className="w-4 h-4" />
              )}
            </button>
          </div>

          
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-muted-foreground w-10 text-right">
              {formatTime(progress)}
            </span>
            <Slider
              value={[progress]}
              max={duration || 100}
              step={1}
              onValueChange={([value]) => seek(value)}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        
        <div className="flex items-center justify-end gap-4">
          <button className="hidden md:block p-2 text-muted-foreground hover:text-foreground transition-colors">
            <ListMusic className="w-4 h-4" />
          </button>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setVolume(volume === 0 ? 0.7 : 0)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              onValueChange={([value]) => setVolume(value / 100)}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
