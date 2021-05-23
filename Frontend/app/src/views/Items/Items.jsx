import React, { Component } from "react";
import "./items.css";
import img from "./soap.jpg";
import Swal from "sweetalert2";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      cartItems: [],
    };
  }

  // Add new item to cart
  onAdd = (product) => {
    let isnew = true;
    // Map the current cart
    this.state.cartItems.map((x) => {
      // Check if item is existing or not
      if (x.itemID === product.itemID) {
        // If it is exisiting Qty will increment by 1
        x.qty = x.qty + 1;
        // Make false isnew
        isnew = false;
      }
    });
    // Check if it is a new item
    if (isnew) {
      // If its a new item make Qty 1
      product.qty = 1;
      // if it is a new item, Push it to the cart
      this.state.cartItems.push(product);
    }

    let newcart = this.state.cartItems;
    // Update current cart to new cart
    this.setState({
      cartItems: newcart,
    });
    // Make object stringify and save in local storage
    let stringCart = JSON.stringify(this.state.cartItems);
    localStorage.setItem("cart", stringCart);
  };
  // Remove product from cart
  onRemove = (product) => {
    // Check if item is existing or not
    this.state.cartItems.map((x) => {
      // Check if item is existing or not
      if (x.itemID === product.itemID) {
        // If item Qty > 1. Qty will decrement by 1
        if (x.qty > 1) {
          x.qty = x.qty - 1;
        } else {
          // If it is equal to 1, get product index
          const index = this.state.cartItems.indexOf(product);
          if (index > -1) {
            // Remove item from the cart
            this.state.cartItems.splice(index, 1);
          }
        }
      }
      let newcart = this.state.cartItems;
      // Update current cart to new cart

      this.setState({
        cartItems: newcart,
      });
    });
    // Make object stringify and save in local storage

    let stringCart = JSON.stringify(this.state.cartItems);
    localStorage.setItem("cart", stringCart);
  };

  componentDidMount() {
    // Get item data from DB
    fetch("http://localhost:8280/items/findAllItems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // Set data to state
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    // Check if user have previous cart or not
    let localcart = localStorage.getItem("cart");
    localcart = JSON.parse(localcart);
    if (localcart) {
      this.state.cartItems = localcart;
    }
  }

  render() {
    // Set data to display in body
    const { error, isLoaded, items, cartItems } = this.state;
    const itemsPrice = this.state.cartItems.reduce(
      (a, c) => a + c.qty * c.price,
      0
    );
    const totalPrice = itemsPrice;

    return (
      <div>
        <div className="col-md-9 col-lg-9">
          <section id="team" class="team">
            <div class="container" data-aos="fade-up">
              {/* <h1 className="text-center mb-5">Product List</h1> */}

              <div class="row gy-4">
                {items.map((item) => (
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
                          <p class="text-justify mr-3 ml-3">
                            {item.itemDescription}
                          </p>
                          <p class="text-justify">seller : {item.sellerName}</p>
                        </div>
                        <div class="">
                          <button
                            class="team-btn"
                            data-id="1"
                            onClick={() => this.onAdd(item)}
                          >
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
                    <button
                      onClick={() => this.onRemove(item)}
                      className="remove"
                    >
                      -
                    </button>{" "}
                    <button onClick={() => this.onAdd(item)} className="add">
                      +
                    </button>
                  </div>

                  <div className="col-5 text-right">
                    {item.qty} x Rs.{item.price.toFixed(2)}
                  </div>
                </div>
              ))}

              {cartItems !== 0 && (
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
                  {/* <div className="row">
                    <div className="col-6">Shipping Price</div>
                    <div className="col-1 text-right">
                      Rs.{shippingPrice.toFixed(2)}
                    </div>
                  </div> */}

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
                    <button
                      onClick={() =>
                        Swal.fire({
                          title: "Delivery options!",
                          width: 600,
                          padding: "3em",
                          showDenyButton: true,
                          showCancelButton: true,

                          confirmButtonText: `Home Delivery`,
                          denyButtonText: `Self Pickup`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            window.location = "/deliverymethod";
                          } else if (result.isDenied) {
                            window.location = "/paymentmethod";
                          }
                        })
                      }
                      className="checkout-btn"
                    >
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
}
