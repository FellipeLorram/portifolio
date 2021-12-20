import React from 'react';

import { ContactContainer, MessageButton, TextContainer } from './ContactStyles';
import Message from '../svg/Icons/Message';

const Contact = () => {
  return (
    <ContactContainer>
      <TextContainer>
        <div className="main-text">Interessado em <br />colaboração?</div>
        <div className="sub-text">Vamos construir coisas interessantes e que façam a diferença.</div>
      </TextContainer>

      <div className="button-container">
        <MessageButton>
          Vamos Conversar
          <Message />
        </MessageButton>
      </div>
      <p className="copy">2021 © Fellipe Lorram. All rights reserved.</p>
    </ContactContainer>
  );
};

export default Contact;
