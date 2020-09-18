import React, { Component } from 'react';
import './css/Controls.scss';
import DrumPads from './DrumPads'


export class Controls extends Component {
    constructor(props) {
        super(props)

        this.state = {
            volume: '',
            display: "",
            power:false
        }
    }
    adjustVolume = (e) => {
        e.preventDefault();
        this.setState({ volume: e.target.value });
        this.setState({ display: ("volume:   " + Math.round(e.target.value * 100)) });
    }

    power= (e) =>{
       this.state.power=!this.state.power;
       if(this.state.power==true){
       this.setState({display:"on"})}
       else{ this.setState({display:"off"})}
    }
    render() {
       
        return (
            <div className="interface">

                <div className="Power-" id='setting'>
                    <h3>Power</h3>
                    <label className="switch">
                        <input type="checkbox" onChange={this.power}/>
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="Screen" id='setting'>
                    <h3>{this.state.display}</h3>
                </div>

                <div className="volume" id='setting'>
                    <input type="range" min="0" max="1" step="0.01" onChange={this.adjustVolume} />
                </div>


                <div className="Bank" id='setting'>
                    <h3>Bank</h3>
                    <label class="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>



            </div>
        )
    }
}

export default Controls
