import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInVeiw, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Container ref={sectionRef} className={isInVeiw ? 'visible' : ''}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  scroll-snap-align: start;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.6s ease;

  &.visible {
    opacity: 1;
  }
`;

export default AnimatedSection;
