import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";
class Filter extends Component {
  render() {
    return (
      <div classNam="col-lg-12 col-md-12 " style={{backgroundColor:"#adb5bd",padding:"10px"}}>
        <div className="row">
        <div className="col-md-4"  style={{marginTop:"20px"}}>{`${this.props.filteredProducts.length} products found.`}</div>
        <div className="col-md-4">
          <label >
            Short by price
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {" "}
            Filter Product
            <select
              className="form-control"
              value={this.props.size}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">ALL</option>
              <option value="MOBILE PHONE">Mobile Phone</option>
              <option value="LED TV">LED TV</option>
              <option value="FORMAL SHIRT">Formal-Shirts</option>
              <option value="EARPHONE">Earphones</option>
            </select>
          </label>
        </div>
        </ div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);