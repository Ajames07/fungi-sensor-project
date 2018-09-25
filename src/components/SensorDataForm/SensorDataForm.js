import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    sensorDataList: state.sensorDataList.SensorDataList
});
 
class SensorDataForm extends Component {
    state = {
        sensorInfo: {
            temperature: '',
            humidity: '',
            lux: ''
        },
        sensorDataArray: [],
        isUpdating: false,
        updatingId: 0
    }

    componentDidMount () {
        this.props.dispatch({type: 'GET_DATA'});
    }


    handleInputChange = (propertyName) => (event) => {
        //manages manual data inputs
        console.log('in handleInputChange', propertyName, event.target);
        this.setState({
            sensorInfo: {
                ...this.state.sensorInfo,
                [propertyName]: event.target.value,
            }
        });
    }

    handleDataSubmit = (event) => {
        //takes data from input and submits them to database and dom
        console.log('in handleDataSubmit');
        event.preventDefault();
        if(this.state.isUpdating){
        this.props.dispatch({ type: 'PUT_DATA', payload:{...this.state.sensorInfo, id: this.state.updatingId}})
        this.setState({
            sensorInfo: {
                temperature: '',
                humidity: '',
                lux: ''
            },
            isUpdating: false,
        updatingId: 0
        }); 
    }else {
         this.props.dispatch({ type: 'POST_DATA', payload: this.state.sensorInfo })
        this.setState({
            sensorInfo: {
                temperature: '',
                humidity: '',
                lux: ''
            }
        });   
        }
        
    }

    sensorEdit = (sensor) => (event) => {
        this.setState({
            sensorInfo: {
                temperature: sensor.temperature,
                humidity: sensor.humidity,
                lux: sensor.lux,
            },
            isUpdating: true,
        updatingId: sensor.id
        });
    }


  render() {
    return (
    <div>
        <div>
            <Nav />
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Lux</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.sensorDataList.map((sensor,i) => {
                        return (
                            <tr key={i}>
                                <td>{sensor.temperature}</td>
                                <td>{sensor.humidity}</td>
                                <td>{sensor.lux}</td>
                                <td><button onClick={this.sensorEdit(sensor)}>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        </div>
        <div>
            <form onSubmit={this.handleDataSubmit}>
                <div>
                    <label>Temprature:</label>
                    <input type="text" value={this.state.sensorInfo.temperature} onChange={this.handleInputChange('temperature')}  placeholder="Temperature"/>
                </div>
                <div>
                    <label>Humidity:</label>
                    <input type="text" value={this.state.sensorInfo.humidity} onChange={this.handleInputChange('humidity')}  placeholder="Humidity"/>
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