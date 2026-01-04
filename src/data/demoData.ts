import { Track } from '@/contexts/AudioContext';

// Demo tracks using free audio samples
export const demoTracks: Track[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Eclipse',
    album: 'Nocturnal',
    duration: 245,
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: '2',
    title: 'Electric Sunset',
    artist: 'Neon Pulse',
    album: 'Synthwave Vibes',
    duration: 198,
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: '3',
    title: 'Ocean Waves',
    artist: 'Coastal Sounds',
    album: 'Relaxation',
    duration: 312,
    coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: '4',
    title: 'Urban Jungle',
    artist: 'City Beats',
    album: 'Metropolitan',
    duration: 267,
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: '5',
    title: 'Mountain High',
    artist: 'Alpine Echo',
    album: 'Nature Sounds',
    duration: 289,
    coverUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    id: '6',
    title: 'Starlight Serenade',
    artist: 'Celestial Harmony',
    album: 'Cosmic Journey',
    duration: 334,
    coverUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
];

export const demoPodcasts: Track[] = [
  {
    id: 'p1',
    title: 'Tech Talk: Future of AI',
    artist: 'Digital Minds Podcast',
    duration: 2580,
    coverUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    isPodcast: true,
  },
  {
    id: 'p2',
    title: 'Morning Motivation',
    artist: 'Rise & Shine Show',
    duration: 1845,
    coverUrl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    isPodcast: true,
  },
  {
    id: 'p3',
    title: 'True Crime Stories',
    artist: 'Mystery Files',
    duration: 3200,
    coverUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    isPodcast: true,
  },
  {
    id: 'p4',
    title: 'Startup Founders',
    artist: 'Entrepreneur Weekly',
    duration: 2890,
    coverUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    isPodcast: true,
  },
];

export const demoPlaylists = [
  {
    id: 'pl1',
    name: 'Chill Vibes',
    description: 'Relax and unwind with these smooth tunes',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
    tracks: demoTracks.slice(0, 3),
  },
  {
    id: 'pl2',
    name: 'Workout Energy',
    description: 'High energy beats to power your workout',
    coverUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
    tracks: demoTracks.slice(2, 5),
  },
  {
    id: 'pl3',
    name: 'Focus Mode',
    description: 'Concentration-boosting instrumentals',
    coverUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop',
    tracks: demoTracks.slice(1, 4),
  },
  {
    id: 'pl4',
    name: 'Late Night Jazz',
    description: 'Smooth jazz for those late night sessions',
    coverUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=400&fit=crop',
    tracks: demoTracks.slice(3, 6),
  },
];
