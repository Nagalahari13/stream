import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { AudioPlayer } from '@/components/player/AudioPlayer';
import { MobileNav } from './MobileNav';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar - Desktop */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-32 md:pb-28">
        {children}
      </main>

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Audio Player */}
      <AudioPlayer />
    </div>
  );
};
