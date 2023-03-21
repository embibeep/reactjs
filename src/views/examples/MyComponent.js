import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: ``,
        lastName: ``,
        arrJob: [
            {
                iD: `abcJob1`,
                title: `Developer`,
                salary: `400`
            },
            {
                iD: `abcJob2`,
                title: `Developer`,
                salary: `500`
            },
            {
                iD: `abcJob3`,
                title: `Developer`,
                salary: `600`
            }
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Check data results: `, this.state)
    }

    render() {
        // console.log(`call back: `, this.state)

        return (
            <React.Fragment>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input onChange={(event) => this.handleChangeFirstName(event)}
                        type="text" value={this.state.firstName} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input onChange={(event) => this.handleChangeLastName(event)}
                        type="text" value={this.state.lastName} /><br /><br />
                    <input onClick={(event) => this.handleSubmit(event)}
                        type="submit" />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={`21`}
                    address={`DongNai`}
                    arrJob={this.state.arrJob}
                >

                </ChildComponent>
            </React.Fragment>
        )
    }
}

export default MyComponent;