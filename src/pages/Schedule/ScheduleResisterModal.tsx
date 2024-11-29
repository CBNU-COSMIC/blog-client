import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import styled from 'styled-components';

import DropdownIcon from '../../icons/DropdownIcon';
import CheckIcon from '../../icons/CheckIcon';
import writeSchedule from '../../apis/schedule/writeSchedule';

function ScheduleResisterModal({
  setIsModalOpen,
  selectedDate,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
  selectedDate: string;
}) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#FFBED4');
  const [startDate, setStartDate] = useState(selectedDate);
  const [endDate, setEndDate] = useState(selectedDate);
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('01:00');
  const [content, setContent] = useState('');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setTitle('');
      setColor('#FFBED4');
      setStartDate(selectedDate);
      setEndDate(selectedDate);
      setStartTime('00:00');
      setEndTime('01:00');
      setContent('');
      setIsModalOpen(false);
    }
  };

  const selectColor = (selectedColor: string) => {
    setColor(selectedColor);
    setIsColorPickerOpen(false);
  };

  const { mutate: register } = useMutation({
    mutationFn: (body: { title: string; content: string; started_at: string; ended_at: string; color: string }) =>
      writeSchedule(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] });
      setIsModalOpen(false);
    },
    onError: (error: AxiosError<{ detail: string }>) => {
      if (error.response) {
        alert(error.response.data.detail);
      }
      console.error(error);
    },
  });

  const resisterSchedule = () => {
    if (`${startDate}T${startTime}` >= `${endDate}T${endTime}`) {
      alert('종료 시간을 시작 시간보다 늦게 설정해주세요.');
      return;
    }

    if (!title || !startDate || !endDate || !startTime || !endTime) {
      alert('제목 및 시간을 입력해주세요.');
      return;
    }

    const newSchedule = {
      title,
      color,
      started_at: `${startDate}T${startTime}`,
      ended_at: `${endDate}T${endTime}`,
      content,
    };
    register(newSchedule);
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer>
        <ModalHeader>
          <TitleINput
            type="text"
            placeholder="일정 제목"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <ColorPickerContainer>
            <ColorPicker onClick={() => setIsColorPickerOpen(true)}>
              <SelectedColor color={color} />
              <DropdownIcon />
            </ColorPicker>
            {isColorPickerOpen && (
              <ColorPickerDropdown>
                <ColorPickerItemContainer onClick={() => selectColor('#FFBED4')}>
                  {color === '#FFBED4' && <CheckIcon />}
                  <ColorPickerItem color="#FFBED4" />
                </ColorPickerItemContainer>
                <ColorPickerItemContainer onClick={() => selectColor('#D8EC9B')}>
                  {color === '#D8EC9B' && <CheckIcon />}
                  <ColorPickerItem color="#D8EC9B" />
                </ColorPickerItemContainer>
                <ColorPickerItemContainer onClick={() => selectColor('#D2C1FB')}>
                  {color === '#D2C1FB' && <CheckIcon />}
                  <ColorPickerItem color="#D2C1FB" />
                </ColorPickerItemContainer>
              </ColorPickerDropdown>
            )}
          </ColorPickerContainer>
        </ModalHeader>
        <DateInputContainer>
          <DateInputTitle>시작</DateInputTitle>
          <DateInput type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
          <TimeInput type="time" defaultValue={startTime} onChange={(event) => setStartTime(event.target.value)} />
        </DateInputContainer>
        <DateInputContainer>
          <DateInputTitle>종료</DateInputTitle>
          <DateInput type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
          <TimeInput type="time" defaultValue={endTime} onChange={(event) => setEndTime(event.target.value)} />
        </DateInputContainer>
        <ContentInputContainer>
          <ContentInput placeholder="일정 내용" value={content} onChange={(event) => setContent(event.target.value)} />
        </ContentInputContainer>
        <Button onClick={resisterSchedule}>일정 등록</Button>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  width: 320px;
  height: 378px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const TitleINput = styled.input`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  width: 80%;
  height: 30px;
  border: none;
  outline: none;
`;

const ColorPickerContainer = styled.div`
  position: relative;
`;

const ColorPicker = styled.div`
  width: 40px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d7d8d9;
  border-radius: 5px;
  border: none;
  padding: 0 2px 0 5px;
  box-sizing: border-box;
  cursor: pointer;
`;

const SelectedColor = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  background: ${({ color }) => color};
  border-radius: 5px;
`;

const ColorPickerDropdown = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  background: white;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
`;

const ColorPickerItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 32px;
  padding: 5px;
  gap: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const ColorPickerItem = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  background: ${({ color }) => color};
  border-radius: 5px;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const DateInputTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
`;

const DateInput = styled.input`
  width: 130px;
  height: 30px;
  border: none;
  outline: none;
`;

const TimeInput = styled.input`
  width: 105px;
  height: 30px;
  border: none;
  outline: none;
`;

const ContentInputContainer = styled.div`
  padding: 16px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  outline: none;
  resize: none;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: var(--primary-color);
  border: none;
  color: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 1s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default ScheduleResisterModal;
