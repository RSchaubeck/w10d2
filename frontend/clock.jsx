import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
    // const timeString = [this.hours, this.minutes, this.seconds].join(":");
        this.setState({ time: new Date() });
    }

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        let date = this.state.time.toDateString();

        return(
            <>
                <h1>Clock</h1>
                <div className="clock">
                    <p> <span>
                        TIME:
                    </span>
                    <span>
                        {hours} : {minutes} : {seconds}
                    </span> 
                    </p> 
                    <p><span>
                        DATE:
                    </span> 
                    <span>
                    {date}
                    </span>  
                    </p>    
                </div>   
            </>
        )
    }
}


export default Clock;