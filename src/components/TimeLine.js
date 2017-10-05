import React, {Component} from 'react';
import './TimeLine.css';
import './animate.css';

export default class TimeLine extends Component{
    FadeIn(){}
    render(){
        return(
            <section className="time-line-section">
            <div className="time-line-block">
                <div className="header animated fadeIn">
                    <h3>Бесплатное обучение и почему работаем именно так?</h3>
                    <p>Во время обучения компания не берет денег, а лишь подписивает договор с вами, 
                        что в течении двух месецев изискаем часть зароботной платы в виде вознаграждения за обучение.</p>
                </div>
                <div className="time-line">
                    <ul>
                        <li className="item_1 transition animate-box animated fadeIn">
                            <span></span>
                            <div className="title">Заполните заявку</div>
                            <div className="info">Укажите свои данные в анкете или позвоните по номеру.</div>
                            <div className="time">
                                <span>1.</span>
                            </div>
                        </li>
                        <li className="fadeIn item_2">
                            <span></span>
                            <div className="title">Проверка анкеты</div>
                            <div className="info">Для того, чтобы заранее представить 
                                Вас нескольким работодателям, проверяем информацию на достоверность.</div>
                            <div className="time">
                                <span>2.</span>
                            </div>
                        </li>
                        <li className="fadeIn item_3">
                            <span></span>
                            <div className="title">Начало обучения</div>
                            <div className="info">Обучение проходит в наших офисах на профессиональном оборудовании компании.</div>
                            <div className="time">
                                <span>3.</span>
                            </div>
                        </li>
                        <li className="fadeIn item_4">
                            <span></span>
                            <div className="title">Заключительный экзамен</div>
                            <div className="info">Прохождение экзамена, вручение сертификата о прохождении курсов.</div>
                            <div className="time">
                                <span>4.</span>
                            </div>
                        </li>
                        <li className="fadeIn item_5">
                            <span></span>
                            <div className="title">Офомление неободимых документов для работодателя</div>
                            <div className="info">Мы готовим весь пакет документов для будущего работодателя 
                                и открытия рабочей визы. Уведомляем нанимателя о готовности сотрудника. 
                                    Вы получаете билет и вылетаете.</div>
                            <div className="time">
                                <span>5.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </section>
        )
    }
}