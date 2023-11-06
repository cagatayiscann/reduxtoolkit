import React from "react";

import ProductList from "../../Components/ProductList/ProductList";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.mainWrapper}>

      <ProductList />
    </div>
  );
};

export default Home;