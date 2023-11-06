import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../constants/Status";
import { fetchProducts } from "../../Redux/features/Product/ProductSlice";

import ProductCard from "../ProductCard/ProductCard";
import styles from "./productlist.module.scss";
import Loader from "../Loader/Loader";

const ProductList = () => {
  const dispatch = useDispatch();

  // Access the products state from the Redux store
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === STATUS.LOADING) {
    return <Loader />;
  }

  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <div className={styles.productListWrapper} id="product-list">
      <Container>
        <div className={styles.productList}>
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
