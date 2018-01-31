import { FETCH_NOTES, FETCH_NOTE } from '../actions';
import _ from 'lodash';


export default function(state={}, action) {
    switch (action.type) {
        case FETCH_NOTES:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;

        case FETCH_NOTE:
            // return state, adding new data on to existing state obj
            // key interpolation used to se7t id as key
            return {...state,[action.payload.data.id]: action.payload.data
            };
            }
                
    }
