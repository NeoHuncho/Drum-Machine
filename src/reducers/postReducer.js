import { VOLUME_CHANGE, POWER_CHANGE, BANK_CHANGE, PLAY_SOUND } from '../actions/types'
import {bankOne,bankTwo} from '../data/banks';

const initialState = {
    volume: 100,
    display: "",
    power: false,
    bank: "a",
    keyTrigger:""
}
export default function (state = initialState, action) {
    switch (action.type) {
        case VOLUME_CHANGE:
            console.log('reducer')
            return {
                ...state,
                volume: action.payload,
                display: ("volume:   " + Math.round(action.payload * 100))
            };
        case POWER_CHANGE:
            if (action.payload === true) {
                return {
                    ...state,
                    power: action.payload,
                    display: 'on'
                }
            } else {
                return {
                    ...state,
                    power: action.payload,
                    display: 'off'
                }
            }
        case BANK_CHANGE:
            if (action.payload === true) {
                return {
                    ...state,
                    bank: action.payload,
                    display: 'Bank B'
                }
            } else {
                return {
                    ...state,
                    bank: action.payload,
                    display: 'Bank A'
                }
            }
            case PLAY_SOUND:
            {
                if(state.bank==="a"){
                let url=bankOne.filter(element => action.payload===element.keyTrigger).map(element=> element.url);
                let sound= new Audio(url);
                sound.play()}else{
                let url=bankTwo.filter(element => action.payload===element.keyTrigger).map(element=> element.url);
                let sound= new Audio(url);
                sound.play()
                }
            }


        default:
            return state;
    }
}