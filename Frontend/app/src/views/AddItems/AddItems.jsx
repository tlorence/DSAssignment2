import React from "react";
import axios from "axios";
import "./AddItems.css";

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
// Get item details
  componentDidMount() {
    axios
      .get("http://localhost:8280/items/findAllItems")
      .then((result) => {
        console.log(result);
        //  Set data to state
        this.setState({
          isLoaded: true,
          items: result.data,
        });
      });
  } // Submit new item
  submit(evenet, itemID) {
    evenet.preventDefault();
    // Check if item is existing or not
    if (itemID === 0) {
      axios
        .post("http://localhost:8280/items/addItem", {
          //Send data to backend
          itemID: this.state.itemID,
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          itemCategory: this.state.itemCategory,
          sellerName: this.state.sellerName,
          price: this.state.price,
        })
        .then(() => {+
          // Make current state empty
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
      // Update exisiting item
      axios
        .put("http://localhost:8280/items/update", {
          itemID: this.state.itemID,
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          itemCategory: this.state.itemCategory,
          sellerName: this.state.sellerName,
          price: this.state.price,
        })
        .then(() => {
          // Make current state empty
          this.setState({
            itemID: 0,
            itemName: "",
            itemDescription: "",
            itemCategory: "",
            sellerName: "",
            price: 0,
          });
        });
    }
  }
  // Delete existing item
  delete(itemID) {
    axios.delete("http://localhost:8280/items/delete/" + itemID).then(() => {
      this.componentDidMount();
    });
  }
  // Get item data to text field
  edit(itemID) {
    axios.get("http://localhost:8280/items/findAllItems/" + itemID).then((res) => {
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
    // Set data to display in body
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
