import React from "react";
import { toast } from "react-toastify";

class AddComponent extends React.Component {

    state = {
        title: ``,
        salary: ``
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            toast.error(`Nhập đầy đủ dữ liệu!`)
            return;
        }
        console.log(`Check data results: `, this.state)
        this.props.addNewJob({
            iD: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        }
        )

        this.setState({
            title: ``,
            salary: ``
        })
        toast.success(`Nhập thành công!`)
    }

    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Job Title:</label><br />
                <input onChange={(event) => this.handleChangeTitle(event)}
                    type="text" value={this.state.title} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input onChange={(event) => this.handleChangeSalary(event)}
                    type="text" value={this.state.salary} />                    <br /><br />
                <input onClick={(event) => this.handleSubmit(event)}
                    type="submit" />
            </form>
        )
    }
}

export default AddComponent;