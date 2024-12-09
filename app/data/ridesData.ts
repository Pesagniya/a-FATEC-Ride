
export interface Ride {
    id: string;
    seats: number;
    cost: string;
    name: string;
    start: string;
    score: string;
    time1: string;
    time2: string;
    image: number;
  }
  
  export const mockRides: Ride[] = [
    {
      id: '1',
      seats: 4,
      cost: '25.00',
      name: 'Alice Johnson',
      start: 'Belo Horizonte',
      score: '4.8',
      time1: '09:30',
      time2: '10:00',
      image: require('@/assets/images/bella.png'),
    },
    {
      id: '2',
      seats: 3,
      cost: '18.50',
      name: 'Carlos Silva',
      start: 'Curitiba',
      score: '4.5',
      time1: '12:15',
      time2: '13:10',
      image: require('@/assets/images/bella.png'),
    },
    {
      id: '3',
      seats: 2,
      cost: '30.00',
      name: 'Santa Maria',
      start: 'Florianópolis',
      score: '4.9',
      time1: '08:45',
      time2: '09:30',
      image: require('@/assets/images/bella.png'),
    },
    {
      id: '4',
      seats: 5,
      cost: '12.00',
      name: 'João Souza',
      start: 'Porto Alegre',
      score: '4.7',
      time1: '10:20',
      time2: '11:00',
      image: require('@/assets/images/bella.png'),
    },
  ];
  