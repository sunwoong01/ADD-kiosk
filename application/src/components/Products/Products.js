import React, { useState, useEffect, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import Axios from "axios";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";
import Product from "./Product/Product";

const products = (props) => {
  // Retrieving current order summary from database
  // const [ products, setProducts ] = useState([]);

  useEffect(() => {
    initLocalStorage();
    Axios.get("http://localhost:3001/api/retrieve-product-listing").then(
      (response) => {
        // setProducts(response.data);

        // Save to global state
        props.onSaveProductListing(response.data);
      }
    );
  }, []);

  let products = props.productsGlobal;

  // console.log("products", products);
  // console.log(props);
  if (props.searchInputValue.length > 0) {
    let filteredItems = products.filter((item) =>
      item.prod_name.toLowerCase().includes(props.searchInputValue)
    );
    products = filteredItems;
  }

  const initLocalStorage = () => {
    console.log("동작확인");

    if (0 === window.localStorage.length) {
      for (let i = 0; i < products.length; i++) {
        window.localStorage.setItem(
          i,
          JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        );
      }
    }
  };
  console.log(products.length - 1);

  return (
    <React.Fragment>
      <h4 className="mt-3">Study Room</h4>
      <Row>
        {products.map((product, index) => (
          <Col md={3} sm={6} key={index}>
            <Product
              product={product}
              index={index}
              localStorageData={JSON.parse(window.localStorage.getItem(index))}
            />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

// STORE
const mapStateToProps = (global_state) => {
  return {
    data: global_state.selectedItems,
    searchInputValue: global_state.searchInputValue,
    productsGlobal: global_state.products,
  };
};

// ACTION
const mapDispatchToProps = (dispatch) => {
  return {
    onSaveProductListing: (prod_db) =>
      dispatch({ type: actionTypes.ALL_PRODUCT_LISTING, products: prod_db }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(products);
// export default products;
