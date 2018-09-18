import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';

class SensorDataForm extends Component {
  render() {

    return (
    <div>
        <Nav />
        <div>
            <form>
                <div>
                    <label>Temprature:</label>
                    <input type="number" placeholder="Temprature"/>
                </div>
                <div>
                    <label>Humidity:</label>
                    <input type="number" placeholder="Humidity"/>
                </div>
                <div>
                    <label>LuX:</label>
                    <input type="number" placeholder="LuX"/>
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