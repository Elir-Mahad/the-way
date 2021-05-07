import React from "react";
//
import { Link } from "react-router-dom";
//
import FavoriteIcon from "@material-ui/icons/Favorite";
//
import { useStateValue } from "./StateProvider";
import { BasketAndCount, BasketAndCountBox, ItemCount } from "./Styles";

//!------------------------------------IMPORTS

const BasketHeartIcon = () => {
  const [{ basket }] = useStateValue();
  //
  console.log(basket);
  //
  return (
    <BasketAndCountBox className="basket">
      <Link style={{ textDecoration: "none" }} to="/favourite">
        <BasketAndCount>
          <FavoriteIcon />
          <ItemCount>{basket?.length}</ItemCount>
        </BasketAndCount>
      </Link>
    </BasketAndCountBox>
  );
};

export default BasketHeartIcon;
