import React from 'react';

class Weather extends React.Component {
  render(){
    return (
      <div>
        {this.props.city && <h2>{this.props.city}</h2>}
        {this.props.city && <p>{this.props.description}</p>}
        {this.props.temperature && this.props.humidity && <p>It's currently {this.props.temperature} degress Celsius with {this.props.humidity} humidity</p>}
        {this.props.icon && <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`}  alt="current weather icon" />}
      </div>
    );
  }
}

export default Weather;