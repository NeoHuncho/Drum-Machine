import React, { Component } from 'react';
import './css/Controls.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

export default function Controls() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="interface">
            
            <div class="Power-" id='setting'>
                <h3>Power</h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider"></span>
                </label>
            </div>
            <div class="Screen" id='setting'>
                <h3>Display</h3>
            </div>

            <div class="Volume" id='setting'>
                <div className={classes.root}>
                    <Typography id="continuous-slider" gutterBottom>
                      
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                    
                </div>
            </div>

            <div class="Bank" id='setting'>
            <h3>Bank</h3>
            <label class="switch">
                    <input type="checkbox" />
                    <span class="slider"></span>
            </label>
            </div>



        </div>
    )
}


