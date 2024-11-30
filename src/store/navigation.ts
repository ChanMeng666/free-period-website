import { create } from 'zustand';
import { NavigationState } from '@/types/navigation';

export const useNavigationStore = create<NavigationState>((set) => ({
  isScrolled: false,
  currentSection: 'home',
  progress: 0,
}));