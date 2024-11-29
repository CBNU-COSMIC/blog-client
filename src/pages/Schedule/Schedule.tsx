import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import ScheduleResisterModal from './ScheduleResisterModal.tsx';
import ScheduleDetailModal from './ScheduleDetailModal.tsx';
import getSchedules from '../../apis/schedule/getSchedules.ts';
import ScheduleType from '../../types/ScheduleType.ts';

function Schedule() {
  const [selectedDate, setSelectedDate] = useState('');
  const [isChildHovered, setIsChildHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedScheduleId, setSelectedScheduleId] = useState(1);
  const { data: schedules } = useQuery({ queryKey: ['schedules'], queryFn: getSchedules });

  const openSchedule = (scheduleId: number) => {
    setSelectedScheduleId(scheduleId);
    setIsDetailOpen(true);
  };

  const renderSchedule = (date: Date) => {
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const daySchedules = schedules?.filter(
      (schedule: ScheduleType) =>
        formattedDate >= schedule.started_at.split('T')[0] && formattedDate <= schedule.ended_at.split('T')[0],
    );

    if (daySchedules?.length > 0) {
      return (
        <ScheduleList onMouseEnter={() => setIsChildHovered(true)} onMouseLeave={() => setIsChildHovered(false)}>
          {daySchedules.map((schedule: ScheduleType, index: number) => (
            <ScheduleItem
              key={index}
              color={schedule.color}
              onClick={() => {
                openSchedule(schedule.scheduleId);
              }}>
              {schedule.title}
            </ScheduleItem>
          ))}
        </ScheduleList>
      );
    }
    return null;
  };

  const handleTileClick = (date: Date, event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target === event.currentTarget) {
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      setSelectedDate(formattedDate);
      setIsModalOpen(true);
    }
    event.currentTarget.blur();
  };

  return (
    <Container>
      {isModalOpen && <ScheduleResisterModal setIsModalOpen={setIsModalOpen} selectedDate={selectedDate} />}

      {isDetailOpen && <ScheduleDetailModal scheduleId={selectedScheduleId} setIsModalOpen={setIsDetailOpen} />}

      <CustomCalendar
        isChildHovered={isChildHovered}
        value={new Date()}
        onClickDay={(date, event) => {
          handleTileClick(date, event);
        }}
        calendarType="gregory"
        tileContent={({ date, view }) => {
          if (view === 'month') {
            return (
              <div>
                <span>{date.getDate().toString().padStart(2, '0')}</span>
                {renderSchedule(date)}
              </div>
            );
          } else if (view === 'year') {
            return <span>{date.getMonth() + 1}월</span>;
          }
          return null;
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  width: 1440px;
  margin: 0 auto;
  height: 100%;
`;

const CustomCalendar = styled(Calendar)<{ isChildHovered: boolean }>`
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 1280px;

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
    z-index: 1;

    abbr {
      display: none;
    }

    &:hover {
      background-color: ${({ isChildHovered }) => (isChildHovered ? '#ffffff' : 'aliceblue')};
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

    &:not(:has(.schedule-list:hover)):hover {
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

const ScheduleItem = styled.div<{ color: string }>`
  display: flex;
  height: 24px;
  align-items: center;
  padding-left: 4px;
  margin-bottom: 2px;
  font-size: 12px;
  color: black;
  background-color: ${({ color }) => color};

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Schedule;
