import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponents";

class MyComponent extends React.Component {

    state = {

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



    addNewJob = (job) => {
        console.log(`check job from parents: `, job)
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    render() {
        // console.log(`call back: `, this.state)

        return (
            <React.Fragment>
                <AddComponent addNewJob={this.addNewJob}>

                </AddComponent>


                <ChildComponent
                    arrJob={this.state.arrJob}
                >

                </ChildComponent>
            </React.Fragment>
        )
    }
}

export default MyComponent;