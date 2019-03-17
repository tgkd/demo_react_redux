import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../../store/actionCreators/products";
import ProductsList from "../../components/ProductsList";

class HomePage extends Component {
    render() {
        const { getList, getDetails, products } = this.props;
        return (
            <ProductsList getList={getList} getDetails={getDetails} products={products} />
        );
    }
}

const mapStateToProps = ({ products }) => ({ products });
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { getList: actions.getProductsList, getDetails: actions.getProductDetails },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
