import React,{Component} from 'react';
import './Planing.css';
import photo1 from '../assets/life-1.svg';
import photo3 from '../assets/life-3.jpg';

export default class Planing extends Component {
    render(){
        const data = this.props.data;
        const items = data.items.map((item, index) => {
            return(
                <div className="col-sm-3 col-md-3 item">
                    <h3>{item.title}</h3>
                    <p className="lead">{item.content}</p>
                </div>
                )
        })
        const itemsBlock = items.map((item, index) =>{
            if(index%3===0)
            return(
                <div className="row">
                    {items[index]}
                    {items[index+1]}
                    {items[index+2]}
                </div>
                )
            return;
        })
        return(
            <section>
            <div className="container">
                <div className="planing">
                    <div className="row">
                        <div className="col-sm-3 col-md-3">
                            <h1 className="heading">{data.heading}</h1>
                        </div>
                    </div>
                    {itemsBlock}
                </div>
            </div>
            </section>
        )
    }
}