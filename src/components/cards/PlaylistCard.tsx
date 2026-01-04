import { Play } from 'lucide-react';
import { Track, useAudio } from '@/contexts/AudioContext';
import { Link } from 'react-router-dom';

interface PlaylistCardProps {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  tracks: Track[];
}

export const PlaylistCard = ({ id, name, description, coverUrl, tracks }: PlaylistCardProps) => {
  const { playPlaylist } = useAudio();

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playPlaylist(tracks);
  };

  return (
    <Link
      to={`/playlist/${id}`}
      className="group relative bg-card rounded-xl p-4 cursor-pointer hover-scale hover:bg-secondary transition-all block"
    >
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4 shadow-lg">
        <img
          src={coverUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handlePlay}
          className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105"
        >
          <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
        </button>
      </div>

      <h4 className="font-semibold text-foreground truncate mb-1">{name}</h4>
      <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
    </Link>
  );
};
