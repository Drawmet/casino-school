import React, {Component} from 'react';
import './TimeLine.css';
import './animate.css';

export default class TimeLine extends Component{
    constructor(props){
        super(props);
        this.state = {
            styleAnimated: 'item',
            styleHeaderAnimated: 'header opacity-header'
        }
    }

    onMouseOver = () =>{
        this.setState({
            styleAnimated: 'animated fadeIn',
            styleHeaderAnimated: 'animated fadeIn header'
        })
    }

    render(){
        const data = this.props.data;
        const timelineItems = data.items.map((item,index)=>{
            return(
                <li className={this.state.styleAnimated}>
                    <div className="title">{item.title}</div>
                    <div className="info">{item.info}</div>
                    <div className="time">
                        <span>{index+1}.</span>
                    </div>
                </li>
            )
        })
        return(
            <section className="time-line-section" onMouseOver={this.onMouseOver}>
            <div className="time-line-block">
                <div className={this.state.styleHeaderAnimated}>
                    <h3>{data.header}</h3>
                    <p>{data.afterheader}</p>
                </div>
                <div className="time-line">
                    <ul>
                        {timelineItems}
                    </ul>
                </div>
            </div>
            </section>
        )
    }
}