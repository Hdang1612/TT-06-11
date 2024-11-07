import React from "react";
import FavoriteItem from "../FavoriteItem";
import { useSelector } from "react-redux";
import { favoriteListSelectors } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Typography ,Empty } from "antd";
const { Title } = Typography;
function FavoriteItemList() {
  const favoriteProducts = useSelector(favoriteListSelectors);
  const dispatch = useDispatch();

  return (
    <div style={{ height: "500px", overflowY: "auto" }}>
      <Title level={3} style={{ textAlign: "left", marginBottom: "20px" }}>
        Favorite Product
      </Title>
      {favoriteProducts.length === 0 ? (
        <Empty description="Danh sách yêu thích trống" />
      ) : (
        favoriteProducts.map((product) => (
          <FavoriteItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default FavoriteItemList;
