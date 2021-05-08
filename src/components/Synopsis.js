import React from "react";
import {
  SynopsisContainer,
  DescriptionText,
  SynopsisBackground,
  SynopsisScreenImage,
} from "../Styles";
import mandem from "../assets/mandem.jpeg";
import harakiri from "../assets/harakiri.jpg";
//
function Synopsis() {
  return (
    <SynopsisBackground>
      <SynopsisScreenImage src={mandem} />
      <SynopsisContainer>
        <DescriptionText>
          Hagakure was Written, by Yamamoto Tsunetomo, during a time when there
          was no officially sanctioned samurai fighting.
        </DescriptionText>
        <DescriptionText>
          The book deals with the dilemma of maintaining a warrior class in the
          absence of war.
        </DescriptionText>
      </SynopsisContainer>
      <SynopsisScreenImage src={harakiri} />
      <SynopsisContainer>
        <DescriptionText>
          It grapples with the meaning of death, by challenging the idea that
          preserving one’s own life is the supreme good.
        </DescriptionText>
      </SynopsisContainer>
    </SynopsisBackground>
  );
}

export default Synopsis;
