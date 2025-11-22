export interface Tour {
  title: string;
  caption: string;
  img: string;
}

export const toursData: { [key: string]: Tour[] } = {
  morning: [
    { title: 'Rayta Hills', caption: 'Serene mountain curves and sunrise panoramas.', img: 'https://iili.io/KZ4VW8B.jpg' },
    { title: 'Secret Waterfall', caption: 'Hidden oasis surrounded by lush greenery.', img: 'https://iili.io/KZ4kAas.jpg' },
    { title: 'Badi Lake', caption: 'Calm waters reflecting the Aravallis.', img: 'https://iili.io/KZ4svaV.jpg' },
    { title: 'Bahubali Hills', caption: 'Udaipur’s most Instagrammed hilltop view.', img: 'https://iili.io/KZPSyOu.jpg' },
    { title: 'Fateh Sagar', caption: 'Classic lakeside beauty.', img: 'https://iili.io/KZPLrRp.jpg' },
  ],
  evening: [
    { title: 'Karni Mata Temple', caption: 'Ropeway view and divine sunset.', img: 'https://iili.io/KtvfCwF.jpg' },
    { title: 'City Wall', caption: 'Panoramic skyline of old Udaipur.', img: 'https://iili.io/KZiTtJs.jpg' },
    { title: '360° Viewpoint', caption: 'Breathtaking aerial perspective.', img: 'https://iili.io/KZi1YF4.jpg' },
    { title: 'Rajasthan Heritage Show', caption: 'Vibrant folk dances and cultural performances.', img: 'https://iili.io/KtjNWxe.jpg' },
  ],
  day: [
    { title: 'City Palace', caption: 'Grandeur and offbeat heritage.', img: 'https://iili.io/KthkTpS.jpg' },
    { title: 'Jagdish Temple', caption: '1651 marvel with divine charm.', img: 'https://iili.io/KthPIvs.jpg' },
    { title: 'Lal Ghat', caption: 'Calm waterfront for peace and reflection.', img: 'https://iili.io/KpU6Rxs.png' },
    { title: 'Gangaur Ghat', caption: 'Iconic lakeside photo spot.', img: 'https://iili.io/Ktj9NPs.jpg' },
    { title: 'Bagore Ki Haveli', caption: '18th-century palace turned museum.', img: 'https://iili.io/KpUPYTF.jpg' },
    { title: 'Ambrai Ghat', caption: 'Peaceful sunset view of palaces.', img: 'https://iili.io/KtjxgoJ.jpg' },
  ],
};
