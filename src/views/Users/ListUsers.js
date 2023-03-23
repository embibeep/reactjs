import React from "react";
import axios from "axios";
import "./ListUsers.scss";
import { withRouter } from "react-router-dom";

class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        // axios.get(`https://reqres.in/api/users?page=2`)
        //     .then(res => {
        //         console.log(`Check respond: `, res.data.data)
        //     })

        let res = await axios.get(`https://reqres.in/api/users?page=1`)
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
        console.log(`Check respond: `, res.data.data)

    }

    handleViewwDedail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all listusers
                </div>

                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" onClick={() => this.handleViewwDedail(item)}
                                    key={item.id}>
                                    {index + 1} - {item.first_name} &nbsp; {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUsers);