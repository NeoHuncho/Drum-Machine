import React, { Component } from 'react';
import './css/DrumPads.css';
import { connect } from 'react-redux';
import{playSound,displaySound} from '../actions/postActions'




export class drum_Pads extends Component {
   
  

  playSound=(e)=>{
  this.props.displaySound(e.target.getAttribute('name'));
  this.props.playSound();
  
    }


    render() {
        return (
         <section class="drums">
            <div class="pad" name="Q" onClick={this.playSound}>q</div>
            <div class="pad" name="W" onClick={this.playSound}>w</div>
            <div class="pad" name="E" onClick={this.playSound}>e</div>
            <div class="pad" name="A" onClick={this.playSound}>a</div>
            <div class="pad" name="S" onClick={this.playSound}>s</div>
            <div class="pad" name="D" onClick={this.playSound}>d</div>
            <div class="pad" name="Z" onClick={this.playSound}>z</div>
            <div class="pad" name="X" onClick={this.playSound}>x</div>
            <div class="pad" name="C" onClick={this.playSound}>c</div>
        </section>
        )
    }
}

export default connect(null, {playSound,displaySound})(drum_Pads);
