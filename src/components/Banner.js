import React,{Component} from 'react';
import './Banner.css';
import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';


export default class Banner extends Component{
    constructor(props){
        super(props);
        
        this.state={
            dataTarget: this.props.activeData,
        }
    }

    /*setTargetData (e){
        this.setState({
            dataTarget: e.target.dataset.data-slide-to,
        })
        return e.target.className="active";
    };*/
    render(){
        return(
        <section className="banner-section">
        <div className="banner">
            <div id="Carousel" className="carousel slide" data-ride="carousel">    
                <ol className="carousel-indicators">
                    <li data-target="#Corousel" data-slide-to="0" className="active"></li>
                    <li data-target="#Corousel" data-slide-to="1"></li>
                    <li data-target="#Corousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid opacity-shadow" src={banner1} alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption d-none d-md-block text-left">
                                <h1>Гарантия трудоустройства.</h1>
                                <p>Школа казино учебное заведение, гарантирующее своим выпускникам трудоустройство.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Вступить сейчас</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid opacity-shadow" src={banner2} alt="Second slide" />
                        <div className="container">
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Сертификат о прохождении курса.</h1>
                                <p>Сертификат подтверждает, что его обладатель посещал занятия и прослушал соответствующий курс, что позволяет трудостроить его в дальнейшем.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Узнать больше</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid opacity-shadow" src={banner3} alt="Third slide" />
                            <div className="container">
                                <div className="carousel-caption d-none d-md-block text-right">
                                    <h1>Берем на себя все юридические вопросы.</h1>
                                    <p>Все вопросы с визой, разрешением на выезд, компания решает за вас.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Заполнить анкету</a></p>
                                </div>
                            </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#Carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#Carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        </section>
        )
    }
}