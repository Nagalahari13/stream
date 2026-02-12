import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, ListMusic, Mic2, Heart, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Library, label: 'Your Library', path: '/library' },
];

const libraryItems = [
  { icon: PlusCircle, label: 'Create Playlist', path: '/playlist/new' },
  { icon: Heart, label: 'Liked Songs', path: '/liked' },
  { icon: Mic2, label: 'Podcasts', path: '/podcasts' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-sidebar h-full p-4 gap-6">
      
      <Link to="/" className="flex items-center gap-3 px-2 py-4">
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
          <ListMusic className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">Melodify</span>
      </Link>

      
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200',
                'hover:bg-sidebar-accent',
                isActive
                  ? 'bg-sidebar-accent text-foreground font-semibold'
                  : 'text-sidebar-foreground'
              )}
            >
              <item.icon className={cn('w-5 h-5', isActive && 'text-primary')} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      
      <div className="h-px bg-sidebar-border" />

      
      <nav className="flex flex-col gap-1">
        {libraryItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200',
                'hover:bg-sidebar-accent',
                isActive
                  ? 'bg-sidebar-accent text-foreground font-semibold'
                  : 'text-sidebar-foreground'
              )}
            >
              <item.icon className={cn('w-5 h-5', isActive && 'text-primary')} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      
      <div className="h-px bg-sidebar-border" />

      
      <div className="flex-1 overflow-y-auto">
        <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Playlists
        </p>
        <div className="flex flex-col gap-1">
          {['Chill Vibes', 'Workout Energy', 'Focus Mode', 'Late Night Jazz'].map((playlist) => (
            <Link
              key={playlist}
              to={`/playlist/${playlist.toLowerCase().replace(' ', '-')}`}
              className="px-4 py-2 text-sm text-sidebar-foreground hover:text-foreground transition-colors truncate"
            >
              {playlist}
            </Link>
          ))}
        </div>
      </div>

      
      <div className="pt-4 border-t border-sidebar-border">
        <Link
          to="/auth"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium text-muted-foreground">?</span>
          </div>
          <span className="text-sm text-sidebar-foreground">Sign In</span>
        </Link>
      </div>
    </aside>
  );
};
