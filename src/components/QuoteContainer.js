import React, { useState } from "react";
import "../App.css";
import {
  CategoryIcons,
  QuoteBox,
  QuotesRight,
  QuotesLeft,
  Quotetitle,
  Tag,
  TextAndQuotes,
  TextIcon,
  TheQuote,
  TopTextIcon,
  BackgroundImageContainer,
  IconButton,
} from "../Styles";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
//
import SubjectIcon from "@material-ui/icons/Subject";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import FavoriteIcon from "@material-ui/icons/Favorite";
//
import { useStateValue } from "../StateProvider";

function QuoteContainer({ id, tag, title, quoteText }) {
  // split apart the object, and grab the id, title, and quote text

  //
  const [{}, dispatch] = useStateValue();
  // THIS IS THE DATA LAYER FROM STATE PROVIDER
  // THIS IS USUALLY SUMMONED
  // WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
  // OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

  const addToBasket = () => {
    // console.log();
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET", // this is the action.type from the reducer.js
      item: {
        id: id, // fetch the id of the item that's being added
        tag: tag,
        title: title,
        quoteText: quoteText,
      },
    });
  };

  // const AddToBaskeAndChangeColor = () => {
  //   addToBasket();
  //   changeColor();
  // };

  return (
    <QuoteBox>
      <BackgroundImageContainer>
        {/* Top texts and icons below */}
        <TopTextIcon>
          <TextIcon>
            <SubjectIcon />
            <Tag>{tag}</Tag>
          </TextIcon>
          <TextIcon>
            <Quotetitle> {title}</Quotetitle>
            <FormatListNumberedRtlIcon />
          </TextIcon>
        </TopTextIcon>
        {/* The actual quote is below */}
        <TextAndQuotes>
          <QuotesLeft>
            <FaQuoteLeft />
          </QuotesLeft>
          <TheQuote>{quoteText}</TheQuote>
          <QuotesRight>
            <FaQuoteRight />
          </QuotesRight>
        </TextAndQuotes>
        {/* Liked icon below */}
        <CategoryIcons>
          <IconButton onClick={addToBasket}>
            <FavoriteIcon />
          </IconButton>
        </CategoryIcons>
        {/*  */}
      </BackgroundImageContainer>
    </QuoteBox>
  );
}

// f4f4f2

export default QuoteContainer;
