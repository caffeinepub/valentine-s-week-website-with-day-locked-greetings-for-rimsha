export interface ValentineDay {
  id: string;
  name: string;
  date: string;
  unlockDate: Date;
  message: string;
  iconIndex: number;
}

export const valentinesSchedule: ValentineDay[] = [
  {
    id: 'rose-day',
    name: 'Rose Day',
    date: 'February 7',
    unlockDate: new Date('2026-02-07T00:00:00'),
    message: 'Rimsha, like a rose blooms with beauty and grace, you bring color and fragrance to my life. Every moment with you is as precious as the petals of the most beautiful rose. Happy Rose Day, my love!',
    iconIndex: 0
  },
  {
    id: 'propose-day',
    name: 'Propose Day',
    date: 'February 8',
    unlockDate: new Date('2026-02-08T00:00:00'),
    message: 'Rimsha, every day I choose you, and every day I fall deeper in love. You are my today and all of my tomorrows. Will you continue to be mine forever? Happy Propose Day, my dearest!',
    iconIndex: 1
  },
  {
    id: 'chocolate-day',
    name: 'Chocolate Day',
    date: 'February 9',
    unlockDate: new Date('2026-02-09T00:00:00'),
    message: 'Rimsha, you are sweeter than the finest chocolate, and being with you is the most delightful treat. Your love melts my heart every single day. Happy Chocolate Day, my sweet love!',
    iconIndex: 2
  },
  {
    id: 'teddy-day',
    name: 'Teddy Day',
    date: 'February 10',
    unlockDate: new Date('2026-02-10T00:00:00'),
    message: 'Rimsha, just like a teddy bear brings comfort and warmth, you bring peace and happiness to my heart. I want to hold you close and never let go. Happy Teddy Day, my cuddly love!',
    iconIndex: 3
  },
  {
    id: 'promise-day',
    name: 'Promise Day',
    date: 'February 11',
    unlockDate: new Date('2026-02-11T00:00:00'),
    message: 'Rimsha, I promise to love you unconditionally, to support your dreams, to make you smile every day, and to be by your side through every moment of life. You have my heart, today and always. Happy Promise Day!',
    iconIndex: 4
  },
  {
    id: 'hug-day',
    name: 'Hug Day',
    date: 'February 12',
    unlockDate: new Date('2026-02-12T00:00:00'),
    message: 'Rimsha, in your arms, I find my home. Your hugs are my safe haven, where all worries fade away. I wish I could hold you close right now and feel your warmth. Happy Hug Day, my embrace!',
    iconIndex: 5
  },
  {
    id: 'kiss-day',
    name: 'Kiss Day',
    date: 'February 13',
    unlockDate: new Date('2026-02-13T00:00:00'),
    message: 'Rimsha, your kiss is the sweetest magic that makes my world complete. Every kiss from you is a promise of forever, a moment of pure bliss. Happy Kiss Day, my love!',
    iconIndex: 6
  },
  {
    id: 'valentine-day',
    name: "Valentine's Day",
    date: 'February 14',
    unlockDate: new Date('2026-02-14T00:00:00'),
    message: 'Rimsha, you are my Valentine today and every day. You are the love of my life, my best friend, my everything. Thank you for being you and for loving me. I love you more than words can express. Happy Valentine\'s Day, my forever love! ❤️',
    iconIndex: 7
  }
];
