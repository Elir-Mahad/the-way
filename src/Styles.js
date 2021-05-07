import styled from "styled-components";
// Background images
import samuraiguard from "./assets/samurai_infront_of_temple.jpg";
import samuraiontemple from "./assets/samurai_on_top_of_temple.jpg";
import blackbackground from "./assets/black.png";

//-------------------------------------- General styles

// TopBar

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: black;
  padding: 0.5rem;
  top: 0;
`;

//Menu

export const MenuBox = styled.div``;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  height: 27rem;
  width: 12rem;
  position: absolute;
  top: 66px;
  left: 1px;
`;

export const ItemAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;

export const MenuItemIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
`;

export const MenuIconContainer = styled.button`
  display: flex;
  background-color: black;
  color: white;
  border: 2px solid white;
  justify-content: center;
  border-radius: 50%;
  padding: 0.7rem;
`;

// BasketHeart

export const BasketAndCountBox = styled.div`
  //
`;

export const BasketAndCount = styled.div`
  display: flex;
  background-color: black;
  color: white;
  border: 2px solid white;
  justify-content: center;
  border-radius: 50%;
  padding-bottom: 0.7rem;
  padding-top: 0.7rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

export const ItemCount = styled.p`
  font-size: 1.2rem;
  // color: black;
  text-align: center;
  position: relative;
  top: 12px;
  right: 3px;
`;

// ------------------------------------- Page specific styles

// Landing

export const LandingBackground = styled.div`
  background-image: url(${samuraiguard});
  height: 88vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// Important:The code in the background image
// makes the image take up the full height of the screen.
// The height needs to be adjusted, based on the screen,
//  so that there is no scroll on the screen.
// For the the landing, i didn't want for there to be any scrolling,
// so i set the height to 91.5vh;

export const WelcomeContainer = styled.div`
  //
`;

export const Japanesetitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LettersJp = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const JpLetter = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: white;
  width: 2.5rem;
  padding: 0.5rem;
`;

export const IntroText = styled.p`
  font-size: 1.3rem;
  text-align: center;
  width: 100%;
  color: white;
  background-color: black;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  position: fixed;
  bottom: 0;
`;

// Synopsis

export const SynopsisBackground = styled.div`
  background-image: url(${samuraiontemple});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// Important:The code in the background image
// makes the image take up the full height of the screen.

export const SynopsisContainer = styled.div`
  justify-content: center;
  padding: 2rem;
  height: 40rem;
`;

export const DescriptionTextOne = styled.p`
  font-size: 1.1rem;
  text-align: left;
  margin: 1rem;
`;
export const DescriptionTextTwo = styled.p`
  font-size: 1.1rem;
  text-align: right;
  margin: 1rem;
`;

// User guide

export const UserGuideBackground = styled.div`
  background-image: url(${samuraiontemple});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// Important:The code in the background image
// makes the image take up the full height of the screen.

export const UserGuideContainer = styled.div`
  padding: 2rem;
  height: 40rem;
`;

export const UserGuideInstruction = styled.p`
  font-size: 1.1rem;
  margin: 0.5rem;
`;

//Liked Quotes

export const NoLikedQuotesContainer = styled.p`
  background-color: black;
  padding: 10;
`;
export const NoLikedQuotesText = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 5;
`;
export const LikedQuotesTitle = styled.p`
  text-align: center;
  font-size: 17px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 1rem;
  border-top-width: 1rem;
  background-color: white;
`;

// Quotes styles

export const BackgroundImageContainer = styled.div`
  background-image: url(${blackbackground});
  background-size: cover;
`;

export const CategoryScreen = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const QuoteBox = styled.div`
  background-color: black;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const TopTextIcon = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const TextIcon = styled.div`
  display: flex;
  flexdirection: row;
  alignitems: center;
`;

export const Tag = styled.h3`
  font-size: 1.1rem;
  font-weight: 100;
`;

export const Quotetitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 100;
`;

export const QuotesLeft = styled.div`
  color: white;
  font-size: 2rem;
`;

export const QuotesRight = styled.div`
  color: white;
  font-size: 2rem;
  display: flex;
  align-self: flex-end;
`;

export const TextAndQuotes = styled.div`
  padding: 0.5rem;
  display: flex;
`;

export const TheQuote = styled.p`
  color: white;
  font-size: 1.2rem;
  margin: 1rem;
  // background-color: red;
  text-align: left;
`;

export const CategoryIcons = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const IconButton = styled.button`
  background-color: white;
  border: none;
`;
