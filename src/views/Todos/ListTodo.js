import React, { Fragment } from "react";
import AddTodo from "./AddTodo";
import "./listTodo.scss";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {

    state = {
        ListTodo: [
            {
                id: `todo1`,
                title: `Doing Homeork`
            },

            {
                id: `todo2`,
                title: `Playing Video Game`
            },

            {
                id: `todo3`,
                title: `Fixing Bugs`
            }
        ],
        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        //let currentListTodo = this.state.listTodo;
        //currentListTodo.push(todo);
        this.setState({
            ListTodo: [...this.state.ListTodo, todo]
            //listTodo: currentListTodo;
        })

        toast.success("Nhập thành công!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.ListTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            ListTodo: currentTodo
        })
        toast.success("Xoá thành công!");
        // console.log(`Check todo: `, todo)
    }

    handleEditTodo = (todo) => {
        let { editTodo, ListTodo } = this.state
        let isEmtpyObj = Object.keys(editTodo).length === 0;
        //button Save
        if (isEmtpyObj === false && editTodo.id === todo.id) {
            let ListTodoCopy = [...ListTodo];

            let objIndex = ListTodoCopy.findIndex((item => item.id === todo.id));

            //Log object to Console.
            console.log("Before update: ", ListTodoCopy[objIndex])

            //Update object's title property.
            ListTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                ListTodo: ListTodoCopy,
                editTodo: {}
            })
            toast.success("Thay đổi thành công!");
            return;
        }
        //button Edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { ListTodo, editTodo } = this.state;
        //let listTodo = this.state.listTodo;
        let isEmtpyObj = Object.keys(editTodo).length === 0;
        console.log(`check emptyobj: `, isEmtpyObj)


        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                    {ListTodo && ListTodo.length > 0 &&
                        ListTodo.map((item, index) => {
                            return (
                                <div className="Todo-child" key={item.id}>
                                    {isEmtpyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <Fragment>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}></input>
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </Fragment>
                                    }
                                    <button className="btnEdit"
                                        onClick={() => this.handleEditTodo(item)}>
                                        {isEmtpyObj === false && editTodo.id === item.id ?
                                            `Save` : `Edit`}
                                    </button>
                                    <button className="btnDelete"
                                        onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )

                        }
                        )
                    }



                </div>
            </div>
        )
    }
}

export default ListTodo;