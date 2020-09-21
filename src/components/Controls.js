import React, { Component } from 'react';
import './css/Controls.scss';
import { connect } from 'react-redux';
import { volumeChange, powerChange,bankChange } from '../actions/postActions';

const mapStateToProps = state => ({
    display: state.drumMachine.display
})
export class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    adjustVolume = (e) => {
        this.props.volumeChange(e.target.value);
    }

    power = (e) => {
        this.props.powerChange(e.target.checked);
    }
    bank = (e) => {
        this.props.bankChange(e.target.checked);
    }


    render() {

        return (

            <div className="interface">

                <div className="Power setting" id=''>
                    <h3>Power</h3>
                    <label className="switch">
                        <input type="checkbox"  onChange={this.power} />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="Screen setting" id='display'>
                    <h3>{this.props.display}</h3>
                </div>

                <div className="volume setting" id=''>
                    <input type="range" min="0" max="1" step="0.01" onChange={this.adjustVolume} />
                </div>


                <div className="Bank setting" id=''>
                    <h3>Bank</h3>
                    <label class="switch">
                        <input type="checkbox" onChange={this.bank} />
                        <span className="slider"></span>
                    </label>
                </div>



            </div>
        )
    }
}

export default connect(mapStateToProps, { volumeChange, powerChange,bankChange })(Controls);
