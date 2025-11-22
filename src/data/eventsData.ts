import { Mic, Music, Gamepad2, Guitar, Theater, Sunset, Film, Tv } from 'lucide-react';

export const eventsData = [
  {
    title: 'Open Mic',
    description: 'A night for poets, singers, and storytellers.',
    image: 'https://iili.io/KZsdp9t.jpg?q=80&w=800',
    icon: Mic,
  },
  {
    title: 'Live Music',
    description: 'Experience local artists performing live every weekend.',
    image: 'https://iili.io/KZsCWhP.jpg?q=80&w=800',
    icon: Music,
    imagePosition: 'object-center', // Adjust image focus to show face and guitar
  },
  {
    title: 'Gaming Night',
    description: 'Compete in console and board games with fellow gamers.',
    image: 'https://iili.io/KZigGbn.jpg?q=80&w=800',
    icon: Gamepad2,
  },
  {
    title: 'Jamming',
    description: 'Join spontaneous music jam sessions with fellow musicians.',
    image: 'https://iili.io/KZs53c7.jpg?q=80&w=800',
    icon: Guitar,
  },
  {
    title: 'Standup Comedy',
    description: 'Laugh out loud with new and seasoned comedians.',
    image: 'https://iili.io/KZienSe.jpg?q=80&w=800',
    icon: Theater,
  },
  {
    title: 'Sundowner',
    description: 'Groove to sunset beats with a stunning lake view.',
    image: 'https://iili.io/KZisdOB.jpg?q=80&w=800',
    icon: Sunset,
  },
  {
    title: 'Movie Night',
    description: 'Relax with classic films and popcorn in a cozy setting.',
    image: 'https://iili.io/f2SdLan.png?q=80&w=800&auto=format&fit=crop',
    icon: Film,
  },
  {
    title: 'Live Screening',
    description: 'Cheer for your favorite teams during live sports screenings.',
    image: 'https://iili.io/f28D7jt.jpg?q=80&w=800&auto=format&fit=crop',
    icon: Tv,
  },
];
