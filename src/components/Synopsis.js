import React from "react";
import {
  SynopsisContainer,
  DescriptionTextOne,
  DescriptionTextTwo,
  SynopsisBackground,
} from "../Styles";
//
function Synopsis() {
  return (
    <SynopsisBackground>
      <SynopsisContainer>
        <DescriptionTextOne>
          Hagakure was Written during a time when there was no officially
          sanctioned samurai fighting.
        </DescriptionTextOne>
        <DescriptionTextTwo>
          The book grapples with the dilemma of maintaining a warrior class in
          the absence of war and reflects the author's nostalgia for a world
          that had disappeared before he was born.
        </DescriptionTextTwo>
      </SynopsisContainer>
    </SynopsisBackground>
  );
}

export default Synopsis;
