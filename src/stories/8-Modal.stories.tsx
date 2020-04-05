import React, { useState } from 'react';
import { PrimaryButton } from '../components/atomic/atm.buttons.component';
import { H1 } from '../components/atomic/atm.typography.styled';
import { DarkenedFilter, Modal } from '../components/atomic/org.modal.component';
import { weekDayEnum } from 'models/horarios.usecase';
export default {
  title: 'Modal',
  component: Modal,
};

export const SimpleModalStory = () => {
  return (
    <DarkenedFilter>
      <Modal>
        <H1>Hello</H1>
      </Modal>
    </DarkenedFilter>
  );
};

export const ClickToOpenModalStory = () => {
  const [modalOpened, setModalOpened] = useState();
  const handleOpenModal = () => {
    setModalOpened(true);
  };
  return (
    <>
      <PrimaryButton text={'Abrir Modal'} onClick={handleOpenModal} />
      {modalOpened && (
        <DarkenedFilter onClick={() => setModalOpened(false)}>
          <Modal>
            <H1>Hello</H1>
          </Modal>
        </DarkenedFilter>
      )}
    </>
  );
};

