import React,{Component} from 'react';
import './Faq.css';

export default class Faq extends Component{
    render(){
        const data = this.props.data;
        return(
            <section className="faq">
                <div className="container heading-faq">
                    <h1 class="rte-heading text-center">{data.header}</h1>
                    <h4 className="p1 text-center">{data.p}</h4>
                    <div className="row">
                        <div className="rte col-md-offset-2 col-md-8 col-sm-12 col-sm-offset-0 faq-answer">
                            <p className="p1 lead">
                                <span className="s1">
                                    <b>{data.items[0].question}<br/></b>
                                </span>
                                {data.items[0].answer}    
                            </p>
                            <p className="p1 lead">
                                <span className="s1">
                                <b>{data.items[1].question}<br/></b>
                                </span>
                                {data.items[1].answer}
                            </p>
                            <p className="p1 lead">
                                <span className="s1">
                                    <b>{data.items[2].question}<br/></b>
                                </span>
                                {data.items[2].answer}
                            </p>
                            <p className="p1 lead">
                                <span className="s1">
                                    <b>{data.items[3].question}<br/></b>
                                </span>
                                {data.items[3].answer}
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}