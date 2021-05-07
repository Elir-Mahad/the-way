import React from "react";
import {
  UserGuideInstruction,
  UserGuideContainer,
  UserGuideBackground,
} from "../Styles";
//
function UserGuide() {
  return (
    <UserGuideBackground>
      <UserGuideContainer>
        <UserGuideInstruction>
          Find a quote that you like, press the heart icon of that quote.
        </UserGuideInstruction>
        <UserGuideInstruction>
          Click on the heart icon on the top right, and your liked quote/quotes
          will appear.
        </UserGuideInstruction>
        <UserGuideInstruction>
          On the top left of the quote box, you will see the name of the
          category that the quote belongs to.
        </UserGuideInstruction>
        <UserGuideInstruction>
          For example: If on the top left of the quote box, it says 'Education',
          then this means that this quote belongs to the category 'Education'.
        </UserGuideInstruction>
        <UserGuideInstruction>
          Some quotes are part of a series. If a quote is part of a series, then
          on the top right of the quote box, you will see the quote title and
          its number within the series.
        </UserGuideInstruction>
        <UserGuideInstruction>
          For example: If on the top right of the quote box, it says
          'calculation 2', then this means that this quote is the second quote
          of a a series titled calculation.
        </UserGuideInstruction>
      </UserGuideContainer>
    </UserGuideBackground>
  );
}

export default UserGuide;