import React from 'react'
import { Helmet } from "react-helmet-async"
const Title = ({ title = "chat aap", description = "this is description " }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
            </Helmet>
        </>
    )
}

export default Title