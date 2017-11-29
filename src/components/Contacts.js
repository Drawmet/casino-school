import React, {Component} from 'react';
import banner1 from '../assets/logo-banner.png';
import banner2 from '../assets/logo-banner-2.png';
import banner3 from '../assets/logo-banner-3.png';

export default class Contacts extends Component {
    render() {
        return (
            <section id="contacts" className="contacts">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 col-lg-4">
                            <a href="https://academy-casino.com/">
                                <img src={banner1} alt="Premier Academy Casino"/>
                            </a>
                            <p className="lead">Premier Academy Casino</p>
                        </div>
                        <div className="col-xs-6 col-lg-4">
                            <a href="http://pgm.in.ua/">
                                <img src={banner2} alt="Premier Gaming Managment"/>
                            </a>
                            <p className="lead">Premier Gaming Managment</p>
                        </div>
                        <div className="col-xs-6 col-lg-4">
                        <a href="http://jobs-casino.com/">
                            <img src={banner3} alt="PGM Jobs"/>
                        </a>
                        <p className="lead">Premier Gaming Managment</p>
                    </div>
                        <div className="col-xs-6 col-lg-4">
                            <p className="lead">Phone: ‎+38 (073) 104 79 53</p>
                            <p className="lead">E-mail: ‎<a href="mailto:office@pgm.in.ua">office@pgm.in.ua</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}