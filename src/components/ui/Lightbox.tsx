import { useEffect, useState, useCallback } from 'react';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [imgOpacity, setImgOpacity] = useState(1);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImgOpacity(0);
    setTimeout(() => {
      onNavigate((currentIndex - 1 + images.length) % images.length);
      setImgOpacity(1);
    }, 150);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImgOpacity(0);
    setTimeout(() => {
      onNavigate((currentIndex + 1) % images.length);
      setImgOpacity(1);
    }, 150);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div
      className="lightbox active"
      id="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="lightbox-close"
        aria-label="Schließen"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        &times;
      </button>

      {images.length > 1 && (
        <>
          <button
            className="lightbox-prev"
            aria-label="Vorheriges Bild"
            onClick={handlePrev}
          >
            &#8249;
          </button>
          <button
            className="lightbox-next"
            aria-label="Nächstes Bild"
            onClick={handleNext}
          >
            &#8250;
          </button>
        </>
      )}

      <img
        id="lb-img"
        src={currentImg?.src}
        alt={currentImg?.alt || 'Vollbild'}
        style={{
          opacity: imgOpacity,
          transition: 'opacity 0.2s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
