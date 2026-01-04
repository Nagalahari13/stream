import { Mic2, TrendingUp, Clock } from 'lucide-react';
import { PodcastCard } from '@/components/cards/PodcastCard';
import { demoPodcasts } from '@/data/demoData';

const categories = [
  'All',
  'Technology',
  'Business',
  'Comedy',
  'True Crime',
  'News',
  'Health',
  'Education',
];

const Podcasts = () => {
  return (
    <div className="min-h-screen px-6 md:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Mic2 className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Podcasts</h1>
        </div>
        <p className="text-muted-foreground">
          Discover trending podcasts and catch up on your favorites
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              index === 0
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-muted'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Trending */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Trending</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {demoPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>

      {/* New Episodes */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">New Episodes</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {demoPodcasts.slice().reverse().map((podcast) => (
            <PodcastCard key={`new-${podcast.id}`} podcast={podcast} />
          ))}
        </div>
      </section>

      {/* For You */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Mic2 className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">For You</h2>
        </div>
        <div className="bg-card rounded-xl p-6">
          <div className="text-center py-8">
            <Mic2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Get personalized recommendations
            </h3>
            <p className="text-muted-foreground mb-4">
              Sign in to see podcasts tailored to your interests
            </p>
            <a
              href="/auth"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcasts;
