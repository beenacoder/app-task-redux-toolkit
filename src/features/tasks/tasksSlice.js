import { createSlice } from "@reduxjs/toolkit";

//initialState es el equivalente al valor inicial de un useState

const initialstate = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    },
];

export const taskSlice =  createSlice({
    name: 'tasks',
    initialState: initialstate,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },

        editTask: (state, action) => {
            const {id, title, description} = action.payload;
            const foundTask = state.find(task => task.id === id);
            if(foundTask){
                foundTask.title = title 
                foundTask.description = description 
            }
        },


        deleteTask: (state, action) => {
            //Opcion 1: Inmutabilidad del estado, manteniendo el array original y devolviendo otro. (No destructivo)
            // return state.filter(task => task.id !== action.payload)

            
            //Opcion 2: Mutabilidad del estado, elimina del array original. (Destructivo)
            const taskFound = state.find(task => task.id === action.payload);
            if(taskFound){
                state.splice(state.indexOf(taskFound), 1);
            }
        },

    }
})
export const {addTask, editTask, deleteTask} = taskSlice.actions //Exportamos las acciones (estan ubicadas en los reducers)

export default taskSlice.reducer; // exportamos todo el objeto