import { Heart, Play, Clock } from 'lucide-react';
import { TrackCard } from '@/components/cards/TrackCard';
import { demoTracks } from '@/data/demoData';
import { useAudio } from '@/contexts/AudioContext';

const LikedSongs = () => {
  const { playPlaylist } = useAudio();

  // In a real app, this would come from user data
  const likedTracks = demoTracks.slice(0, 4);

  const totalDuration = likedTracks.reduce((acc, track) => acc + track.duration, 0);
  const minutes = Math.floor(totalDuration / 60);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-background" />
        
        <div className="relative px-6 md:px-8 pt-12 pb-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            {/* Cover */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-2xl flex-shrink-0 gradient-primary flex items-center justify-center">
              <Heart className="w-24 h-24 text-primary-foreground" />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-muted-foreground mb-2">Playlist</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Liked Songs
              </h1>
              <p className="text-muted-foreground mb-4">
                Your favorite tracks, all in one place
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <span>{likedTracks.length} songs</span>
                <span>•</span>
                <Clock className="w-4 h-4" />
                <span>{minutes} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 md:px-8 py-6">
        <button
          onClick={() => playPlaylist(likedTracks)}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-xl hover:scale-105 transition-transform glow-primary"
        >
          <Play className="w-6 h-6 text-primary-foreground ml-1" />
        </button>
      </div>

      {/* Track List */}
      <div className="px-6 md:px-8 pb-8">
        {likedTracks.length > 0 ? (
          <div className="bg-card rounded-xl p-4">
            {likedTracks.map((track) => (
              <TrackCard key={track.id} track={track} variant="list" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No liked songs yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Start liking songs to build your collection
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
            >
              Discover Music
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedSongs;
