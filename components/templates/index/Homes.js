import Home from "@/components/modules/Home";
import React from "react";
import db from "@/data/db";
function Homes() {
  return (
    <div class="homes">
      {db.homes.slice(0, 6).map((item) => (
        <Home key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Homes;
