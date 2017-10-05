import React,{Component} from 'react';
import diler_icon from '../assets/diler.jpg';
import officiant_icon from '../assets/officiant.jpg';
import automatics_icon from '../assets/automatics.jpg';

export default class Marketing extends Component{
    render(){
        return(
            <section className="marketing-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img class="rounded-circle" src={diler_icon} 
                            alt="Generic placeholder image" width="140" height="140" />
                        <h2>Дилер в казино</h2>
                        <p>Работник, который ведёт игру за столом в таких играх, как покер, рулетка, крэпс, блэкджэк, баккара, бой и т. д. Также дилер обязан поддерживать разговор с клиентом, объяснять правила игры, следить за выполнением правил казино клиентами.</p>
                        </div>
                    <div className="col-lg-4">
                        <img class="rounded-circle" src={officiant_icon} 
                            alt="Generic placeholder image" width="140" height="140" />
                        <h2>Официант в казино/отель</h2>
                        <p>Работник предприятий общественного питания, обслуживающий посетителей в ресторанах отелей и казино. В обязаности входит встреча посетителей, знакомство их с заведением, и доставка заказа поситителю.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">Заполнить анкету</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img class="rounded-circle" src={automatics_icon} 
                            alt="Generic placeholder image" width="140" height="140" />
                        <h2>Работа с игровыми автоматами</h2>
                        <p>Присмотр за работаспособностью игровых автоматов, поддержка в целосности, и необходимый ремонт.</p>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}