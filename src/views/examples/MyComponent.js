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

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJob;
        //lọc object theo id, nếu id không trùng với id chỉ định, in chúng ra.
        currentJobs = currentJobs.filter(item => item.iD !== job.iD)
        this.setState({
            arrJob: currentJobs
        })
    }

    componentDidMount() {
        console.log(`Run Component`)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`Run Didupdate: `, `Prev state: `, prevState, `Current state: `, this.state)
    }

    render() {
        console.log(`call back: `, this.state)

        return (
            <React.Fragment>
                <AddComponent addNewJob={this.addNewJob}>

                </AddComponent>


                <ChildComponent
                    arrJob={this.state.arrJob}
                    deleteAJob={this.deleteAJob}
                >

                </ChildComponent>
            </React.Fragment>
        )
    }
}

export default MyComponent;