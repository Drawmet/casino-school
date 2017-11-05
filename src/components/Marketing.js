import React,{Component} from 'react';
import diler_icon from '../assets/diler.jpg';
import officiant_icon from '../assets/officiant.jpg';
import automatics_icon from '../assets/automatics.jpg';

export default class Marketing extends Component{
    render(){
        const data = this.props.data;
        let items = data.items.map((item)=>{
            return (
                <div className="col-lg-4">
                    <img class="rounded-circle" src={item.img} 
                        alt="Generic placeholder image" width="140" height="140" />
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <p><a className="btn btn-secondary" href="#" role="button">{data.button}</a></p>
                </div>
            )
        });
        return(
            <section className="marketing">
            <div className="container">
                <div className="row">
                    {items}
                </div>
                <div className="row">
                </div>
            </div>
            </section>
        )
    }
}