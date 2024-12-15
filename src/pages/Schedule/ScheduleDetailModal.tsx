import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import getUser from '../../apis/auth/getUser.ts';
import getDetailSchedule from '../../apis/schedule/getDetailSchedule.ts';
import deleteSchedule from '../../apis/schedule/deleteSchedule.ts';

function ScheduleDetailModal({
  scheduleId,
  setIsModalOpen,
}: {
  scheduleId: number;
  setIsModalOpen: (isOpen: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity, gcTime: Infinity });
  const { data: schedule } = useQuery({
    queryKey: ['schedule', scheduleId],
    queryFn: () => getDetailSchedule(scheduleId),
  });

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const { mutate: handleDeleteSchedule } = useMutation({
    mutationFn: () => deleteSchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] });
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer>
        <ModalHeader>
          <Title>{schedule?.title}</Title>
        </ModalHeader>
        <DateContainer>
          <DateTitle>시작</DateTitle>
          <Date>{schedule?.started_at.split('T')[0]}</Date>
          <Time>{schedule?.started_at.split('T')[1]}</Time>
        </DateContainer>
        <DateContainer>
          <DateTitle>종료</DateTitle>
          <Date>{schedule?.ended_at.split('T')[0]}</Date>
          <Time>{schedule?.ended_at.split('T')[1]}</Time>
        </DateContainer>
        <ContentInputContainer>{schedule?.content}</ContentInputContainer>
        {(user?.username === schedule?.author || user?.role === 'president' || user?.role === 'executive') && (
          <Button
            onClick={() => {
              const isConfirmed = window.confirm('일정을 삭제하시겠습니까?');
              if (isConfirmed) {
                handleDeleteSchedule();
              }
            }}>
            일정 삭제
          </Button>
        )}
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

const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 22px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const DateTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
`;

const Date = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
`;

const Time = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
`;

const ContentInputContainer = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  height: 137px;
  padding: 16px;
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

export default ScheduleDetailModal;
