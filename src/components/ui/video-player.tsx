'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  isYouTube?: boolean;
  isYouTubeEmbed?: boolean;
}

export function VideoPlayer({ isOpen, onClose, videoUrl, title, isYouTube, isYouTubeEmbed }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // For YouTube videos, open in a new tab
  const handleYouTubeVideo = () => {
    window.open(videoUrl, '_blank');
  };

  // 自动隐藏控制栏
  const startControlsTimer = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowControls(true);
      startControlsTimer();
    }
  };

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
      setShowControls(true);
      startControlsTimer();
    }
  };

  const handleDownload = () => {
    if (isYouTube) {
      window.open(videoUrl, '_blank');
      return;
    }
    
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    startControlsTimer();
  };

  const handleVideoClick = () => {
    if (isYouTube && !isYouTubeEmbed) {
      handleYouTubeVideo();
      return;
    }
    togglePlay();
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-[90vw] w-full max-h-[90vh] p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="relative flex items-center justify-center bg-black rounded-lg overflow-hidden"
          style={{ height: 'calc(90vh - 180px)' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          {isYouTube && isYouTubeEmbed ? (
            <iframe 
              width="100%" 
              height="100%" 
              src={videoUrl}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          ) : isYouTube ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p className="text-white mb-4">Click to open YouTube video</p>
              <Button onClick={handleYouTubeVideo} className="bg-red-600 hover:bg-red-700 text-white">
                Open YouTube Video
              </Button>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="max-w-full max-h-full object-contain"
              src={videoUrl}
              onClick={handleVideoClick}
              onEnded={() => {
                setIsPlaying(false);
                setShowControls(true);
              }}
              playsInline
            />
          )}
          
          {!isYouTube && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-black/70 backdrop-blur-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSkip(-10);
                  }}
                  className="text-white hover:bg-white/20"
                >
                  <SkipBack className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSkip(10);
                  }}
                  className="text-white hover:bg-white/20"
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
                
                <div className="w-px h-6 bg-white/20" />
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload();
                  }}
                  className="text-white hover:bg-white/20"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 