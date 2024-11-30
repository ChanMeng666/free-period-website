export interface HeroSection {
    layout: 'split' | 'full' | 'overlay';
    background: {
      type: 'gradient' | 'image' | 'video';
      content: string;
      overlay?: string;
    };
    content: {
      headline: string;
      subheadline: string;
      cta: {
        primary: string;
        secondary: string;
        };
    };
    animation: {
    entry: any; // We'll define specific motion variants later
    scroll: any;
    };
}
