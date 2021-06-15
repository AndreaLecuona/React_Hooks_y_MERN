import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

//const [state, dispatch] = useReducer(reducer, initialState, init)
//init: Es una funcion para inicializar el state en caso que éste sea procesado o haga varias acciones (retorna el initial state)
//dispatch: Ayuda a "disparar"/enviar las acciones hacia el reducer para volver a renderizar en caso de haberse producido un cambio en el state


// const initialState = [{
//     id: new Date().getTime(),
//     desc: "Barry Lyndon - Stanley Kubrick",
//     done: false
// }];

const init = () => {
    //LEER DE LOCAL STORAGE Y MANDARLO COMO INITIAL STATE
    return JSON.parse(localStorage.getItem( 'todos' )) || [];

    // return(
    //     [{
    //         id: new Date().getTime(), //simulacion de id
    //         desc: "Barry Lyndon - Stanley Kubrick",
    //         done: false
    //     }]
    // )
}


export const TodoApp = () => {

    //Extraigo del resultado del reducer una lista de items
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    //GUARDAR EN LOCAL STORAGE
    //guardar en primer renderizado y cada vez que la lista cambie
    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos]);

    const handleDelete = (todoId) => {
        console.log(todoId);

        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch( action );
    }

    const handleToggle = (todoId) => {
        dispatch( {
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAdd = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div className="wrapper my-5">

            <div className="row both-sides mx-5">
                <h1>TodoApp ({ todos.length })</h1>

                <div className="col-sm-12 col-lg-5 mt-5">
                    <TodoList
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />

                </div>

                <div className="col-sm-12 col-lg-7 mt-5">            
                    <TodoAdd
                    handleAdd={ handleAdd }
                    />

                </div>

            </div>
            
        </div>
    )
}
