import React from 'react';

// const Headers = (props) => {
//     render(

//     )   
// }

class Tabs extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = {index: 0}
        this.panes = props.panes;
        this.tabSelected = this.tabSelected.bind(this);
    }

    tabSelected(e) {
        // debugger
        const num = e.target.getAttribute("data-index");
        this.setState({index: num})
    }

    render() {
        const content = this.panes[this.state.index].content;
        return(
            <div className="parent-tab-div">
                <h1>Tabs</h1>
                <div className = "tab-div">
                    <ul className="tab-headers">
                    {this.panes.map((pane, idx) => {
                        return <li key={idx} data-index={idx} onClick={this.tabSelected}>{pane.title}</li>
                    })}
                </ul>
                <div className="content">
                    <article>{content}</article>
                </div>
            </div>
            </div>
        )
    }


}

export default Tabs; 