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
      
      <Sidebar />
      
      <AudioPlayer />
    </div>
  );
};
