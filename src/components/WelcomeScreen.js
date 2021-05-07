//
import React from "react";
import {
  EngLetter,
  Japandengtitles,
  JpLetter,
  LettersEng,
  LettersJp,
  WelcomeContainer,
  LandingBackground,
} from "../Styles";
//

//!------------------------------------------------------------IMPORTS

const WelcomeScreen = () => {
  //
  return (
    <LandingBackground>
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
      </WelcomeContainer>
    </LandingBackground>
  );
};
export default WelcomeScreen;

/* 葉隠 - hakagure */

/* 戦士クラス - warrior class */
