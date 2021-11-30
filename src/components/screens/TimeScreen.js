import React from "react";
import QuoteContainer from "../containers/QuoteContainer";
import { CategoryScreen } from "../../Styles";
import { data } from "../general-parts/Data";

//!------------------------------------------------------------IMPORTS

const Time = () => {
  //
  const quotesData = data.allquotes;
  //
  return (
    <CategoryScreen>
      <div>
        {/*  */}
        {quotesData.map((item) => (
          <QuoteContainer
            id={item.id}
            tag={item.tag}
            quoteText={item.quoteText}
          />
        ))}
      </div>
    </CategoryScreen>
  );
};
export default Time;
