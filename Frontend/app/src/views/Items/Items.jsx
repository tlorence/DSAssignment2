import React, { Component,useState } from "react";
import "./items.css";
import img from "./login.jpg";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      error: null,
      isLoaded: false,
      items: [],
      setCart:0
    };
  }


  addItem = (item) => {
    // let [cart, setCart] = useState([])
    let cart = localStorage.getItem("cart");
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = cart;
    
    //assuming we have an ID field in our item
    let itemadd = item;
    console.log(cartCopy);
    
    //look for item in cart array
    const exist = cartCopy.find((x) => x.itemID === itemadd.itemID);
    
    //if item already exists
    if (exist) {
      this.state.setCart(
        cartCopy.map((x) =>
          x.itemID === itemadd.itemID ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      this.state.setCart([...itemadd, { ...itemadd, qty: 1 }]);
    }
    
    //update app state
    this.state.setCart(cartCopy)
    
    //make cart a string and store in local space
    // let stringCart = JSON.stringify(cartCopy);
    // localStorage.setItem("cart", stringCart)
    
  }


  componentDidMount() {
    fetch("http://localhost:9911/item/findAllItems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
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
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div>
        <div className="col-md-9 col-lg-9">
          <section id="team" class="team">
            <div class="container" data-aos="fade-up">
              <h1 className="text-center mb-5">Product List</h1>

              <div class="row gy-4 ps-5">
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
                          <button class="team-btn" data-id="1" onClick={()=>this.addItem(item)}>
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
          <div className="sidenav"></div>
        </div>
      </div>
    );
  }
}
