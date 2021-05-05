import React from "react";
import QuoteContainer from "../QuoteContainer";
// import { useStateValue } from "../StateProvider";
import { CategoryScreen } from "../../Styles";

//!------------------------------------------------------------IMPORTS

const Speech = () => {
  //
  //   const [{ basket }] = useStateValue();
  //
  // console.log(basket);
  //
  return (
    <CategoryScreen>
      <div>
        {/*  */}
        <QuoteContainer
          title="Jest #1"
          id="Spe1"
          tag="Speech"
          quoteText="A warrior should speak carefully or else he may say things like,
                    “I’m a coward,” or “At that time I’d probably run,” or “How
                    frightening,”."
        />
        <QuoteContainer
          title="Jest #2"
          id="Spe1"
          tag="Speech"
          quoteText="These are words that should not be said even in jest.
                    He should set his mind to this beforehand."
        />
        <QuoteContainer
          title="One word #1"
          id="Spe3"
          tag="Speech"
          quoteText="At times of great trouble or disaster, one word will suffice.
                    "
        />
        <QuoteContainer
          title="One word #2"
          id="Spe4"
          tag="Speech"
          quoteText="At times of happiness, too, one word will be enough."
        />
        <QuoteContainer
          title="One word #3"
          id="Spe5"
          tag="Speech"
          quoteText="And when meeting or talking with others, one word will do."
        />
        <QuoteContainer
          title="One word #4"
          id="Spe6"
          tag="Speech"
          quoteText="If there is something that could not be done properly without
                    words, make an effort to settle things by putting ten words into
                    one."
        />
        <QuoteContainer
          title="One word #5"
          id="Spe7"
          tag="Speech"
          quoteText="One should think well and then speak.
                    It is a matter of putting forth one’s whole effort and having the
                    correct attitude previously."
        />
        <QuoteContainer
          id="Spe8"
          tag="Speech"
          quoteText="Never sit sloppily whether at home or in some other place."
        />
        <QuoteContainer
          title="Hidden #1"
          id="Spe9"
          tag="Speech"
          quoteText="People who talk on and on about matters of little importance
                    probably have some complaint in the back of their mind."
        />
        <QuoteContainer
          title="Hidden #2"
          id="Spe10"
          tag="Speech"
          quoteText="But in order to be ambiguous and to hide this they repeat what
                    they are saving over and over."
        />
        <QuoteContainer
          id="Spe11"
          tag="Speech"
          quoteText="It is best to know your own ability well, to put forth effort in
                    your endeavours, and to be discreet in speech."
        />
        <QuoteContainer
          title="Not speaking #1"
          id="Spe12"
          tag="Speech"
          quoteText="The essentials of speaking are in not speaking at all."
        />
        <QuoteContainer
          title="Not speaking #2"
          id="Spe13"
          tag="Speech"
          quoteText="If you think that you can finish something without speaking, finish it
                    without saying a single word."
        />
        <QuoteContainer
          title="Not speaking #3"
          id="Spe14"
          tag="Speech"
          quoteText="If there is something that cannot be accomplished without
                    speaking, one should speak with few words."
        />
        <QuoteContainer
          id="Spe15"
          tag="Speech"
          quoteText="To open one’s mouth indiscriminately brings shame."
        />
      </div>
    </CategoryScreen>
  );
};
export default Speech;
