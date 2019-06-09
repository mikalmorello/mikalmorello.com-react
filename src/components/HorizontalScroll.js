import React from 'react';

class HorizontalScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDown: false,
      isActive: '',
      x: 0, 
      y: 0,
      scrollLeft: '',
      startX: ''
    };
  }
  
  mouseDown(e){
    this.setState({
      isDown: true,
      isActive: 'horizontal-scroll__items--active',
      x: e.screenX,
      y: e.screenY,
      scrollLeft: this.refs.scroller.scrollLeft,
      startX: this.state.x - this.refs.scroller.offsetLeft
    })
  }
  
  mouseLeave(e){
    this.setState({
      isDown: false,
      isActive: ''
    })
  }
  
  mouseUp(e){
    this.setState({
      isDown: false,
      isActive: ''
    })
  }
  
  mouseMove(e){
    this.setState({
      x: e.screenX,
      y: e.screenY
    })
    if (this.state.isDown === false) {
      return;
    } else {
      e.preventDefault();
      var x = this.state.x - this.refs.scroller.offsetLeft;
      var walk = (x - this.state.startX) * 3;
      this.refs.scroller.scrollLeft = this.state.scrollLeft - walk;
    }
  }
  
  render(){
    return (
      <section className="section section--horizontal-scroll project__section">
        <div className="horizontal-scroll horizontal-scroll--left">
          <div
            ref='scroller'
            className={`horizontal-scroll__items ${this.state.isActive}`}
            onMouseDown={(e)=>this.mouseDown(e)} 
            onMouseLeave={(e)=>this.mouseLeave(e)} 
            onMouseUp={(e)=>this.mouseUp(e)} 
            onMouseMove={(e)=>this.mouseMove(e)}
          >
            <div className="horizontal-scroll__item horizontal-scroll__item--1">
              <div className="horizontal-scroll__item-container">
                <h2 className="horizontal-scroll__title">
                  Digitally Crafted
                </h2>
                <div className="horizontal-scroll__description">
                  Visually distinct layouts and designs, carefully crafted for both online and print publications.
                </div>
              </div>
            </div>
            <div className="horizontal-scroll__item horizontal-scroll__item--2">
              <div className="horizontal-scroll__item-container">
                <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-maestro-print.png" alt="" />
              </div>
            </div>
            <div className="horizontal-scroll__item horizontal-scroll__item--3">
              <div className="horizontal-scroll__item-container">
                <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-maestro-macbook.png" alt="" />
              </div>
            </div>
            <div className="horizontal-scroll__item horizontal-scroll__item--4">
              <div className="horizontal-scroll__item-container">
                <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-john-brown-print.png" alt="" />
              </div>
            </div>
            <div className="horizontal-scroll__item horizontal-scroll__item--5">
              <div className="horizontal-scroll__item-container">
                <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-john-brown-macbook.png" alt="" />
              </div>
            </div>
            <div className="horizontal-scroll__item horizontal-scroll__item--4">
              <div className="horizontal-scroll__item-container">
                <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-help-print.png" alt="" />
              </div>
            </div>
            <div className="horizontal-scroll__item horizontal-scroll__item--5">
              <div className="horizontal-scroll__item-container">
                <img className="horizontal-scroll__item-media" src="/assets/images/tufts-magazine-help-macbook.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
}

export default HorizontalScroll;