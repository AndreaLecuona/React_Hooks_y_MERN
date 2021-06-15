import { createContext } from 'react';

export const UserContext = createContext(null);

// Es un higher order component. 
// Es un espacio independiente que contiene cierta información, al que pueden recurrir todos los componentes que configuren su acceso.
// Sirve para transmitir informacion (o props) entre elementos que NO POSEEN RELACION PADRE-HIJO.
