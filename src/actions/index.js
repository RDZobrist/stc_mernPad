import axios from 'axios';
export const FETCH_NOTES = 'fetch_notes';

export function fetchNotes () {
    const request = axios.get("/notes");
 
    return {
        type: FETCH_NOTES,
        payload: request
    }
}

export function createNote () {
    const request = axios.post("/");

    return {
        type: FETCH_NOTES,
        payload: request
    }
}