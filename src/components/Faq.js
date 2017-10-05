import React,{Component} from 'react';
import './Faq.css';

export default class Faq extends Component{
    render(){
        return(
            <section className="faq">
                <div className="container heading-faq">
                    <h1 class="rte-heading text-center">Часто задаваемые вопросы?</h1>
                    <h4 className="p1 text-center">Простые ответы на наиболее распространенные вопросы</h4>
                    <div className="row">
                        <div className="rte col-md-offset-2 col-md-8 col-sm-12 col-sm-offset-0 faq-answer">
                            <p className="p1">
                                <span className="s1">
                                    <b>Почему мы сделали курсы по обучению?<br/></b>
                                </span>
                                Для создания профессиональной школы по обучению кадров игорного бизнеса. 
                                    Чтобы молодые, перспективные, талантливые люди овладели такой престижной профессией. 
                            </p>
                            <p className="p1">
                                <span className="s1">
                                    <b>Законость School Casino?<br/></b>
                                </span>
                                "School Casino" - международный центр по подбору и подготовке персонала для игорной индустрии.
                                    Крупье ведет игру в казино – выдает участникам их выигрыш и забирает проигранные ставки. 
                                        В обязанности крупье входит объяснение правил игры, осуществление контроля над соблюдением 
                                            всех правил в процессе игры. Обязанности крупье зависят от специфики игры, 
                                                но какой бы она не была – это легально. 
                            </p>
                            <p className="p1">
                                <span className="s1">
                                    <b>В поездке в другую страну, не останусь ли я безработным?<br/></b>
                                </span>
                                Мы сотрудничаем с самыми надежными и проверенными работодателями за рубежом. 
                                    А это направление лично один из руководителей нашей компании – настоящий профессионал
                                        своего дела с многолетним стажем. Смеем Вас заверить, что нам дорога наша репутация 
                                            и Вам не стоит беспокоиться о своей безопасности, потому что для нас она – 
                                                превыше всего. 
                            </p>
                            <p className="p1">
                                <span className="s1">
                                    <b>Точно ли я уеду работать?<br/></b>
                                </span>
                                Мы обучаем профессии крупье и содействуем в трудоустройстве в казино 
                                    Северного Кипра, Марокко, Грузии и многих других стран. 
                                        Для выпускников школы «Марьяж» предоставлены одни из лучших 
                                            условий труда. Им не нужно оплачивать авиабилеты, визу,
                                                 проживание и даже питание. Минимальная заработная плата 
                                                    при этом составляет 750 долларов. Все, что нужно – освоить 
                                                        профессию крупье и готовиться к выезду за рубеж. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}