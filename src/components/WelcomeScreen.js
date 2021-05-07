//
import React from "react";
import {
  Japanesetitle,
  JpLetter,
  LettersJp,
  WelcomeContainer,
  LandingBackground,
  IntroText,
} from "../Styles";
//

//!------------------------------------------------------------IMPORTS

const WelcomeScreen = () => {
  //
  return (
    <LandingBackground>
      <WelcomeContainer>
        <Japanesetitle>
          <LettersJp>
            <JpLetter> 戦 </JpLetter>
            <JpLetter> 士 </JpLetter>
            <JpLetter> -- </JpLetter>
            <JpLetter> ク </JpLetter>
            <JpLetter> ラ </JpLetter>
            <JpLetter> ス </JpLetter>
          </LettersJp>
          <LettersJp>
            <JpLetter> 葉 </JpLetter>
            <JpLetter> 隠 </JpLetter>
            <JpLetter> -- </JpLetter>
            <JpLetter> 戦 </JpLetter>
            <JpLetter> 士 </JpLetter>
            <JpLetter> ク </JpLetter>
            <JpLetter> ラ </JpLetter>
            <JpLetter> ス </JpLetter>
          </LettersJp>
        </Japanesetitle>
      </WelcomeContainer>
      <IntroText>Words from Yamamoto Tsunetomo</IntroText>
    </LandingBackground>
  );
};
export default WelcomeScreen;

/* 葉隠 - hakagure */

/* 戦士クラス - warrior class */
