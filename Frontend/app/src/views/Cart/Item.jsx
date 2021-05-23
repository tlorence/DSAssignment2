import React, { useState, useEffect } from "react";
import "./items.css";
import img from "./login.jpg";

export default function Item(props) {
  const { products } = props;
  // console.log(products);
  // let localCart = localStorage.getItem("cart");
  // const initialState = () =>
  //   Array(
  //     Array.isArray(window.localStorage.getItem("cart"))
  //       ? window.localStorage.getItem("cart")
  //       : [] || []
  //       );
  const initialState = () => {
    let cart = localStorage.getItem("cart");
    return Array.isArray(cart) ? cart : [];
  };
  let cart = initialState()
  debugger;
  let [cartItems, setCartItems] = useState(initialState);

  const onAdd = (product) => {
    // let cartCopy = cartItems;
    // let items = cartItems;
    // let isnew = true;
    // items.map((x) => {
    //   if (x.itemID === product.itemID) {
    //     x.qty = x.qty + 1;
    //     isnew = false;
    //   }
    // });
    // if (isnew) {
    //   product.qty = 1;
    //   items.push(product);
    // }
    // setCartItems(items);
    // localStorage.setItem("cart", items);

    let exist = cartItems.find((x) => x.itemID === product.itemID);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.itemID === product.itemID ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      // let stringCart = JSON.stringify(cartItems);
      // localStorage.setItem("cart", stringCart);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  // let items = cartItems;
  // let isnew = true;
  // items.map((x) => {
  //   if (x.itemID === product.itemID) {
  //     x.qty = x.qty + 1;
  //     isnew = false;
  //   }
  // });
  // if (isnew) {
  //   product.qty = 1;
  //   items.push(product);
  // }
  // setCartItems(items);
  // localStorage.setItem("cart", items);

  useEffect(() => {
    //turn it into js
    // localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    // debugger;
    // if (localCart && Array.isArray(localCart)) setCartItems(localCart);
    // localStorage.setItem("cart", cartItems);
  }, []);

  // useEffect(function persistForm() {
  //   localStorage.setItem("cart", cartItems);
  // });
  useEffect(() => window.localStorage.setItem("cart", cartItems), [cartItems]);

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.itemID === product.itemID);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.itemID !== product.itemID));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.itemID === product.itemID ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // //   const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + shippingPrice;

  const itemsPrice = 0;
  //   const taxPrice = itemsPrice * 0.14;
  const shippingPrice = 0;
  const totalPrice = 0;
  return (
    <div>
      <div className="col-md-9 col-lg-9">
        <section id="team" class="team">
          <div class="container" data-aos="fade-up">
            <h1 className="text-center mb-5">Product List</h1>

            <div class="row gy-4 ps-5">
              {products.map((item) => (
                <div
                  class="col-lg-4 col-md-4 d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="member">
                    <div class="member-img">
                      <img src={img} class="img-fluid" alt="team member" />
                    </div>
                    <div class="member-info">
                      <div class="member-descp">
                        <h4>{item.itemName}</h4>
                        <span>Rs : {item.price.toFixed(2)}</span>
                        <p class="text-justify ">{item.itemDescription}</p>
                        <p class="text-justify">seller : {item.sellerName}</p>
                      </div>
                      <div class="">
                        <button class="team-btn" onClick={() => onAdd(item)}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="col-md-3 col-lg-3">
        <div className="sidenav">
          <h2 className="m-2">Cart Items</h2>
          <div className="m-2">
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row mb-1">
                <div className="col-4">{item.itemName}</div>
                <div className="col-3">
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>{" "}
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>

                <div className="col-5 text-right">
                  {/* {item.qty} x Rs.{item.price.toFixed(2)} */}
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row">
                  <div className="col-6">Items Price</div>
                  <div className="col-1 text-right">
                    Rs.{itemsPrice.toFixed(2)}
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-6">Tax Price</div>
                  <div className="col-1 text-right">Rs.{taxPrice.toFixed(2)}</div>
                </div> */}
                <div className="row">
                  <div className="col-6">Shipping Price</div>
                  <div className="col-1 text-right">
                    Rs.{shippingPrice.toFixed(2)}
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>Rs.{totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
                <hr />
                <div className="text-center">
                  <button onClick={() => alert("")} className="checkout-btn">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
