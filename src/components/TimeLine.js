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
        return(
            <section className="time-line-section" onMouseOver={this.onMouseOver}>
            <div className="time-line-block">
                <div className={this.state.styleHeaderAnimated}>
                    <h3>{data.header}</h3>
                    <p>{data.afterheader}</p>
                </div>
                <div className="time-line">
                    <ul>
                        <li className={this.state.styleAnimated}>
                            <span></span>
                            <div className="title">{data.item1.title}</div>
                            <div className="info">{data.item1.info}</div>
                            <div className="time">
                                <span>1.</span>
                            </div>
                        </li>
                        <li className={this.state.styleAnimated}>
                            <span></span>
                            <div className="title">{data.item2.title}</div>
                            <div className="info">{data.item2.info}</div>
                            <div className="time">
                                <span>2.</span>
                            </div>
                        </li>
                        <li className={this.state.styleAnimated}>
                            <span></span>
                            <div className="title">{data.item3.title}</div>
                            <div className="info">{data.item3.info}</div>
                            <div className="time">
                                <span>3.</span>
                            </div>
                        </li>
                        <li className={this.state.styleAnimated}>
                            <span></span>
                            <div className="title">{data.item4.title}</div>
                            <div className="info">{data.item4.info}</div>
                            <div className="time">
                                <span>4.</span>
                            </div>
                        </li>
                        <li className={this.state.styleAnimated}>
                            <span></span>
                            <div className="title">{data.item5.title}</div>
                            <div className="info">{data.item5.info}</div>
                            <div className="time">
                                <span>5.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </section>
        )
    }
}