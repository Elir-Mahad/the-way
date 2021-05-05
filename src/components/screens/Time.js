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
          //
          id="1edu"
          tag="Education"
          quoteText="When one is writing a letter, he should think that the recipient
					will make it into a hanging scroll"
        />
        <QuoteContainer
          //
          id="2edu"
          tag="Education"
          quoteText="We learn about the sayings and deeds of the men of old in order to
					entrust ourselves to their wisdom and prevent selfishness."
        />
        <QuoteContainer
          //
          id="3edu"
          tag="Education"
          quoteText="A person who knows a little will act arrogant. When someone knows
					something well, he is gentle."
        />
        <QuoteContainer
          //
          id="4edu"
          tag="Education"
          quoteText="Scholars are men who with wit and speech hide their own true
					cowardice and greed."
        />
        <QuoteContainer
          //
          id="5edu"
          tag="Education"
          title="Calculation #1"
          quoteText="Calculating people are contemptible.
					The reason for this is that calculation deals with loss and gain.
					"
        />
        <QuoteContainer
          //
          id="6edu"
          tag="Education"
          title="Calculation #2"
          quoteText="Death is considered loss and life is considered gain. 
					Thus, death is something that such a person does not care for,and he is contemptible."
        />
        <QuoteContainer
          //
          id="7edu"
          tag=" Education"
          quoteText="There are times when extensive knowledge becomes a hindrance.
					Knowing the circumstances can be an obstruction in everyday
					affairs."
        />
        <QuoteContainer
          //
          id="8edu"
          tag=" Education"
          title="Seven breaths #1"
          quoteText="Discrimination will never be brought to a conclusion."
        />
        <QuoteContainer
          //
          id="9edu"
          tag=" Education"
          title="Seven breaths #2"
          quoteText="With an intense, fresh and undelaying spirit, one must make his judgments
					within the space of seven breaths."
        />
        <QuoteContainer
          //
          id="10edu"
          tag=" Education"
          title="Seven breaths #3"
          quoteText="It is a matter of being determined and having the spirit to break
					right through to the other side."
        />
        <QuoteContainer
          //
          id="11edu"
          tag=" Education"
          title="Wisdom #1"
          quoteText="A man received an oral teaching concerning the Bravery. He neither
					wrote it down nor committed it to memory but rather forgot it
					completely."
        />
        <QuoteContainer
          //
          id="12edu"
          tag=" Education"
          title="Wisdom #2"
          quoteText="Then, in facing real situations, he acted on impulse and the
					things that he had learned became wisdom of his own."
        />
        <QuoteContainer
          //
          id="13edu"
          tag=" Education"
          quoteText="If one does not strike out by simply closing his eyes and rushing
					into the enemy, even if it is only one step, he will be of no use."
        />
        <QuoteContainer
          //
          id="14edu"
          tag=" Education"
          quoteText="When the time comes, there is no moment for reasoning. And if you
					have not done your inquiring beforehand , there is most often
					shame."
        />
        <QuoteContainer
          //
          id="15edu"
          tag=" Education"
          quoteText="The resourcefulness of times of peace is the military preparation
					for times of war."
        />
      </div>
    </CategoryScreen>
  );
};
export default Time;
