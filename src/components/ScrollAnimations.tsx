
import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'slide-up';
  delay?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animationType = 'fade-up',
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade-left':
        return 'scroll-animate-left';
      case 'fade-right':
        return 'scroll-animate-right';
      case 'scale':
        return 'scroll-animate-scale';
      default:
        return 'scroll-animate';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export const MatrixBackground: React.FC = () => {
  useEffect(() => {
    const createMatrixChar = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const char = chars[Math.floor(Math.random() * chars.length)];
      const element = document.createElement('div');
      element.className = 'matrix-char';
      element.textContent = char;
      element.style.left = Math.random() * window.innerWidth + 'px';
      element.style.animationDuration = (Math.random() * 3 + 2) + 's';
      element.style.opacity = (Math.random() * 0.5 + 0.3).toString();
      
      const matrixBg = document.querySelector('.matrix-bg');
      if (matrixBg) {
        matrixBg.appendChild(element);
        
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 5000);
      }
    };

    const interval = setInterval(createMatrixChar, 200);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="matrix-bg"></div>;
};
