import React, { Component } from "react";
import { Container, Segment, Dimmer, Loader, Message } from "semantic-ui-react";

import Table from "../Table";
import DetailsModal from "../DetailsModal";

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetailsModal: false,
        };
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const { products } = this.props;
        const { showDetailsModal } = this.state;
        return (
            <>
                <Container>
                    {products.listLoading && !products.error ? (
                        <Dimmer active inverted>
                            <Loader size="large">Loading</Loader>
                        </Dimmer>
                    ) : (
                        <Table
                            list={products.list}
                            clickHandler={this.detailsClickHandler}
                        />
                    )}
                    {products.details && !products.detailsLoading ? (
                        <DetailsModal
                            data={products.details}
                            showModal={showDetailsModal}
                            closeModal={this.toggleDetailsModal}
                        />
                    ) : showDetailsModal ? (
                        <Dimmer active inverted>
                            <Loader size="large">Loading</Loader>
                        </Dimmer>
                    ) : null}
                </Container>
                {products.error ? <Message>{products.error}</Message> : null}
            </>
        );
    }

    toggleDetailsModal = () => {
        this.setState({ showDetailsModal: !this.state.showDetailsModal });
    };

    detailsClickHandler = id => {
        this.setState(
            {
                showDetailsModal: true,
            },
            () => {
                this.props.getDetails(id);
            }
        );
    };
}
