import React from "react";
import FavoriteItemList from "../Component/FavoriteItemList";
function Favorite() {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
        }}
      >
        <FavoriteItemList></FavoriteItemList>
      </div>
    </div>
  );
}

export default Favorite;
