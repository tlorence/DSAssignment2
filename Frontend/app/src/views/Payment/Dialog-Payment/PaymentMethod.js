// import React from "react";
import "./PaymentMethod.css";
import useForm from "../useForm";
import validateForm from "../validateForm";
import Swal from "sweetalert2";

import React, { Component } from "react";

export default class PaymentMethod extends Component {
  state = {
    nameOnCard: "",
    cardNum: "",
    expDate: "",
    cvv: "",
    address: "",
    phone: "",
    nameOfCustomer: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitCardPayment = (e) => {
    e.preventDefault();
    fetch("http://localhost:8280/dummyService/creditCard", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(
        this.setState({
          nameOnCard: "",
          cardNum: "",
          expDate: "",
          cvv: "",
          address: "",
          phone: "",
          nameOfCustomer: "",
        })
      )
      .then(() => {
        localStorage.clear("cart");
        Swal.fire({
          icon: "success",
          title: "Your order was placed successfully!",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = "/store";
          }
        });
      })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  submitViaPhone = (e) => {
    e.preventDefault();
    fetch("http://localhost:8280/dummyService/mobileBill", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(
        this.setState({
          nameOnCard: "",
          cardNum: "",
          expDate: "",
          cvv: "",
          address: "",
          phone: "",
          nameOfCustomer: "",
        })
      )
      .then(() => {
        localStorage.clear("cart");
        Swal.fire({
          icon: "success",
          title: "Your order was placed successfully!",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = "/store";
          }
        });
      })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="PaymentBody">
          <button id="PhonePaymentBtn"> Pay via Phone</button>
          <button id="CardPaymentBtn">Pay via Card</button>
          <div className="rowPayment d-none" id="CardPayment">
            <div className="col-75">
              <div className="containerPayment">
                <form className="form" onSubmit={this.submitCardPayment}>
                  <div className="rowPayment">
                    <div className="col-50">
                      <h3>Card Payment</h3>
                      <label className="labelPayment">Accepted Cards</label>
                      <div className="icon-container">
                        <i className="fa fa-cc-visa" id="visa"></i>&nbsp;
                        <i className="fa fa-cc-amex" id="amex"></i>&nbsp;
                        <i className="fa fa-cc-mastercard" id="mastercard"></i>
                        &nbsp;
                        <i className="fa fa-cc-discover" id="discover"></i>
                      </div>
                      <label className="labelPayment">Name on Card *</label>
                      <input
                        className="PaymentText"
                        type="text"
                        id="nameOnCard"
                        name="nameOnCard"
                        placeholder="Name on Card"
                        required
                        value={
                          this.state.nameOnCard === null
                            ? ""
                            : this.state.nameOnCard
                        }
                        onChange={this.onChange}
                      />
                      {/* {errors.nameOnCard && <p> {errors.nameOnCard}</p>} */}
                      <label className="labelPayment">
                        Credit card number *
                      </label>
                      <input
                        className="PaymentText"
                        type="text"
                        id="cardNum"
                        name="cardNum"
                        placeholder="Enter Card Number"
                        required
                        value={this.state.cardNum}
                        onChange={this.onChange}
                      />
                      {/* {errors.cardNum && <p> {errors.cardNum}</p>} */}
                      <div className="rowPayment">
                        <div className="col-50">
                          <label className="labelPayment">Exp Date *</label>
                          <input
                            className="PaymentText"
                            type="text"
                            placeholder="MM/YY"
                            id="expDate"
                            name="expDate"
                            maxLength="5"
                            height="100%"
                            required
                            value={this.state.expDate}
                            onChange={this.onChange}
                          />
                          {/* {errors.expDate && <p> {errors.expDate}</p>} */}
                        </div>
                        <div className="col-50">
                          <label className="labelPayment">CVV *</label>
                          <input
                            className="PaymentText"
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="CVV"
                            maxLength="3"
                            required
                            value={this.state.cvv}
                            onChange={this.onChange}
                          />
                          {/* {errors.cvv && <p> {errors.cvv}</p>} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <label className="labelPayment">
                    <input type="checkbox" id="DifferentAddressCard" />
                    Shipping address is different from billing address
                  </label>
                  <div className="rowPayment d-none" id="ShippingAddressCard">
                    <label className="labelPayment">Shipping Address</label>
                    <input
                      className="PaymentText"
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Enter Shipping Address"
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                    {/* {errors.address && <p> {errors.address}</p>} */}
                  </div>
                  <input
                    type="submit"
                    value="Place Order"
                    className="btnPlaceOrder"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="rowPayment d-none" id="PhonePayment">
            <div className="col-75">
              <div className="container">
                <form className="form" onSubmit={this.submitViaPhone}>
                  <div className="rowPayment">
                    <div className="col-50">
                      <h3>Phone Payment</h3>
                      <div className="rowPayment">
                        <div className="col-50">
                          <label className="labelPayment">Phone Number *</label>
                          <input
                            className="PaymentText"
                            type="Phone"
                            placeholder="0762323456"
                            id="phone"
                            name="phone"
                            maxLength="10"
                            height="100%"
                            required
                            value={this.state.phone}
                            onChange={this.onChange}
                          />
                          {/* {errors.phone && <p> {errors.phone}</p>} */}
                        </div>
                        <div className="col-50">
                          <label className="labelPayment">Customer Name*</label>
                          <input
                            className="PaymentText"
                            type="text"
                            id="nameOfCustomer"
                            name="nameOfCustomer"
                            placeholder="Himantha Amarathunga"
                            required
                            value={this.state.nameOfCustomer}
                            onChange={this.onChange}
                          />
                          {/* {errors.nameOfCustomer && (
                            <p> {errors.nameOfCustomer}</p>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <label className="labelPayment">
                    <input type="checkbox" id="DifferentAddresPhone" />
                    Shipping address is different from billing address
                  </label>
                  <div className="rowPayment d-none" id="ShippingAddressPhone">
                    <label className="labelPayment">Shipping Address</label>
                    <input
                      className="PaymentText"
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Enter Shipping Address"
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                    {/* {errors.address && <p> {errors.address}</p>} */}
                  </div>
                  <input
                    type="submit"
                    value="Place Order"
                    className="btnPlaceOrder"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const PaymentMethod = ({ submitForm }) => {
//   const { handleChange, values, handleSubmit, handleOnChange, errors } =
//     useForm(validateForm, submitForm);

//   return (

//   );
// };

// export default PaymentMethod;
