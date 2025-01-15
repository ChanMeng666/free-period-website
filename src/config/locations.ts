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
    address: 'Nansha District, Guangzhou, Guangdong Province, China, 511453',
    position: {
      lat: 22.886614568666317,
      lng: 113.47847276675165
    },
    type: 'school',
    status: 'active',
    lastRefill: '2024-12-12',
    availableUnits: 99
  },
  {
    id: '3',
    name: '侨邦·国际公寓',
    address: 'No. 13, Rongqi Avenue, Shunde District, Foshan City, Guangdong Province, China, 528300',
    position: {
      lat: 22.78,
      lng: 113.28
    },
    type: 'mall',
    status: 'active',
    lastRefill: '2025-01-15',
    availableUnits: 99
  }
];