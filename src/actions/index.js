import axios from 'axios';
export const FETCH_NOTES = 'fetch_notes';
export const CREATE_NOTE = 'create_note';
export const FETCH_NOTE = 'fetch_note';
export const DELETE_NOTE = 'delete_note';
export const EDIT_NOTE = 'edit_note';

export function fetchNotes () {
    const request = axios.get("/notes");
 
    return {
        type: FETCH_NOTES,
        payload: request
    }
}
export function editNote(values, callback) {
    let title = values.title;
    let body = values.body;
    let category = values.category;
    let id = values.id;
    let editNoteObj = {
        title,
        body,
        category,
        id
    };
 
    const request = axios.put(`/editnote/${id}`, editNoteObj).then(() => callback());

    return {
        type: EDIT_NOTE,
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

export function deleteNote (id, callback) {
    const request = axios.delete(`/note/${id}`).then(()=> callback());

    return {
        type: DELETE_NOTE,
        payload: id
    }

  }
