import { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type DatePiece = Date | null;

type SelectedDate = DatePiece | [DatePiece, DatePiece];

function Schedule() {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());

  console.log(selectedDate);

  return (
    <Container>
      <CustomCalendar
        value={new Date()}
        onChange={setSelectedDate}
        calendarType="gregory"
        tileContent={({ date, view }) => {
          if (view === 'month') {
            return <span>{date.getDate().toString().padStart(2, '0')}</span>;
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

  width: 1440px;
  margin: 0 auto;
  padding: 80px;
  height: 100%;
`;

const CustomCalendar = styled(Calendar)`
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;
  //height: 730px;

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

export default Schedule;
