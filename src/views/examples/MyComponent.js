import React from "react";

class MyComponent extends React.Component {

    state = {
        name: `KimHajin`,
        channel: `Nguyễn Trọng Ngọc`
    }
    //realtime state
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
            channel: event.target.value
        })
    }

    handleClickButton = () => {
        alert(`Click Me`);
    }

    render() {

        let name = `Andkaha`;

        return (
            <React.Fragment>
                <div className="enterName">
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)} />
                </div>
                <div className="firstClass">
                    {console.log(`My name is: `, name)}
                    Hello from {this.state.name}!
                </div>
                <div className="secondClass">
                    My Youtube channel {this.state[`channel`]}
                </div>
                <div className="thirdClass">
                    <button onClick={() => { this.handleClickButton() }}>Click Me</button>
                </div>

            </React.Fragment>
        )
    }
}

export default MyComponent;