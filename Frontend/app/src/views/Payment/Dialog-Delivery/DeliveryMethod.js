import { Link } from "react-router-dom";
import "../Dialog-Payment/PaymentMethod.css";
import useForm from "../useForm";
import validateForm from "../validateForm";

import React, { Component } from "react";

export default class DeliveryMethod extends Component {
  state = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  deliveryMethod = (e) => {
    e.preventDefault();
    fetch("http://localhost:8280/dummyService/delivery", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(
        this.setState({
          fullName: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zip: "",
        })
      )
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="DeliveryBody">
          <div className="col-75">
            <div className="containerDelivery container">
              <form className="form">
                <div className="rowDelivery">
                  <div className="col-50">
                    <h3>Delivery Information</h3>
                    <label className="labelDelivery">
                      <i className="fa fa-user"></i> Full Name *
                    </label>
                    <input
                      className="DeliveryText"
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Himantha Amarathunga"
                      required
                      value={this.state.fullName}
                      onChange={this.onChange}
                    />
                    {/* {errors.fullName && <p> {errors.fullName}</p>} */}
                    <label className="labelDelivery">
                      <i className="fa fa-envelope"></i> Email *
                    </label>
                    <input
                      className="DeliveryText"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="himantha@example.com"
                      required
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {/* {errors.email && <p> {errors.email}</p>} */}
                    <label className="labelDelivery">
                      <i className="fa fa-address-card-o"></i> Address *
                    </label>
                    <input
                      className="DeliveryText"
                      type="text"
                      id="address"
                      name="address"
                      placeholder="542. 15th Street"
                      required
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                    {/* {errors.address && <p> {errors.address}</p>} */}
                    <label className="labelDelivery">
                      <i className="fa fa-institution"></i> City *
                    </label>
                    <input
                      className="DeliveryText"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Colombo"
                      required
                      value={this.state.city}
                      onChange={this.onChange}
                    />
                    {/* {errors.city && <p> {errors.city}</p>} */}
                    <div className="rowDelivery">
                      <div className="col-50">
                        <label className="labelDelivery">
                          State/Province *
                        </label>
                        <input
                          className="DeliveryText"
                          type="text"
                          id="state"
                          name="state"
                          placeholder="Western"
                          required
                          value={this.state.state}
                          onChange={this.onChange}
                        />
                        {/* {errors.state && <p> {errors.state}</p>} */}
                      </div>
                      <div className="col-50">
                        <label className="labelDelivery">Zip *</label>
                        <input
                          className="DeliveryText"
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="10001"
                          required
                          value={this.state.zip}
                          onChange={this.onChange}
                        />
                        {/* {errors.zip && <p> {errors.zip}</p>} */}
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/paymentmethod">
                  <input
                    type="submit"
                    value="Place Order"
                    className="btnPlaceOrder"
                  />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const DeliveryMethod = ({ submitForm }) => {
//   const { handleChange, values, handleSubmit, errors } = useForm(
//     validateForm,
//     submitForm
//   );
//   // const [openPopup, setOpenPopup] = useState(false);

//   return (

//   );
// };

// export default DeliveryMethod;
