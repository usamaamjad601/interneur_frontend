import React from 'react'
import { Firstname } from './MyContext'

const ComC = () => {
    return (
        <>
            <Firstname.Consumer>
                {(fname) => {
                    return <h1>My name is {fname}</h1>
                }}
            </Firstname.Consumer>
        </>

    )
}

export default ComC
