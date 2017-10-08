import React,{Component} from 'react';
import './Planing.css';
import photo1 from '../assets/life-1.svg';
import photo3 from '../assets/life-3.jpg';

export default class Planing extends Component {
    render(){
        const data = this.props.data;
        return(
            <section>
            <div className="container">
                <div className="planing">
                    <div className="row">
                        <div className="col-sm-3 col-md-3">
                            <h1 className="heading">{data.heading}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-md-3 item">
                            <h3>{data.items[0].title}</h3>
                            <p className="lead">{data.items[0].content}</p>
                        </div>
                        <div className="col-sm-3 col-md-3 item">
                            <h3>{data.items[1].title}</h3>
                            <p className="lead">{data.items[1].content}</p>
                        </div>
                        <div className="col-sm-3 col-md-3 item">
                            <h3>{data.items[2].title}</h3>
                            <p className="lead">{data.items[2].content}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-md-3 item">
                            <h3>{data.items[3].title}</h3>
                            <p className="lead">{data.items[3].content}</p>
                        </div>
                        <div className="col-sm-3 col-md-3 item">
                            <h3>{data.items[4].title}</h3>
                            <p className="lead">{data.items[4].content}</p>
                        </div>
                        <div className="col-sm-3 col-md-3 item">
                            <h3>{data.items[5].title}</h3>
                            <p className="lead">{data.items[5].content}</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}