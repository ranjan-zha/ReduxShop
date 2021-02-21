import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, removeFromCart } from "../actions/cartActions";

class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="alert" style={{backgroundColor:"#fff", color:"#333"}}>
        {cartItems.length === 0 ? (
          "Your Basket is empty !"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <i className="fa fa-2x fa-shopping-cart"></i>
            <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-warning btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)} <span style={{fontSize:"12px",color:"green"}}>({item.discount}% off)</span>
                </li>
              ))}
            </ul>
            <div>
            <b>
              Subtotal :{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + ((c.price)-(c.price*(c.discount/100))) * c.count, 0)
              )}
            </b>
            <br/>
            <span style={{fontSize:"14px",color:"orange"}}>
            Your Saving :{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + ((c.price*(c.discount/100))) * c.count, 0)
              )}
            </span>
            <button
              onClick={() => alert("Comming soon...!")}
              className="btn btn-primary ml-5"
            >
              Checkout
            </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);