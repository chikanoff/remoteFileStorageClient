import React from 'react';
import { Container, Row, Column, FooterLink } from './FooterStyles';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Column>
          <FooterLink href="t.me/chikanoff">Telegram</FooterLink>
        </Column>
        <Column>
          <FooterLink href="vk.com/danyachikanoff">VK</FooterLink>
        </Column>
        <Column>
          <FooterLink href="github.com/chikanoff">Github</FooterLink>
        </Column>
        <Column>
          <FooterLink href="youtube.com">Youtube</FooterLink>
        </Column>
      </Row>
    </Container>
  );
};

export default Footer;
