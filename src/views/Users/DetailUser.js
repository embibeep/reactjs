import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: []
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)

            this.setState({
                user: res && res.data && res.data.data ? res.data.data : []
            })
            console.log(`Check res: `, res)
        }

    }

    handleBackButton = () => {
        this.props.history.push(`/user`)
    }

    render() {
        let { user } = this.state;
        let isEmtpyObj = Object.keys(user).length === 0;

        console.log(`CHeck props`, this.props)
        return (
            <>
                < div > Detail User ID: {this.props.match.params.id}</div >
                {isEmtpyObj === false &&
                    <>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div> User's name: {user.first_name} &nbsp; {user.last_name}</div>
                        <div> User's email: {user.email}</div>

                        <div>
                            <button onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);