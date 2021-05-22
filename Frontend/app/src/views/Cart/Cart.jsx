import React, { Component } from 'react'
import Item from './Item';

// export let ItemsData;
export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {      
          error: null,
          isLoaded: false,
          ItemsData: [],
          setCart:0
        };
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
                ItemsData: result,
              });
            // ItemsData=result;
            //  console.log(ItemsData);
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
        return (
            <Item products={this.state.ItemsData}></Item>
        )
    }
}