import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: ``,
        lastName: ``
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
                <div>
                    ChildComponent: {this.props.name}
                </div>

            </React.Fragment>
        )
    }
}

export default ChildComponent;