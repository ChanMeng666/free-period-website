export interface NavigationState {
    isScrolled: boolean;
    currentSection: string;
    progress: number;
  }
  
  export interface NavItem {
    label: string;
    href: string;
    icon?: string;
  }