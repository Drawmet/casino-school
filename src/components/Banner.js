import React,{Component} from 'react';
import './Banner.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import {
    Carousel, 
    CarouselItem, 
    CarouselControl, 
    CarouselIndicators, 
    CarouselCaption
} from 'reactstrap';


export default class Banner extends Component{
    constructor(props){
        super(props);
        
        this.state={
            dataTarget: this.props.activeData,
            activeIndex: 0,
            slides:[{src:banner1},{src:banner2},{src:banner3}],
        }
    }

    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.slides.length - 1 ? 0 : this.state.activeIndex + 1;
         this.setState({
            activeIndex: nextIndex,
        });
    }

    previous = () => {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.slides.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex,
        });
    }

    goToIndex = (newIndex) => {
        if(this.animating) return;
        this.setState({
            activeIndex: newIndex,
        })
    }

    
    render(){
        const {activeIndex} = this.state;
        const data = this.props.data;
        const items = [{
            src:banner1,
            ...data.slides[0],
        },{
            src:banner2,
            ...data.slides[1],
        },{
            src:banner3,
            ...data.slides[2],
        }]
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                    src={item.src}
                    altText={item.altText}
                >
                    <a href="/"><div className="opacity-shadow"></div></a>
                    <CarouselCaption captionText={item.content} 
                                     captionHeader={item.title}/>
                </CarouselItem>
            );
        });
        return(
            <section className="banner-section">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={this.state.slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </section>
        
        )
    }
}