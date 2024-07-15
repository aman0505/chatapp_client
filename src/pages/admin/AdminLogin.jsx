import { useInputValidation } from "6pp"
import {

    Button,
    Container,
    Paper,
    TextField,
    Typography
} from "@mui/material"

import React, { useState } from 'react'
import { Navigate } from "react-router-dom"

const AdminLogin = () => {


    const isadmin = true

    const secretkey = useInputValidation("")

    const submitHanlder = (e) => {
        e.preventDefault()

    }

    // if (isadmin===false) {
    //     return <Navigate to={"/admin"} />
    // }

    if (isadmin) {

        return <Navigate to={"/admin/dashboard"} />
    }





    return (

        <div style={{

        }}>

            <Container component={"main"} maxwidth="sm" sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >



                    <Typography variant='h5'>Admin Login</Typography>
                    <form style={{
                        width: "100%",
                        marginTop: "1rem"

                    }}
                        onSubmit={submitHanlder}
                    >

                        <TextField value={secretkey.value} onChange={secretkey.changeHandler} required fullWidth label="password" margin='normal' type='password' variant='outlined' />
                        <Button fullWidth type='submit' sx={{
                            marginTop: "1rem"
                        }} variant='contained' color='primary'   >
                            login
                        </Button>



                    </form>


                </Paper>

            </Container>
        </div>

    )
}

export default AdminLogin