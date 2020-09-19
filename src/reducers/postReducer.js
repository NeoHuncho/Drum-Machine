import { VOLUME_CHANGE,DISPLAY_CHANGE,POWER_CHANGE,BANK_CHANGE } from '../actions/types'

const initialState = {
    volume: 100,
    display: "",
    power:false,
    bank:"a"
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
        case DISPLAY_CHANGE:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}