import React, { useState } from "react";
import StarFull from "../../assets/Images/star_rate-24px 2.svg";
import StarEmpty from "../../assets/Images/star_rate-24px 5.svg";

export default function Star({ratings}) {
    const totalStar = 5;
    const activeStar = ratings
  return (
    <span className="IntelContainerRating">
        {[...new Array(totalStar)].map((arr, index) => {
        return index < activeStar ? <img src={StarFull} /> : <img src={StarEmpty} />;
      })}
    </span>
  )
}
