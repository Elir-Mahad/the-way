import React from "react";
import {
  CategoryIcons,
  QuoteBox,
  Quotetitle,
  Tag,
  TextAndQuotes,
  TextIcon,
  TheQuote,
  TopTextIcon,
} from "../Styles";
//
//
// import { MaterialIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
//
// import { useStateValue } from "./StateProvider";

function QuoteContainer({ id, tag, title, quoteText }) {
  // split apart the object, and grab the id, title, and quote text

  //
  //   const [{}, dispatch] = useStateValue();
  // THIS IS THE DATA LAYER FROM STATE PROVIDER
  // THIS IS USUALLY SUMMONED
  // WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
  // OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

  //   const addToBasket = () => {
  //     // console.log();
  //     // add item to basket
  //     dispatch({
  //       type: "ADD_TO_BASKET", // this is the action.type from the reducer.js
  //       item: {
  //         id: id, // fetch the id of the item that's being added
  //         tag: tag,
  //         title: title,
  //         quoteText: quoteText,
  //       },
  //     });
  //   };

  return (
    <QuoteBox>
      <TopTextIcon>
        {/* Tag and icon */}
        <TextIcon>
          {/* <MaterialIcons name="subject" size={24} color="black" /> */}
          <Tag>{tag}</Tag>
        </TextIcon>
        {/* Quote title and icon */}
        <TextIcon>
          <Quotetitle> {title}</Quotetitle>
          {/* <MaterialIcons
							name="format-list-numbered-rtl"
							size={24}
							color="black"
						/> */}
        </TextIcon>
      </TopTextIcon>
      {/* The actual quote is below */}
      <TextAndQuotes>
        {/* <LeftQuote /> */}
        <TheQuote>{quoteText}</TheQuote>
        {/* <RightQuote /> */}
      </TextAndQuotes>
      {/*  */}

      {/* <CategoryIcons>
				<TouchableHighlight
					//
					onPress={addToBasket}
					underlayColor="grey"
					style={{ padding: 5 }}
				>
					<AntDesign
						//
						name="heart"
						size={22}
						color="black"
					/>
				</TouchableHighlight>
			</CategoryIcons> */}
    </QuoteBox>
  );
}

// f4f4f2

export default QuoteContainer;
