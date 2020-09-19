import { VOLUME_CHANGE, POWER_CHANGE, BANK_CHANGE, PLAY_SOUND, DISPLAY_SOUND } from '../actions/types'
import {bankOne,bankTwo} from '../data/banks';

const initialState = {
    volume: 100,
    display: "",
    power: false,
    bank: false,
    keyTrigger:"",
    url:"",
    
}
export default function (state = initialState, action) {
    switch (action.type) {
        case VOLUME_CHANGE:
            if(state.power===true)
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
            if(state.power===true)
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
            case DISPLAY_SOUND:
                if(state.bank===false){
                return{
                    ...state,
                    url:bankOne.filter(element => action.payload===element.keyTrigger).map(element=> element.url),
                    display:bankOne.filter(element => action.payload===element.keyTrigger).map(element=> element.id),
                   
                }}else{
                    return{
                        ...state,
                    url:bankTwo.filter(element => action.payload===element.keyTrigger).map(element=> element.url),
                    display:bankTwo.filter(element => action.payload===element.keyTrigger).map(element=> element.id),
                    }
                }

            case PLAY_SOUND:
           {
                let sound= new Audio(state.url);
                sound.play()
            }
            


        default:
            return state;
    }
}