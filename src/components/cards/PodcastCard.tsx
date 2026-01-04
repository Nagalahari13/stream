import { Play, Pause } from 'lucide-react';
import { Track, useAudio } from '@/contexts/AudioContext';
import { cn } from '@/lib/utils';

interface PodcastCardProps {
  podcast: Track;
}

const formatDuration = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins} min`;
};

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  const { currentTrack, isPlaying, play, pause } = useAudio();
  const isCurrentTrack = currentTrack?.id === podcast.id;

  const handleClick = () => {
    if (isCurrentTrack) {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    } else {
      play(podcast);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-card rounded-xl p-4 cursor-pointer hover-scale hover:bg-secondary transition-all"
    >
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4 shadow-lg">
        <img
          src={podcast.coverUrl}
          alt={podcast.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
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
        {podcast.title}
      </h4>
      <p className="text-sm text-muted-foreground truncate mb-2">{podcast.artist}</p>
      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
        {formatDuration(podcast.duration)}
      </span>
    </div>
  );
};
