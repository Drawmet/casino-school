import React,{Component} from 'react';
import diler_icon from '../assets/diler.jpg';
import officiant_icon from '../assets/officiant.jpg';
import automatics_icon from '../assets/automatics.jpg';

export default class Marketing extends Component{
    render(){
        const data = this.props.data;
        return(
            <section className="marketing-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img class="rounded-circle" src={diler_icon} 
                            alt="Generic placeholder image" width="140" height="140" />
                        <h2>{data.item1.title}</h2>
                        <p>{data.item1.content}</p>
                        </div>
                    <div className="col-lg-4">
                        <img class="rounded-circle" src={officiant_icon} 
                            alt="Generic placeholder image" width="140" height="140" />
                        <h2>{data.item2.title}</h2>
                        <p>{data.item2.content}</p>
                        <p><a className="btn btn-secondary" href="#" role="button">Заполнить анкету</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img class="rounded-circle" src={automatics_icon} 
                            alt="Generic placeholder image" width="140" height="140" />
                        <h2>{data.item3.title}</h2>
                        <p>{data.item3.content}</p>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}