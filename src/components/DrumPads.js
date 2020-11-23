import React, { Component } from 'react';
import './css/DrumPads.css';
import { connect } from 'react-redux';
import{playSound,displaySound} from '../actions/postActions'
import {motion} from 'framer-motion'


 const hover= {
    scale: 1.02
  }
  const tap={
    scale: 0.9, 
  }

function onTapStart(event,info){
  
}


export class drum_Pads extends Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  

  playSound=(e)=>{
  this.props.displaySound(e.target.getAttribute("id"));
  this.props.playSound();
  
    }
    handleKeyPress=(e)=>{

    this.props.displaySound(e.keyCode.toString());
    this.props.playSound();
    }


    render() {
        return (
         <section className="drums">
            <motion.div whileHover={hover}onTapStart={onTapStart}  whileTap={tap} className="drum-pad" id="81" onKeyPress={this.handleKeyPress.bind(this)}name="Q" onClick={this.playSound}>q</motion.div>
            <motion.div whileHover={hover} whileTap={tap} className="drum-pad"id="87"  name="W" onClick={this.playSound}>w</motion.div>
            <motion.div whileHover={hover} whileTap={tap} className="drum-pad" id="69" name="E" onClick={this.playSound}>e</motion.div>
            <motion.div whileHover={hover} whileTap={tap} className="drum-pad"id="65"  name="A" onClick={this.playSound}>a</motion.div>
            <motion.div whileHover={hover} whileTap={tap} className="drum-pad" id="83" name="S" onClick={this.playSound}>s</motion.div>
            <motion.div whileHover={hover} whileTap={tap} className="drum-pad" id="68" name="D" onClick={this.playSound}>d</motion.div>
            <motion.div whileHover={hover} whileTap={tap} className="drum-pad" id="90" name="Z" onClick={this.playSound}>z</motion.div>
            <motion.div whileHover={hover} whileTap={tap}className="drum-pad" id="88" name="X" onClick={this.playSound}>x</motion.div>
            <motion.div whileHover={hover} whileTap={tap} className="drum-pad" id="67" name="C" onClick={this.playSound}>c</motion.div>
        </section>
        )
    }
}

export default connect(null, {playSound,displaySound})(drum_Pads);
