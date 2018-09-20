import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    sensorDataList: state.sensorDataList,
});
 
class SensorDataForm extends Component {
    state = {
        sensorInfo: {
            temperature: '',
            humidity: '',
            lux: ''
        }
    }


    handleInputChange = (propertyName) => (event) => {
        console.log('in handleInputChange', propertyName, event.target);
        this.setState({
            sensorInfo: {
                ...this.state.sensorInfo,
                [propertyName]: event.target.value,
            }
        });
    }

    handleDataSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_DATA', payload:this.state.sensorInfo})
        this.setState({
            sensorInfo: {
                temperature: '',
                humidity: '',
                lux: ''
            }
        });
    }

  render() {

    return (
    <div>
        <Nav />
        {JSON.stringify(this.state)}
        <div>
            <form onSubmit={this.handleDataSubmit}>
                <div>
                    <label>Temprature:</label>
                    <input type="text" value={this.state.sensorInfo.temperature} onChange={this.handleInputChange('temperature')}  placeholder="Temperature"/>
                </div>
                <div>
                    <label>Humidity:</label>
                    <input  type="text" value={this.state.sensorInfo.humidity} onChange={this.handleInputChange('humidity')}  placeholder="Humidity"/>
                </div>
                <div>
                    <label>LuX:</label>
                    <input type="text" value={this.state.sensorInfo.lux} onChange={this.handleInputChange('lux')} placeholder="LuX"/>
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
export default connect(mapStateToProps)(SensorDataForm);