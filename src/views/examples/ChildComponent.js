import React from "react";

class ChildComponent extends React.Component {

    render() {
        console.log(`check pros: `, this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        // let address = this.props.address;

        //cú pháp object
        let { arrJob } = this.props;
        return (
            <React.Fragment>
                <div className="Job-lists">
                    {
                        arrJob.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>

            </React.Fragment>
        )
    }
}

export default ChildComponent;