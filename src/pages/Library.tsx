import { Music, ListMusic, Mic2, Clock, Plus } from 'lucide-react';
import { TrackCard } from '@/components/cards/TrackCard';
import { PlaylistCard } from '@/components/cards/PlaylistCard';
import { demoTracks, demoPlaylists } from '@/data/demoData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Library = () => {
  return (
    <div className="min-h-screen px-6 md:px-8 py-8">
      
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Your Library</h1>
        <button className="p-2 hover:bg-secondary rounded-full transition-colors">
          <Plus className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>

      
      <Tabs defaultValue="playlists" className="w-full">
        <TabsList className="bg-secondary mb-8">
          <TabsTrigger value="playlists" className="gap-2">
            <ListMusic className="w-4 h-4" />
            Playlists
          </TabsTrigger>
          <TabsTrigger value="songs" className="gap-2">
            <Music className="w-4 h-4" />
            Songs
          </TabsTrigger>
          <TabsTrigger value="podcasts" className="gap-2">
            <Mic2 className="w-4 h-4" />
            Podcasts
          </TabsTrigger>
        </TabsList>

        
        <TabsContent value="playlists">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            
            <div className="bg-card rounded-xl p-4 cursor-pointer hover:bg-secondary transition-all group">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-muted to-muted-foreground/20 mb-4 flex items-center justify-center">
                <Plus className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h4 className="font-semibold text-foreground truncate mb-1">Create Playlist</h4>
              <p className="text-sm text-muted-foreground">Start a new collection</p>
            </div>

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
        </TabsContent>

        
        <TabsContent value="songs">
          <div className="bg-card rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Recently added</span>
            </div>
            {demoTracks.map((track) => (
              <TrackCard key={track.id} track={track} variant="list" />
            ))}
          </div>
        </TabsContent>

        
        <TabsContent value="podcasts">
          <div className="text-center py-16">
            <Mic2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No podcasts yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow podcasts you love and they'll appear here
            </p>
            <a
              href="/podcasts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
            >
              Browse Podcasts
            </a>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Library;
