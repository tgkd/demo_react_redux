import React from "react";
import { Table, Button } from "semantic-ui-react";

const ProductsTable = ({ list, clickHandler }) => (
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell> </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {list.map(p => (
                <Table.Row>
                    <Table.Cell>{p.id}</Table.Cell>
                    <Table.Cell>{p.name}</Table.Cell>
                    <Table.Cell textAlign={"right"}>
                        <Button
                            primary
                            size={"mini"}
                            onClick={clickHandler.bind({}, p.id)}
                        >
                            Details
                        </Button>
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
);

export default ProductsTable;
