import { useParams } from 'react-router-dom';
import { Play, Clock, Heart, MoreHorizontal, Shuffle } from 'lucide-react';
import { TrackCard } from '@/components/cards/TrackCard';
import { demoPlaylists, demoTracks } from '@/data/demoData';
import { useAudio } from '@/contexts/AudioContext';

const PlaylistDetail = () => {
  const { id } = useParams();
  const { playPlaylist, toggleShuffle } = useAudio();

  // Find playlist or show all tracks
  const playlist = demoPlaylists.find((p) => p.id === id);
  const tracks = playlist?.tracks || demoTracks;
  const title = playlist?.name || 'All Songs';
  const description = playlist?.description || 'Your music collection';
  const coverUrl = playlist?.coverUrl || demoTracks[0]?.coverUrl;

  const totalDuration = tracks.reduce((acc, track) => acc + track.duration, 0);
  const hours = Math.floor(totalDuration / 3600);
  const minutes = Math.floor((totalDuration % 3600) / 60);

  const handlePlayAll = () => {
    playPlaylist(tracks);
  };

  const handleShufflePlay = () => {
    toggleShuffle();
    playPlaylist(tracks);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        
        <div className="relative px-6 md:px-8 pt-12 pb-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            {/* Cover */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
              <img
                src={coverUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-muted-foreground mb-2">Playlist</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                {title}
              </h1>
              <p className="text-muted-foreground mb-4">{description}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <span>{tracks.length} songs</span>
                <span>•</span>
                <Clock className="w-4 h-4" />
                <span>
                  {hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 md:px-8 py-6 flex items-center gap-4">
        <button
          onClick={handlePlayAll}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-xl hover:scale-105 transition-transform glow-primary"
        >
          <Play className="w-6 h-6 text-primary-foreground ml-1" />
        </button>

        <button
          onClick={handleShufflePlay}
          className="p-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Shuffle className="w-6 h-6" />
        </button>

        <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
          <Heart className="w-6 h-6" />
        </button>

        <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Track List */}
      <div className="px-6 md:px-8 pb-8">
        <div className="bg-card rounded-xl p-4">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-[1fr_1fr_auto] gap-4 px-3 py-2 text-sm text-muted-foreground border-b border-border mb-2">
            <span># Title</span>
            <span>Album</span>
            <span className="w-16 text-right">Duration</span>
          </div>

          {/* Tracks */}
          {tracks.map((track, index) => (
            <div key={track.id} className="group">
              <TrackCard track={track} variant="list" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetail;
