// get the total number of users and the total number of users who have checked in from the api and display them on the dashboard in a card. It should 
// also contain a qr code scanner that will allow the admin to scan the qr code of a user and check them in.

import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import axios from "axios";

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        totalUsers: 0,
        totalCheckedIn: 0
        };
    }

    componentDidMount() {
        axios
        .get("http://localhost:3000/api/users")
        .then(res => {
            this.setState({ totalUsers: res.data.length });
        })
        .catch(err => {
            console.log(err);
        });

        axios
        .get("http://localhost:3000/api/users/checkedIn")
        .then(res => {
            this.setState({ totalCheckedIn: res.data.length });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
        <div className="animated fadeIn">
            <Row>
            <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-primary">
                <CardBody className="pb-0">
                    <div className="text-value">
                    {this.state.totalUsers}
                    </div>
                    <div>Total Users</div>
                </CardBody>
                </Card>
            </Col>
            <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-info">
                <CardBody className="pb-0">
                    <div className="text-value">
                    {this.state.totalCheckedIn}
                    </div>
                    <div>Total Checked In</div>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </div>
        );
    }
    }

export default AdminDashboard;
