import type { Location } from '@/types/location';

// 真实位置数据
export const locations: Location[] = [
  {
    id: '1',
    name: '新华书店',
    address: 'Q786+6VH, Ronggui Blvd Middle, Shunde District, Foshan, Guangdong Province, China, 528303',
    position: {
      lat: 22.766391234706237, 
      lng: 113.26216873291828
    },
    type: 'mall',
    status: 'active',
    lastRefill: '2024-12-12',
    availableUnits: 99
  },
  {
    id: '2',
    name: '香港科技大学',
    address: '广州市南沙区笃学路1号',
    position: {
      lat: 22.89,
      lng: 113.48
    },
    type: 'school',
    status: 'active',
    lastRefill: '2024-12-12',
    availableUnits: 98
  },
  {
    id: '3',
    name: '香港大学',
    address: '香港薄扶林道',
    position: {
      lat: 22.2829,
      lng: 114.1367
    },
    type: 'school',
    status: 'coming',
  }
];