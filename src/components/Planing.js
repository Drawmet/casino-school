import React,{Component} from 'react';
import './Planing.css';

export default class Planing extends Component {
    render(){
        const data = this.props.data;
        const items = data.items.map((item, index) => {
            return(
                <div className="col-sm-3 col-md-3 item" key={'planning_' + index}>
                    <h3>{item.title}</h3>
                    <p className="lead">{item.content}</p>
                </div>
                )
        })
        const itemsBlock = items.filter((item, index) => index%3 === 0).map((item, index) =>{
            return(
                <div className="row" key={'items_row_' + index}>
                    {items[index]}
                    {items[index+1]}
                    {items[index+2]}
                </div>
                );
        })
        return(
            <section className="planning" >
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