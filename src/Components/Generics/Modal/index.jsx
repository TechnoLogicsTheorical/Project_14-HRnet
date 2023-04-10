import React from 'react';
import ReactModal from 'react-modal';

import styled from 'styled-components';
import CloseImage from '../../../Assets/img/close-button.png';

const ClosedButton = styled.button`
  width: 64px;
  height: 64px;
  appearance: none;
  border: none;
  border-radius: 50px;
  background-color: #82878c;
  &:hover {
    background-color: #82878c;
    border: 1px solid gray;
  }
`;
const CloseIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const Modal = styled(ReactModal)`
    
`;

export default function ConfirmModal({ isOpen, closeFunction }) {
    return (
        <Modal isOpen={isOpen}>
            <ClosedButton onClick={closeFunction}>
                <CloseIcon src={CloseImage} />
            </ClosedButton>
        </Modal>
    )
}