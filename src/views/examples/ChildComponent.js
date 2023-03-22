import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log(`handle onclick delete: `, job)
        this.props.deleteAJob(job)
    }

    render() {
        // console.log(`check pros: `, this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        // let address = this.props.address;

        //cú pháp object
        let { arrJob } = this.props;
        let { showJobs } = this.state;
        // let check = showJobs === true ? `showJobs = true` : `showJobs = false`;
        // console.log(`check conditional: `, check);
        return (
            <React.Fragment>

                {showJobs === false ?
                    <div>
                        <button className="btnShow"
                            onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="Job-lists">
                            {
                                arrJob.map((item, index) => {
                                    if (+item.salary >= 500) {
                                        return (
                                            <div key={item.iD}>
                                                {item.title} - {item.salary} <></>
                                                <span onClick={() => this.handleOnClickDelete(item)}>x</span> <></>
                                            </div>


                                        )
                                    }
                                })
                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }


            </React.Fragment>
        )
    }
}

export default ChildComponent;