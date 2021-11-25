import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';

class ApplicationNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <NavLink>
                        {user ? `Welcome ${user.name}` : ''}
                    </NavLink>
                </NavItem>


                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );
        const guestLinks = (
            <Fragment>
                <NavItem >
                    <RegisterModal />
                </NavItem>
                <NavItem >
                    <LoginModal />
                </NavItem>
            </Fragment>
        );
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5" >
                    <Container style={{ display: 'flex' }}>
                        <NavbarBrand href="/">
                            Shopping List
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav style={{ marginLeft: 'auto' }} navbar >
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>

                    </Container>

                </Navbar>
            </div>
        )

    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(ApplicationNavbar);