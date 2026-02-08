import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

/**
 * Componente que simula una máquina de escribir, mostrando el texto letra por letra.
 */
export function Typewriter({ 
  text, 
  speed = 50, 
  delay = 0, 
  className,
  showCursor = true,
  onComplete 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (text.length === 0) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    const startTyping = () => {
      const typeNext = () => {
        if (charIndex < text.length) {
          setDisplayText(text.slice(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(typeNext, speed);
        } else {
          setIsComplete(true);
          onComplete?.();
        }
      };

      timeoutId = setTimeout(typeNext, speed);
    };

    const startTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay, onComplete]);

  return (
    <span className={cn('inline', className)}>
      {displayText}
      {showCursor && (
        <span
          className={cn(
            
            'inline-block w-0.5 h-[0.9em] ml-0.5 align-middle bg-muted-foreground',
            !isComplete && 'animate-[blink_0.8s_step-end_infinite]'
          )}
          aria-hidden
        />
      )}
    </span>
  );
}
