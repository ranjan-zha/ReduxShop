import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import './Products.css';
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { cartItems } = this.props;
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" style={{marginTop:"20px"}} key={product.id}>
        {/* <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-primary"
            onClick={(e) => this.props.addToCart(cartItems, product)}
          >
            Add to cart
          </button>
        </div> */}
        <div className="card col-lg-12 col-md-12 col-xs-12 col-sm-12 " style={{width: "18rem", paddingTop:'0px', margin:"0px",alignItems:"center" }}>
            <img className="card-img-top" src={`products/${product.sku}_2.jpg`} alt={product.title}  style={{height: "200px"}}/>
            <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <div className="stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i> <span style={{color:"#666"}}>{product.rating}</span></div>
                <div className="priceTag">{util.formatCurrency(product.price)} &nbsp; <span style={{color: "#666"}}> {product.discount}% off</span></div>              
                <button
                  className="btn btn-primary"
                  onClick={(e) => this.props.addToCart(cartItems, product)}
                >
                  Add to cart
                </button>
            </div>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);