import React, {Component} from 'react';
import {Popover, PopoverBody, PopoverHeader} from 'reactstrap';
import './TimeLine.css';
import './animate.css';

export default class TimeLine extends Component{
    constructor(props){
        super(props);
        this.state = {
            styleAnimated: 'item',
            styleHeaderAnimated: 'header opacity-header',
            isOpen: false,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen, 
        });
    }

    componentWillMount = () =>{
        this.setState({
            styleAnimated: 'animated fadeIn',
            styleHeaderAnimated: 'animated fadeIn header'
        })
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
            if(index===0)
            return(
                <li className={this.state.styleAnimated}>
                    <div className="title">{item.title}</div>
                    <div className="info" id="contacts" onMouseOver={this.toggle}><a href="https://goo.gl/forms/hutOzwB0TQjmIcOr2">{item.info}</a></div>
                    <div className="time">
                        <span>{index+1}.</span>
                    </div>
                    <Popover placement="top" isOpen={this.state.isOpen} target="contacts" toggle={this.toggle}>
                        <PopoverHeader>Contacts</PopoverHeader>
                        <PopoverBody>+380 734 264 773</PopoverBody>
                    </Popover>
                </li>
            );
            return(
                <li className={this.state.styleAnimated}>
                    <div className="title">{item.title}</div>
                    <div className="info">{item.info}</div>
                    <div className="time">
                        <span>{index+1}.</span>
                    </div>
                </li>
            );
        })
        return(
            <section className="time-line-section" >
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