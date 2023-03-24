import React from "react";
import { withRouter } from "react-router";
import './Home.scss';
import Color from "../HOC/Color";
import logo from "../../assets/images/pozyomka.PNG";
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     //chuyển hướng trang
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        console.log(`Check user: `, user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log(`Check props: `, this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello world! Andkaha here!</div>
                <div>
                    <img className="pozyomka" src={logo} />
                </div>

                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp;<span onClick={() => this.handleDeleteUser(item)}>X</span>
                                </div>
                            )
                        })
                    }
                    &nbsp;<button onClick={() => this.handleCreateUser()}>Add New</button>
                </div>
            </>

        )
    }
}



const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
// export default Home;