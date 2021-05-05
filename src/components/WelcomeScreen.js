//
import React from "react";
import {
  EngLetter,
  Japandengtitles,
  JpLetter,
  LettersEng,
  LettersJp,
  TextEng,
  //   WelcomeBackgroundImage,
  Welcome_container,
} from "../Styles";

//

//!------------------------------------------------------------IMPORTS

const WelcomeScreen = () => {
  //
  return (
    <Welcome_container>
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
        {/* 葉隠 - hakagure */}
        {/* 戦士クラス - warrior class */}
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
    </Welcome_container>
  );
};
export default WelcomeScreen;
