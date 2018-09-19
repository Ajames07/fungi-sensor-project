import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';

const sensorDataObject ={
    sensors: {
        temperature: '',
        huidity: '',
        lux: '',
    },
}

class SensorDataForm extends Component {
    constructor() {
        super();

        this.state = sensorDataObject;
    }

    handleInputChange = (event) => {
        console.log('in handleInputChange', event.target.value);
        
    }

    handleDataSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();

    }

  render() {

    return (
    <div>
        <Nav />
        <div>
            <form onSubmit={this.handleDataSubmit}>
                <div>
                    <label>Temprature:</label>
                    <input type="number" value={this.state.sensors.temperature} onChange={this.handleInputChange}  placeholder="Temprature"/>
                </div>
                <div>
                    <label>Humidity:</label>
                    <input  type="number" value={this.state.sensors.humidity} onChange={this.handleInputChange}  placeholder="Humidity"/>
                </div>
                <div>
                    <label>LuX:</label>
                    <input type="number" value={this.state.sensors.lux} onChange={this.handleInputChange} placeholder="LuX"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    )
  }
}
export default SensorDataForm;