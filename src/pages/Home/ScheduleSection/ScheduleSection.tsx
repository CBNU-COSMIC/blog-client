import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import AnimatedSection from '../AnimationSection.tsx';

function ScheduleSection() {
  const navigate = useNavigate();

  const navigateToSchedule = () => {
    navigate('/schedule');
  };

  const schedules = [
    { startDate: '2024-11-23T10:00', endDate: '2024-11-23T12:00', title: '스터디' },
    { startDate: '2024-11-24T14:00', endDate: '2024-11-24T16:00', title: '세미나' },
    { startDate: '2024-11-23T18:00', endDate: '2024-11-25T20:00', title: '엠티' },
  ];

  const renderSchedule = (date: Date) => {
    const formattedDate = date.toISOString().split('T')[0];
    const daySchedules = schedules.filter(
      (schedule) =>
        formattedDate >= schedule.startDate.split('T')[0] && formattedDate <= schedule.endDate.split('T')[0],
    );

    if (daySchedules.length > 0) {
      return (
        <ScheduleList>
          {daySchedules.map((schedule, index) => (
            <ScheduleItem key={index}>{schedule.title}</ScheduleItem>
          ))}
        </ScheduleList>
      );
    }
    return null;
  };

  return (
    <AnimatedSection>
      <Container>
        <CalendarWrapper>
          <BlockCalendar />
          <CustomCalendar
            value={new Date()}
            calendarType="gregory"
            nextLabel={null}
            prevLabel={null}
            next2Label={null}
            prev2Label={null}
            tileContent={({ date }) => (
              <div>
                <span>{date.getDate().toString().padStart(2, '0')}</span>
                {renderSchedule(date)}
              </div>
            )}
          />
        </CalendarWrapper>
        <MoreButton onClick={navigateToSchedule}>일정 더 보기</MoreButton>
      </Container>
    </AnimatedSection>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const CalendarWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const BlockCalendar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const CustomCalendar = styled(Calendar)`
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;
  height: 730px;
  overflow: hidden;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    background: var(--primary-color);
    color: white;
    width: 100%;
    height: 75px;
    border-radius: 10px 10px 0 0;
    padding: 10px;

    button {
      color: white;
      font-size: 24px;
      background-color: var(--primary-color);
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #5fa1a2;
        border-radius: 6px;
      }

      &:focus {
        background-color: var(--primary-color);
        &:hover {
          background-color: #5fa1a2;
          border-radius: 6px;
        }
      }
    }
    span {
      font-family: 'Pretendard', sans-serif;
      font-size: 24px;
      font-weight: 500;
    }
  }

  .react-calendar__tile {
    position: relative;
    border: solid 1px #f0f0f0;
    height: 120px;
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;

    abbr {
      display: none;
    }

    &:hover {
      background-color: aliceblue;
    }

    &:focus {
      background-color: white;
      &:hover {
        background-color: aliceblue;
      }
    }

    span {
      font-family: 'Pretendard', sans-serif;
      font-size: 16px;
      position: absolute;
      top: 11px;
      right: 11px;
      z-index: 2;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    padding-right: 10px;
    display: flex;
    align-items: end;
    justify-content: end;
  }

  .react-calendar__tile--active {
    background: white;

    &:hover {
      background-color: aliceblue;
    }

    &:focus {
      background-color: white;
      &:hover {
        background-color: aliceblue;
      }
    }
  }

  .react-calendar__tile--active::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #d10000;
    border-radius: 50%;
    top: 5px;
    right: 5px;
    z-index: 0;
  }

  .react-calendar__tile--hasActive {
    background: white;

    &:hover {
      background: white;
    }
    &:focus {
      background: white;
    }
  }

  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #d10000;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #c9c9c9;
  }
`;

const MoreButton = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  width: 150px;
  height: 50px;
  min-height: 50px;
  border: none;
  border-radius: 32px;
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
  transition: opacity 1s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const ScheduleList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: auto;
  bottom: 5px;
  left: 5px;
  right: 5px;
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px;
  z-index: 10;
`;

const ScheduleItem = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
  padding-left: 4px;
  margin-bottom: 2px;
  font-size: 12px;
  color: #333;
  background-color: rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }
`;

export default ScheduleSection;
