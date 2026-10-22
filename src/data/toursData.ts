export interface Tour {
  title: string;
  caption: string;
  img: string;
}

export const toursData: { [key: string]: Tour[] } = {
  morning: [
  { 
    title: 'Rayta Hills', 
    caption: 'Serene mountain curves and sunrise panoramas.', 
    img: '/images/Tours/Morning/Rayta hills .webp' 
  },
  { 
    title: 'Secret Waterfall', 
    caption: 'Hidden oasis surrounded by lush greenery.', 
    img: '/images/Tours/Morning/Secret waterfall.webp' 
  },
  { 
    title: 'Badi Lake', 
    caption: 'Calm waters reflecting the Aravallis.', 
    img: '/images/Tours/Morning/Badi lake .webp' 
  },
  { 
    title: 'Bahubali Hills', 
    caption: 'Udaipur’s most Instagrammed hilltop view.', 
    img: '/images/Tours/Morning/Bahubali hills.webp' 
  },
  { 
    title: 'Fateh Sagar', 
    caption: 'Classic lakeside beauty.', 
    img: '/images/Tours/Morning/Fatehsagar.webp' 
  },
],
  evening: [
  { 
    title: 'Karni Mata Temple', 
    caption: 'Ropeway view and divine sunset.', 
    img: '/images/Tours/Evening/karni mata.webp' 
  },
  { 
    title: 'City Wall', 
    caption: 'Panoramic skyline of old Udaipur.', 
    img: '/images/Tours/Evening/ city wall .webp' 
  },
  { 
    title: '360° Viewpoint', 
    caption: 'Breathtaking aerial perspective.', 
    img: '/images/Tours/Evening/360 degree view (Large).webp' 
  },
  { 
    title: 'Rajasthan Heritage Show', 
    caption: 'Vibrant folk dances and cultural performances.', 
    img: '/images/Tours/Evening/rajasthan heritage.webp' 
  },
],
  day: [
  { 
    title: 'City Palace', 
    caption: 'Grandeur and offbeat heritage.', 
    img: '/images/Tours/Day/city palace.webp' 
  },
  { 
    title: 'Jagdish Temple', 
    caption: '1651 marvel with divine charm.', 
    img: '/images/Tours/Day/Jagdish temple.webp' 
  },
  { 
    title: 'Lal Ghat', 
    caption: 'Calm waterfront for peace and reflection.', 
    img: '/images/Tours/Day/Lal Ghat.png' 
  },
  { 
    title: 'Gangaur Ghat', 
    caption: 'Iconic lakeside photo spot.', 
    img: '/images/Tours/Day/Gangaur ghat  .webp' 
  },
  { 
    title: 'Bagore Ki Haveli', 
    caption: '18th-century palace turned museum.', 
    img: '/images/Tours/Day/Bagore ki haveli.webp' 
  },
  { 
    title: 'Ambrai Ghat', 
    caption: 'Peaceful sunset view of palaces.', 
    img: '/images/Tours/Day/Ambrai ghat.webp' 
  },
],
};
