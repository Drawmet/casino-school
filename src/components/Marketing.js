import React,{Component} from 'react';
import '../assets/diler.jpg';
import '../assets/officiant.jpg';
import '../assets/automatics.jpg';
import '../assets/work.jpg';
import './Marketing.css'

export default class Marketing extends Component{
    render(){
        const data = this.props.data;
        let items = data.items.map((item, index)=>{
            return (
                <div className="col-lg-3 marketing-item" key={"marketing_item_" + index}>
                    <img className="rounded-circle" src={item.img} 
                        alt={item.title} width="140" height="140" />
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <p><a className="btn btn-secondary" href={item.link} role="button">{data.button}</a></p>
                </div>
            )
        });
        return(
            <section className="marketing" id="marketing">
                <div className="container">
                    <div className="row">
                        {items}
                        <div className="col-lg-3 marketing-item">
                            <img className="rounded-circle" src={data.anotherItem.img} 
                                alt={data.anotherItem.title} width="140" height="140" />
                            <h2>{data.anotherItem.title}</h2>
                            <p>{data.anotherItem.content}</p>
                            <p><a className="btn btn-secondary" href="https://goo.gl/forms/kg9oriEkwibXLlT72" role="button">{data.button}</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}