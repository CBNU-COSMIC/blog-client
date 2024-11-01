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
      { threshold: 0.5 },
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
  width: 1440px;
  padding: 0 80px;
  box-sizing: border-box;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 1s ease;

  &.visible {
    opacity: 1;
  }
`;

export default AnimatedSection;
