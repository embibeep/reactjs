import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     //chuyển hướng trang
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    render() {
        return (
            <div>Hello world! Andkaha here!</div>
        )
    }
}

// export default Color(Home);
export default Home;