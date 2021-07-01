import React from 'react';
import moment from "moment";

import { Row, Col, Button, Dropdown, Modal } from 'react-bootstrap';

import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './User.scss';

class User extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            jwt: cookies.get('jwt') || undefined,
            showDeleteAccountModal: false
        };
    }

    handleLogout() {
        const { cookies } = this.props;
        cookies.remove('jwt');
        this.setState({ jwt: undefined });
        window.location.reload()
    }

    handleAccountDelete(){
        console.log('Deleting ', this.state.jwt)
        fetch('/api/me', {
            method:'DELETE',
            headers:{
                'jwt':this.state.jwt
            }
        }).then(res=>{
            this.handleLogout();
        })
    }

    openModal = () => this.setState({ showDeleteAccountModal: true });
    closeModal = () => this.setState({ showDeleteAccountModal: false });


    buildDeleteAccountAreYouSureModal() {
        const handleCancel = () => {
            this.closeModal();
        }

        const handleSure = () => {
            console.log("Deleting account")
            this.closeModal();
            this.handleAccountDelete();
            // Todo delete account
        }

        return <Modal id='delete-modal' show={this.state.showDeleteAccountModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete your account?
            </Modal.Body>
            <Modal.Footer>
                <Button id='delete-modal-cancel-btn' variant='Secondary' onClick={handleCancel}>Cancel</Button>
                <Button variant='danger' onClick={handleSure}>Yes, I'm sure</Button>
            </Modal.Footer>
        </Modal>
    }


    settingsToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Button variant='outline-primary' href="" ref={ref} onClick={e => {
            e.preventDefault();
            onClick(e);
        }}>
            <SettingsIcon />
            {children}
            &#x25bc;
        </Button>
    ))

    render() {
        return (
            <Col id='user-col'>
                <Row className='justify-content-center'>
                    <Dropdown id='playlist-name-dropdown'>
                        <Dropdown.Toggle as={this.settingsToggle}>Playlist Naming Convention</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Monthly (currently {moment().format("MMMM YY")})</Dropdown.Item>
                            {/* TODO: Add more options */}
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row className='justify-content-center'>
                    {this.buildDeleteAccountAreYouSureModal()}
                    <Button variant='outline-warning' onClick={this.handleLogout.bind(this)}><ExitToAppIcon/> Log Out</Button>
                    <div style={{width:'16px'}}></div>
                    <Button variant="danger" onClick={this.openModal.bind(this)}><DeleteForeverIcon/> Account</Button>
                </Row>
            </Col>
        )
    }
}

export default withCookies(User);
