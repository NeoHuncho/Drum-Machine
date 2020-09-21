import React, { Component } from 'react';
import './css/DrumPads.css';
import { connect } from 'react-redux';
import{playSound,displaySound} from '../actions/postActions'




export class drum_Pads extends Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  

  playSound=(e)=>{
  this.props.displaySound(e.target.getAttribute("id"));
  this.props.playSound();
  
    }
    handleKeyPress=(e)=>{

    this.props.displaySound(e.keyCode);
    this.props.playSound();
    }


    render() {
        return (
         <section class="drums">
            <div class="drum-pad" id="81" onKeyPress={this.handleKeyPress.bind(this)}name="Q" onClick={this.playSound}>q</div>
            <div class="drum-pad"id="87"  name="W" onClick={this.playSound}>w</div>
            <div class="drum-pad" id="69" name="E" onClick={this.playSound}>e</div>
            <div class="drum-pad"id="65"  name="A" onClick={this.playSound}>a</div>
            <div class="drum-pad" id="83" name="S" onClick={this.playSound}>s</div>
            <div class="drum-pad" id="68" name="D" onClick={this.playSound}>d</div>
            <div class="drum-pad" id="90" name="Z" onClick={this.playSound}>z</div>
            <div class="drum-pad" id="88" name="X" onClick={this.playSound}>x</div>
            <div class="drum-pad" id="67" name="C" onClick={this.playSound}>c</div>
        </section>
        )
    }
}

export default connect(null, {playSound,displaySound})(drum_Pads);
