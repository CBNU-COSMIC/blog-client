import styled from 'styled-components';

function ScheduleResisterModal({ setIsModalOpen }: { setIsModalOpen: (isOpen: boolean) => void }) {
  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer />
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
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
`;

export default ScheduleResisterModal;
