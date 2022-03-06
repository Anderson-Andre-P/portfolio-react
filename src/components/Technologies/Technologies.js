import React from "react";
import { DiCodepen, DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Trabalhei com diversas tecnologias no mundo do desenvolvimento web. Do
      front-end ao design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experiência com <br />
            React.JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Node.JS and Banco de dados
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodepen size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
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
