export interface Tutor {
  id: string;
  name: string;
  avatar: string;
  subjects: string[];
  rating: number;
  reviews: number;
  experience: string;
  hourlyRate: number;
  bio: string;
  demoVideoUrl?: string;
  available: boolean;
}

export interface Doubt {
  id: string;
  subject: string;
  topic: string;
  description: string;
  imageUrl?: string;
  status: 'pending' | 'accepted' | 'resolved';
  createdAt: Date;
  tutorId?: string;
}

export interface Session {
  id: string;
  tutorId: string;
  tutorName: string;
  subject: string;
  date: Date;
  duration: number;
  type: 'chat' | 'voice' | 'video';
  status: 'scheduled' | 'completed' | 'cancelled';
  rating?: number;
  cost: number;
}

export const mockTutors: Tutor[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwdHV0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNzc4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    subjects: ['Mathematics', 'Physics'],
    rating: 4.9,
    reviews: 156,
    experience: '8 years',
    hourlyRate: 3500,
    bio: 'Passionate about making complex math concepts simple and fun.',
    demoVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    available: true,
  },
  {
    id: '2',
    name: 'Raj Kumar',
    avatar: 'https://images.unsplash.com/photo-1664101606938-e664f5852fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYWxlJTIwdGVhY2hlciUyMHNtaWxpbmd8ZW58MXx8fHwxNzczNzc4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    subjects: ['Chemistry', 'Biology'],
    rating: 4.8,
    reviews: 203,
    experience: '10 years',
    hourlyRate: 4000,
    bio: 'Specialized in NEET and competitive exam preparation.',
    demoVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    available: true,
  },
  {
    id: '3',
    name: 'Maya Johnson',
    avatar: 'https://images.unsplash.com/photo-1655402428298-fe9b5fb757df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjB3b21hbiUyMGVkdWNhdG9yfGVufDF8fHx8MTc3Mzc3ODgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    subjects: ['English', 'Literature'],
    rating: 4.95,
    reviews: 189,
    experience: '6 years',
    hourlyRate: 3000,
    bio: 'Expert in improving writing skills and exam techniques.',
    demoVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    available: false,
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    subjects: ['Computer Science', 'Programming'],
    rating: 4.7,
    reviews: 142,
    experience: '5 years',
    hourlyRate: 4500,
    bio: 'Full-stack developer turned educator. Love teaching coding!',
    demoVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    available: true,
  },
];

export const mockSessions: Session[] = [
  {
    id: 's1',
    tutorId: '1',
    tutorName: 'Sarah Chen',
    subject: 'Mathematics',
    date: new Date('2026-03-10T14:00:00'),
    duration: 60,
    type: 'video',
    status: 'completed',
    rating: 5,
    cost: 3500,
  },
  {
    id: 's2',
    tutorId: '2',
    tutorName: 'Raj Kumar',
    subject: 'Chemistry',
    date: new Date('2026-03-15T16:00:00'),
    duration: 45,
    type: 'video',
    status: 'completed',
    rating: 4,
    cost: 3000,
  },
  {
    id: 's3',
    tutorId: '4',
    tutorName: 'Alex Rodriguez',
    subject: 'Programming',
    date: new Date('2026-03-20T10:00:00'),
    duration: 90,
    type: 'video',
    status: 'scheduled',
    cost: 6750,
  },
];

export const mockDoubts: Doubt[] = [
  {
    id: 'd1',
    subject: 'Mathematics',
    topic: 'Quadratic Equations',
    description: 'Need help solving complex quadratic equations with imaginary roots',
    status: 'pending',
    createdAt: new Date('2026-03-16T10:30:00'),
  },
  {
    id: 'd2',
    subject: 'Physics',
    topic: 'Newton\'s Laws',
    description: 'Confused about application of third law in momentum problems',
    status: 'accepted',
    createdAt: new Date('2026-03-16T14:00:00'),
    tutorId: '1',
  },
];