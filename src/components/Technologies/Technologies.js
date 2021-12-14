import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Eu trabalho com algumas tecnologias do mundo do desenvolvimento, do Back-end ao Front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experiência com <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experiência com <br />
            Node.js e<br /> Banco de dados
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>
            Design
          </ListTitle>
          <ListParagraph>
            Experiência com <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
