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
    name: '德艺融',
    address: 'Shunde District, Foshan, Guangdong Province, China, 528300',
    position: {
      lat: 22.83327569926313,
      lng: 113.25417633104051
    },
    type: 'mall',
    status: 'active',
    lastRefill: '2024-12-12',
    availableUnits: 99
  },
  {
    id: '4',
    name: '美林广场',
    address: 'Panyu District, Guangzhou, Guangdong Province, China, 511453',
    position: {
      lat: 22.876481627144045,
      lng: 113.47682565392921
    },
    type: 'mall',
    status: 'coming',
    lastRefill: '2024-12-12',
    availableUnits: 99
  }
];