import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button, Spinner }
    from 'reactstrap'

import { axiosWithAuth } from '../../utils'
import FriendCard from './FriendCard'

class FriendsList extends React.Component {
    state = {
        friends: null,
        friend: {
            name: '',
            age: '',
            email: ''
        },
        isFetching: false
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err));
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e => {
        e.preventDefault();
        this.setState({ isFetching: true });
        axiosWithAuth()
            .post('/friends', this.state.friend)
            .then(res => {
                this.setState({
                    friends: res.data,
                    friend: {
                        name: '',
                        age: '',
                        email: ''
                    },
                    isFetching: false
                })
            })
            .catch(err => console.log(err));
    }

    updateFriends = payload => {
        this.setState({
            friends: payload
        })
    }

    render() {
        return (
            <>
                {!this.state.friends && <Row><Col><Spinner /></Col></Row>}
                <Row>                    
                    {this.state.friends && this.state.friends.map(friend => (
                        <FriendCard key={friend.id} friend={friend}
                            updateFriends={this.updateFriends} />
                    ))}
                    <Col xs='12' sm='6' md='4' lg='3'>
                        <Form onSubmit={this.addFriend}>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={this.state.friend.name}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='age'>Age</Label>
                                <Input
                                    type='number'
                                    name='age'
                                    id='age'
                                    value={this.state.friend.age}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='email'>Email</Label>
                                <Input
                                    type='email'
                                    name='email'
                                    id='email'
                                    value={this.state.friend.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button>Add</Button>
                            {' '}{this.state.isFetching && <Spinner size='sm' />}
                        </Form>
                    </Col>
                </Row>             
            </>
        )
    }
}

export default FriendsList