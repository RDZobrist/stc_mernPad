import axios from 'axios';
export const FETCH_NOTES = 'fetch_notes';
export const CREATE_NOTE = 'create_note';
export const FETCH_NOTE = 'fetch_note';

export function fetchNotes () {
    const request = axios.get("/notes");
 
    return {
        type: FETCH_NOTES,
        payload: request
    }
}

export function createNote (values, callback) {
    let title = values.title;
    let body = values.body;
    let category = values.category;

    let noteOBJ = {
        title, 
        body, 
        category
    };
    const request = axios.post("/new/note", noteOBJ).then(() => callback());

    return {
        type: CREATE_NOTE,
        payload: request
    }
}

export function fetchNote (id) {
   const request = axios.get(`/note/${id}`);

    return {
        type: FETCH_NOTE,
        payload: request
    }
}