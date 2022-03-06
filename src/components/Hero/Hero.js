import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Seja bem vindo a <br />
        Portfólio pessoal
      </SectionTitle>
      <SectionText>
        Sou um desenvolvedor front-end apaixonado por dar vida ao design.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/anderson-andre-pereira")
        }
      >
        Entrar em contato
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
