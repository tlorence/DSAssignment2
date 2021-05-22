import React from "react";
import axios from "axios";
import "./AddItems.css";
// import M from 'materialize-css' 
// import 'materialize-css/dist/css/materialize.min.css';

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemID: 0,
      itemName: "",
      itemDescription: "",
      itemCategory: "",
      sellerName: "",
      price: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9911/item/findAllItems")
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          items: result.data,
        });
      });
    // console.log(this.state.items);
  }
  submit(evenet, itemID) {
    evenet.preventDefault();
    if (itemID === 0) {
      axios
        .post("http://localhost:9911/item/addItem", {
          itemID: this.state.itemID,
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          itemCategory: this.state.itemCategory,
          sellerName: this.state.sellerName,
          price: this.state.price,
        })
        .then(() => {
          this.setState({
            itemID: 0,
            itemName: "",
            itemDescription: "",
            itemCategory: "",
            sellerName: "",
            price: 0,
          });
        });
    } else {
      axios
        .put("http://localhost:9911/item/update", {
          itemID: this.state.itemID,
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          itemCategory: this.state.itemCategory,
          sellerName: this.state.sellerName,
          price: this.state.price,
        })
        .then(() => {
          // this.componentDidMount();
        });
    }
  }
  delete(itemID) {
    axios.delete("http://localhost:9911/item/delete/" + itemID).then(() => {
      this.componentDidMount();
    });
  }
  edit(itemID) {
    axios.get("http://localhost:9911/item/findAllItems/" + itemID).then((res) => {
      this.setState({
        itemID: res.data.itemID,
        itemName: res.data.itemName,
        itemDescription: res.data.itemDescription,
        itemCategory: res.data.itemCategory,
        sellerName: res.data.sellerName,
        price: res.data.price,
      });
    });
  }
  render() {
    const { isLoaded, items } = this.state;
    return (
      <div className="container-fluid">
        <div className="container" id="container1">
          <div className="row">
            <h2>Item Card</h2>
            <br></br>
            <div className="col s6">
              <form onSubmit={(e) => this.submit(e, this.state.itemID)}>
                <div className="input-field col s12">
                  <i className="material-icons prefix">note_add</i>
                  <input
                    type="number"
                    id="autocomplete-input"
                    className="autocomplete"
                    name="itemID"
                    onChange={(e) => this.setState({ itemID: e.target.value })}
                    value={this.state.itemID}
                  />
                  <label for="autocomplete-input">Item ID</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">add_shopping_cart</i>
                  <input
                    type="text"
                    id="autocomplete-input"
                    className="autocomplete"
                    name="itemName"
                    onChange={(e) =>
                      this.setState({ itemName: e.target.value })
                    }
                    value={this.state.itemName}
                  />
                  <label for="autocomplete-input">Item Name</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">description</i>
                  <input
                    type="text"
                    id="autocomplete-input"
                    className="autocomplete"
                    name="itemDescription"
                    onChange={(e) =>
                      this.setState({ itemDescription: e.target.value })
                    }
                    value={this.state.itemDescription}
                  />
                  <label for="autocomplete-input">Item Description</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">event_note</i>
                  <input
                    type="text"
                    id="autocomplete-input"
                    className="autocomplete"
                    name="itemCategory"
                    onChange={(e) =>
                      this.setState({ itemCategory: e.target.value })
                    }
                    value={this.state.itemCategory}
                  />
                  <label for="autocomplete-input">Item Category</label>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">person_pin</i>
                  <input
                    type="text"
                    id="autocomplete-input"
                    className="autocomplete"
                    name="sellerName"
                    onChange={(e) =>
                      this.setState({ sellerName: e.target.value })
                    }
                    value={this.state.sellerName}
                  />
                  <label for="autocomplete-input">Seller Name</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">monetization_on</i>
                  <input
                    type="number"
                    id="autocomplete-input"
                    className="autocomplete"
                    className="autocomplete"
                    name="price"
                    onChange={(e) => this.setState({ price: e.target.value })}
                    value={this.state.price}
                  />
                  <label for="autocomplete-input">Price</label>
                </div>
                <button
                  className="btn waves-effect waves-light right"
                  type="submit"
                  name="action"
                  onClick={() => window.location.reload(false)}
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>
            <div className="col s6">
              <table className="table table-success table-striped" id="table1">
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Item Description</th>
                    <th>Item Category</th>
                    <th>Seller Name</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => (
                    <tr key={item.itemID}>
                      <td>{item.itemID}</td>
                      <td>{item.itemName}</td>
                      <td>{item.itemDescription}</td>
                      <td>{item.itemCategory}</td>
                      <td>{item.sellerName}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          onClick={(e) => this.edit(item.itemID)}
                          className="btn waves-effect waves-light right"
                        >
                          <i className="material-icons">edit</i>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={(e) => this.delete(item.itemID)}
                          className="btn waves-effect waves-light right"
                        >
                          <i className="material-icons">delete</i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItems;
