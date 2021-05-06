import React from "react";
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
} from "../Styles";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
//
import SubjectIcon from "@material-ui/icons/Subject";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import DeleteIcon from "@material-ui/icons/Delete";
//
import { useStateValue } from "../StateProvider";

function LikedQuotesContainer({ id, tag, title, quoteText }) {
  //
  const [{}, dispatch] = useStateValue();
  // THIS IS THE DATA LAYER FROM STATE PROVIDER
  // THIS IS USUALLY SUMMONED
  // WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
  // OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      // this is the action.type from the reducer.js
      id: id,
      // fetch the id of the item that's being removed
    });
  };

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
          <button onClick={removeFromBasket} style={{ padding: 5 }}>
            <DeleteIcon />
          </button>
        </CategoryIcons>
        {/*  */}
      </BackgroundImageContainer>
    </QuoteBox>
  );
}

export default LikedQuotesContainer;
