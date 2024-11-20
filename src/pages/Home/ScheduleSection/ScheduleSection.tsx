import { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import AnimatedSection from '../AnimationSection.tsx';

type DatePiece = Date | null;

type SelectedDate = DatePiece | [DatePiece, DatePiece];

function ScheduleSection() {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());

  return (
    <AnimatedSection>
      <Container>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </Container>
    </AnimatedSection>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  height: 50px;
  font-size: 50px;
`;

const Contents = styled.div`
  height: 450px;
  background-color: #d9d9d9;
`;

export default ScheduleSection;
