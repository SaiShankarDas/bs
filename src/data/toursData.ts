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
    img: '/images/Tours/Morning/Rayta hills .jpg' 
  },
  { 
    title: 'Secret Waterfall', 
    caption: 'Hidden oasis surrounded by lush greenery.', 
    img: '/images/Tours/Morning/Secret waterfall.jpg' 
  },
  { 
    title: 'Badi Lake', 
    caption: 'Calm waters reflecting the Aravallis.', 
    img: '/images/Tours/Morning/Badi lake .jpg' 
  },
  { 
    title: 'Bahubali Hills', 
    caption: 'Udaipur’s most Instagrammed hilltop view.', 
    img: '/images/Tours/Morning/Bahubali hills.jpg' 
  },
  { 
    title: 'Fateh Sagar', 
    caption: 'Classic lakeside beauty.', 
    img: '/images/Tours/Morning/Fatehsagar.JPG' 
  },
],
  evening: [
  { 
    title: 'Karni Mata Temple', 
    caption: 'Ropeway view and divine sunset.', 
    img: '/images/Tours/Evening/karni mata.jpg' 
  },
  { 
    title: 'City Wall', 
    caption: 'Panoramic skyline of old Udaipur.', 
    img: '/images/Tours/Evening/ city wall .jpg' 
  },
  { 
    title: '360° Viewpoint', 
    caption: 'Breathtaking aerial perspective.', 
    img: '/images/Tours/Evening/360 degree view (Large).jpg' 
  },
  { 
    title: 'Rajasthan Heritage Show', 
    caption: 'Vibrant folk dances and cultural performances.', 
    img: '/images/Tours/Evening/rajasthan heritage.jpg' 
  },
],
  day: [
  { 
    title: 'City Palace', 
    caption: 'Grandeur and offbeat heritage.', 
    img: '/images/Tours/Day/city palace.jpeg' 
  },
  { 
    title: 'Jagdish Temple', 
    caption: '1651 marvel with divine charm.', 
    img: '/images/Tours/Day/Jagdish temple.jpg' 
  },
  { 
    title: 'Lal Ghat', 
    caption: 'Calm waterfront for peace and reflection.', 
    img: '/images/Tours/Day/Lal Ghat.png' 
  },
  { 
    title: 'Gangaur Ghat', 
    caption: 'Iconic lakeside photo spot.', 
    img: '/images/Tours/Day/Gangaur ghat  .jpg' 
  },
  { 
    title: 'Bagore Ki Haveli', 
    caption: '18th-century palace turned museum.', 
    img: '/images/Tours/Day/Bagore ki haveli.jpg' 
  },
  { 
    title: 'Ambrai Ghat', 
    caption: 'Peaceful sunset view of palaces.', 
    img: '/images/Tours/Day/Ambrai ghat.jpg' 
  },
],
};
