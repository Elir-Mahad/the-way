//
import React from "react";
import {
  Synopsis,
  DescriptionTextOne,
  DescriptionTextTwo,
  EngLetter,
  Japandengtitles,
  JpLetter,
  LettersEng,
  LettersJp,
  WelcomeContainer,
  UserGuideInstruction,
  UserGuide,
} from "../Styles";

//

//!------------------------------------------------------------IMPORTS

const WelcomeScreen = () => {
  //
  return (
    <WelcomeContainer>
      <Japandengtitles>
        {/*  */}
        {/*  */}
        <LettersEng>
          <EngLetter> H </EngLetter>
          <EngLetter> A </EngLetter>
          <EngLetter> G </EngLetter>
          <EngLetter> A </EngLetter>
          <EngLetter> K </EngLetter>
          <EngLetter> U </EngLetter>
          <EngLetter> R </EngLetter>
          <EngLetter> E </EngLetter>
        </LettersEng>
        <Synopsis>
          <DescriptionTextOne>
            Hagakure was Written during a time when there was no officially
            sanctioned samurai fighting.
          </DescriptionTextOne>
          <DescriptionTextTwo>
            The book grapples with the dilemma of maintaining a warrior class in
            the absence of war and reflects the author's nostalgia for a world
            that had disappeared before he was born.
          </DescriptionTextTwo>
          <UserGuide>
            <UserGuideInstruction>
              Find a quote that you like, press the heart icon of that quote.
            </UserGuideInstruction>
            <UserGuideInstruction>
              Click on the heart icon on the top right, and your liked
              quote/quotes will appear.
            </UserGuideInstruction>
            <UserGuideInstruction>
              On the top left of the quote box, you will see the name of the
              category that the quote belongs to.
            </UserGuideInstruction>
            <UserGuideInstruction>
              For example: If on the top left of the quote box, it says
              'Education', then this means that this quote belongs to the
              category 'Education'.
            </UserGuideInstruction>
            <UserGuideInstruction>
              Some quotes are part of a series. If a quote is part of a series,
              then on the top right of the quote box, you will see the quote
              title and its number within the series.
            </UserGuideInstruction>
            <UserGuideInstruction>
              For example: If on the top right of the quote box, it says
              'calculation 2', then this means that this quote is the second
              quote of a a series titled calculation.
            </UserGuideInstruction>
          </UserGuide>
        </Synopsis>
        <LettersJp>
          <JpLetter> 葉 </JpLetter>
          <JpLetter> 隠 </JpLetter>
          <JpLetter>---</JpLetter>
          <JpLetter> 戦 </JpLetter>
          <JpLetter> 士 </JpLetter>
          <JpLetter> ク </JpLetter>
          <JpLetter> ラ </JpLetter>
          <JpLetter> ス </JpLetter>
          {/* 葉隠 - 山本 常朝  */}
        </LettersJp>
      </Japandengtitles>
      {/*  */}
    </WelcomeContainer>
  );
};
export default WelcomeScreen;

/* 葉隠 - hakagure */

/* 戦士クラス - warrior class */
