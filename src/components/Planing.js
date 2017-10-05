import React,{Component} from 'react';
import './Planing.css';
import photo1 from '../assets/life-1.svg';
import photo3 from '../assets/life-3.jpg';

export default class Planing extends Component {
    render(){
        return(
            <section>
            <div className="container">
                <div className="planing">
                    <div className="row">
                        <div className="col-sm-3 col-md-3">
                            <h1 className="heading">Что такое школа казино?</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-md-3 item">
                            <h3>1 год</h3>
                            <p className="lead">В течение этого солидного срока компания School Casino помогает 
                                успешно добиваться поставленных целей и осуществлять мечты наших учеников о работе за границей.</p>
                        </div>
                        <div className="col-sm-3 col-md-3 item">
                            <h3>10 стран</h3>
                            <p className="lead">Компания School Casino тесно сотрудничает с работодателями Северного Кипра, 
                            Марокко, Грузии, Мальты, Камбоджи, Египта, Болгарии, Германии, 
                            Италии, Нигерии, Замбии (вакансии в сфере игорного бизнеса).</p>
                        </div>
                        <div className="col-sm-3 col-md-3 item">
                            <h3>36 проекта</h3>
                            <p className="lead">Компания School Casino тесно сотрудничает с хедлайнерами игорного бизнеса,
                             поэтому у нас всегда есть работа для наших учеников.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-md-3 item">
                            <h3>15 выпусков</h3>
                            <p className="lead">Компания School Casino за всё время работы успела выпустить уже 20 потоков и 
                                мы рады каждому ученику.</p>
                        </div>
                        <div className="col-sm-3 col-md-3 item">
                            <h3>500 виз</h3>
                            <p className="lead">Ежегодно при поддержке компании School Casino оформляется более 500 рабочих виз.</p>
                        </div>
                        <div className="col-sm-3 col-md-3 item">
                            <h3>312 учеников</h3>
                            <p className="lead">Сегодня компания School Casino – одна из ведущих рекрутинговых компаний по трудоустройству за границей.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}