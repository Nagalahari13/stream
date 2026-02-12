import { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { TrackCard } from '@/components/cards/TrackCard';
import { PodcastCard } from '@/components/cards/PodcastCard';
import { demoTracks, demoPodcasts } from '@/data/demoData';
import { Input } from '@/components/ui/input';

const genres = [
  { name: 'Pop', color: 'from-pink-500 to-rose-500' },
  { name: 'Hip-Hop', color: 'from-orange-500 to-amber-500' },
  { name: 'Rock', color: 'from-red-500 to-red-700' },
  { name: 'Electronic', color: 'from-cyan-500 to-blue-500' },
  { name: 'Jazz', color: 'from-amber-500 to-yellow-500' },
  { name: 'Classical', color: 'from-purple-500 to-indigo-500' },
  { name: 'R&B', color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Country', color: 'from-green-500 to-emerald-500' },
];

const Search = () => {
  const [query, setQuery] = useState('');

  const allContent = [...demoTracks, ...demoPodcasts];
  
  const filteredContent = query
    ? allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.artist.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredTracks = filteredContent.filter((item) => !item.isPodcast);
  const filteredPodcasts = filteredContent.filter((item) => item.isPodcast);

  return (
    <div className="min-h-screen px-6 md:px-8 py-8">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Search</h1>
        
        <div className="relative max-w-xl">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="What do you want to listen to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-10 py-6 bg-secondary border-none text-lg rounded-full"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      
      {query ? (
        <div className="space-y-8">
          {filteredTracks.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Songs</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {filteredTracks.map((track) => (
                  <TrackCard key={track.id} track={track} />
                ))}
              </div>
            </section>
          )}

          {filteredPodcasts.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Podcasts</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPodcasts.map((podcast) => (
                  <PodcastCard key={podcast.id} podcast={podcast} />
                ))}
              </div>
            </section>
          )}

          {filteredContent.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No results found for "{query}"
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Try searching for something else
              </p>
            </div>
          )}
        </div>
      ) : (
        
        <section>
          <h2 className="text-xl font-bold text-foreground mb-6">Browse All</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {genres.map((genre) => (
              <div
                key={genre.name}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer hover-scale bg-gradient-to-br ${genre.color}`}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">{genre.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;
