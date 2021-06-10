import React from 'react';
//  to share string value 
export const MyContext = React.createContext("")
export const MyProvider = MyContext.Provider;
export const MyConsumer = MyContext.Consumer;

//  to share number value 
//export const MyContext = React.createContext(0)

//  to share array value 
//export const MyContext = React.createContext([])

//to share complext object 
//export const MyContext = React.createContext({})