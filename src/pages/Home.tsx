import { TrackCard } from '@/components/cards/TrackCard';
import { PlaylistCard } from '@/components/cards/PlaylistCard';
import { PodcastCard } from '@/components/cards/PodcastCard';
import { demoTracks, demoPodcasts, demoPlaylists } from '@/data/demoData';
import { useAudio } from '@/contexts/AudioContext';
import { Play, TrendingUp, Clock, Sparkles } from 'lucide-react';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

const Home = () => {
  const { playPlaylist } = useAudio();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-12 md:px-8 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2 animate-slide-up">
            {getGreeting()}
          </h1>
          <p className="text-muted-foreground text-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Ready to discover your next favorite track?
          </p>
        </div>
      </section>

      {/* Quick Play Section */}
      <section className="px-6 md:px-8 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {demoTracks.slice(0, 4).map((track) => (
            <TrackCard key={track.id} track={track} variant="compact" />
          ))}
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="px-6 md:px-8 mb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Featured Playlists</h2>
          </div>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            See all
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {demoPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              id={playlist.id}
              name={playlist.name}
              description={playlist.description}
              coverUrl={playlist.coverUrl}
              tracks={playlist.tracks}
            />
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="px-6 md:px-8 mb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Trending Now</h2>
          </div>
          <button
            onClick={() => playPlaylist(demoTracks)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform"
          >
            <Play className="w-4 h-4" />
            Play All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {demoTracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      {/* Podcasts */}
      <section className="px-6 md:px-8 mb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Popular Podcasts</h2>
          </div>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            See all
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {demoPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="px-6 md:px-8 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold text-foreground">Recently Played</h2>
        </div>
        <div className="bg-card rounded-xl p-4">
          {demoTracks.slice(0, 5).map((track) => (
            <TrackCard key={track.id} track={track} variant="list" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
