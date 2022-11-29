import React from 'react'
import { createContext } from 'react'
import ComA from './ComA'

const Firstname = createContext();

const MyContext = () => {

    return (
        <>
            <Firstname.Provider value={'Idrees Ahmed'}>
                <ComA />
            </Firstname.Provider>
        </>
    )
}

export default MyContext
export { Firstname };