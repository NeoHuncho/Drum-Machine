import React, { Component } from 'react';
import './css/DrumPads.css';
import { connect } from 'react-redux';
import{playSound,displaySound} from '../actions/postActions'
import {motion} from 'framer-motion'

const animation={
  hover: {
    scale: 1.02
  },
  tap:{
    scale: 0.9, color: "red" ,duration:0.05
  }
}
tap:{}


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
            <div whileHover="hover" whileTap={{ scale: 0.8, color: "red"}} class="drum-pad" id="81" onKeyPress={this.handleKeyPress.bind(this)}name="Q" onClick={this.playSound}>q</div>
            <div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="drum-pad"id="87"  name="W" onClick={this.playSound}>w</div>
            <div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="drum-pad" id="69" name="E" onClick={this.playSound}>e</div>
            <div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="drum-pad"id="65"  name="A" onClick={this.playSound}>a</div>
            <motion.div whileHover={{ scale: 1.02}} whileTap={{ scale: 0.9, color: "red" ,duration:0.05}} class="drum-pad" id="83" name="S" onClick={this.playSound}>s</motion.div>
            <motion.div whileHover="hover" whileTap="tap" class="drum-pad" id="68" name="D" onClick={this.playSound}>d</motion.div>
            <motion.div whileHover={{ scale: 1.02}} whileTap={{ scale: 0.9 }} class="drum-pad" id="90" name="Z" onClick={this.playSound}>z</motion.div>
            <motion.div whileHover={{ scale: 1.02}} whileTap={{ scale: 0.9 }}class="drum-pad" id="88" name="X" onClick={this.playSound}>x</motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="drum-pad" id="67" name="C" onClick={this.playSound}>c</motion.div>
        </section>
        )
    }
}

export default connect(null, {playSound,displaySound})(drum_Pads);
