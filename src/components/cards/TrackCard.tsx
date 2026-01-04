import { Play, Pause } from 'lucide-react';
import { Track, useAudio } from '@/contexts/AudioContext';
import { cn } from '@/lib/utils';

interface TrackCardProps {
  track: Track;
  variant?: 'default' | 'compact' | 'list';
  showAlbum?: boolean;
}

export const TrackCard = ({ track, variant = 'default', showAlbum = true }: TrackCardProps) => {
  const { currentTrack, isPlaying, play, pause } = useAudio();
  const isCurrentTrack = currentTrack?.id === track.id;

  const handleClick = () => {
    if (isCurrentTrack) {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    } else {
      play(track);
    }
  };

  if (variant === 'list') {
    return (
      <div
        onClick={handleClick}
        className={cn(
          'group flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all',
          'hover:bg-secondary',
          isCurrentTrack && 'bg-secondary'
        )}
      >
        <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
          <img
            src={track.coverUrl}
            alt={track.title}
            className="w-full h-full object-cover"
          />
          <div className={cn(
            'absolute inset-0 bg-background/60 flex items-center justify-center',
            'opacity-0 group-hover:opacity-100 transition-opacity',
            isCurrentTrack && isPlaying && 'opacity-100'
          )}>
            {isCurrentTrack && isPlaying ? (
              <Pause className="w-5 h-5 text-foreground" />
            ) : (
              <Play className="w-5 h-5 text-foreground ml-0.5" />
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className={cn(
            'text-sm font-medium truncate',
            isCurrentTrack ? 'text-primary' : 'text-foreground'
          )}>
            {track.title}
          </h4>
          <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
        </div>

        {showAlbum && track.album && (
          <span className="hidden md:block text-sm text-muted-foreground truncate max-w-32">
            {track.album}
          </span>
        )}

        <span className="text-sm text-muted-foreground">
          {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        onClick={handleClick}
        className={cn(
          'group flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all',
          'hover:bg-secondary bg-card'
        )}
      >
        <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
          <img
            src={track.coverUrl}
            alt={track.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={cn(
            'text-sm font-medium truncate',
            isCurrentTrack ? 'text-primary' : 'text-foreground'
          )}>
            {track.title}
          </h4>
          <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
        </div>
        <button className={cn(
          'w-8 h-8 rounded-full bg-primary flex items-center justify-center',
          'opacity-0 group-hover:opacity-100 transition-opacity shadow-lg',
          isCurrentTrack && isPlaying && 'opacity-100'
        )}>
          {isCurrentTrack && isPlaying ? (
            <Pause className="w-4 h-4 text-primary-foreground" />
          ) : (
            <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className="group relative bg-card rounded-xl p-4 cursor-pointer hover-scale hover:bg-secondary transition-all"
    >
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4 shadow-lg">
        <img
          src={track.coverUrl}
          alt={track.title}
          className="w-full h-full object-cover"
        />
        <button className={cn(
          'absolute bottom-2 right-2 w-12 h-12 rounded-full bg-primary',
          'flex items-center justify-center shadow-xl',
          'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0',
          'transition-all duration-300',
          isCurrentTrack && isPlaying && 'opacity-100 translate-y-0'
        )}>
          {isCurrentTrack && isPlaying ? (
            <Pause className="w-5 h-5 text-primary-foreground" />
          ) : (
            <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
          )}
        </button>
      </div>

      <h4 className={cn(
        'font-semibold truncate mb-1',
        isCurrentTrack ? 'text-primary' : 'text-foreground'
      )}>
        {track.title}
      </h4>
      <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
    </div>
  );
};
