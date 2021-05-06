import styled from "styled-components";
import blackbackground from "./assets/black.png";

export const MenuBox = styled.div`
  position: sticky;
  top: 0;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: black;
  height: 20rem;
  width: 15rem;
  position: absolute;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  margin-left: 1rem;
`;

export const MenuIconContainer = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  // background-color: white;
  border: none;
`;

export const WelcomeContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Japandengtitles = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LettersEng = styled.div`
  background-color: black;
  border-width: 3rem;
  border-color: #222831;
  border-radius: 2rem;
`;

export const LettersJp = styled.div`
  background-color: black;
  border-width: 3rem;
  border-color: #222831;
  border-radius: 2rem;
`;

export const EngLetter = styled.p`
  font-size: 2rem;
  text-align: center;
  color: white;
  width: 3rem;
  padding: 1rem;
`;

export const JpLetter = styled.p`
  font-size: 2rem;
  text-align: center;
  color: white;
  width: 3rem;
  padding: 1rem;
`;

// SynopsisScreen
export const Synopsis = styled.div`
  justify-content: center;
  border: 1px solid black;
  margin: 2rem;
`;

export const DescriptionTextOne = styled.p`
  font-size: 1rem;
  padding: 1rem;
  text-align: left;
  border: 1px solid black;
  margin: 1rem;
`;
export const DescriptionTextTwo = styled.p`
  font-size: 1rem;
  padding: 1rem;
  text-align: right;
  border: 1px solid black;
  margin: 1rem;
`;

export const UserGuide = styled.div`
  //
`;

export const UserGuideInstruction = styled.p`
  font-size: 1rem;
  background-color: lightgrey;
  padding: 1rem;
  margin: 1rem;
`;

// Other Quotes Container styles

export const CategoryScreen = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const BackgroundImageContainer = styled.div`
  background-image: url(${blackbackground});
  background-size: cover;
`;

export const QuoteBox = styled.div`
  background-color: black;
  margin: 15px;
`;

export const TopTextIcon = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextIcon = styled.div`
  display: flex;
  flexdirection: row;
  alignitems: center;
`;

export const Tag = styled.h3`
  font-size: 1.2rem;
  font-weight: 100;
`;

export const Quotetitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 100;
`;

export const QuotesLeft = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const QuotesRight = styled.div`
  color: white;
  font-size: 2.5rem;
  :right ;
`;

export const TextAndQuotes = styled.div`
  padding: 4rem;
  display: flex;
`;

export const TheQuote = styled.p`
  color: white;
  font-size: 1.5rem;
  margin: 2rem;
  text-align: left;
`;

export const CategoryIcons = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
