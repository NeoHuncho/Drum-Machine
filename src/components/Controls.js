import React, { Component } from 'react';
import './css/Controls.scss';
import { connect } from 'react-redux';
import { volumeChange} from '../actions/postActions';

const mapStateToProps = state => ({
    volume: state.posts.volume,
    display: state.posts.display
})
export class Controls extends Component {
    constructor(props) {
        super(props)

        this.state = {
            volume: '',
            display: "",
            power:false,
            bank:"a"
        }
    }
    adjustVolume = (e) => {
       this.props.volumeChange(e.target.value);
        this.setState({ volume: e.target.value });
        this.setState({ display: ("volume:   " + Math.round(e.target.value * 100)) });
    }

    power= (e) =>{
       this.state.power=!this.state.power;
       if(this.state.power===true){
       this.setState({display:"on"})}
       else{ this.setState({display:"off"})}
    }
    bank= (e) => {
        console.log(e)
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
                    <h3>{this.props.display}</h3>
                </div>

                <div className="volume" id='setting'>
                    <input type="range" min="0" max="1" step="0.01" onChange={this.adjustVolume} />
                </div>


                <div className="Bank" id='setting'>
                    <h3>Bank</h3>
                    <label class="switch">
                        <input type="checkbox" onChange={this.bank}/>
                        <span className="slider"></span>
                    </label>
                </div>



            </div>
        )
    }
}

export default connect(mapStateToProps, { volumeChange })(Controls);
