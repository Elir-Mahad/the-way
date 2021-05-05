import React from "react";
import QuoteContainer from "../QuoteContainer";
// import { useStateValue } from "../StateProvider";
import { CategoryScreen } from "../../Styles";

//!------------------------------------------------------------IMPORTS

const Time = () => {
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
          id="Tm1"
          tag="Time"
          quoteText="If something is not brought to fruition over a period of twenty to
                    thirty years, it will not be of great merit."
        />

        <QuoteContainer
          id="Tm2"
          tag="Time"
          quoteText="Life is a succession of moments. Be true to the thought of the
                    moment [death] and avoid distraction."
        />

        <QuoteContainer
          id="Tm3"
          tag="Time"
          quoteText="Other than continuing to exert yourself, enter into nothing else,
                    but go to the extent of living single thought by single thought."
        />

        <QuoteContainer
          title="Neglect #1"
          id="Tm4"
          tag="Time"
          quoteText="Something that is not done at its time and at its place will
                    remain unfinished for a lifetime. "
        />

        <QuoteContainer
          title="Neglect #2"
          id="Tm5"
          tag="Time"
          quoteText="If one thinks about it later, he
                    will be negligent all his life."
        />

        <QuoteContainer
          title="Present #1"
          id="Tm6"
          tag="Time"
          quoteText="“right now” is ”at that time, ” and ”at that time” is ”right now”.
                    "
        />

        <QuoteContainer
          title="Present #2"
          id="Tm7"
          tag="Time"
          quoteText="One will miss the occasion if he thinks that these two are
                    different."
        />

        <QuoteContainer
          title="Present #3"
          id="Tm8"
          tag="Time"
          quoteText="For example, if one were called before the master to explain
                    something right away, he would most likely be perplexed."
        />

        <QuoteContainer
          title="Present #4"
          id="Tm9"
          tag="Time"
          quoteText="This is proof that he understands the two to be different."
        />

        <QuoteContainer
          title="Present #5"
          id="Tm10"
          tag="Time"
          quoteText="When one attempts to concentrate things in this manner, won’t
                    daily negligence and today’s lack of resolve be understood?"
        />
      </div>
    </CategoryScreen>
  );
};
export default Time;
