import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
   
    render(){
        const { user } = this.props;
        // console.log(user);
        // const user = this.props.users.find((user) => user.id === this.props.userId );
        if(!user) {
            return <div>Loading...</div>
        }
        return (
            <div className="header">
            { user.name }
            </div>
        );

    }
}
const mapStateToProps = (state, ownProps) => {
    return { user:  state.users.find(user => user.id === ownProps.userId) };
}
export default connect( mapStateToProps )(UserHeader);