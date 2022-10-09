import React from 'react'
import Sidebar from '../components/global/Sidebar'


const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Sidebar user={props.user} />
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout