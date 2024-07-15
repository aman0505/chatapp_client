import React, { useState } from 'react'
import {
    Avatar,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material"
import { CameraAlt } from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/style/StyleComponents'
import { useInputValidation, isValidUsername, useFileHandler } from "6pp"
import { transformImage } from '../lib/Features'

const Login = () => {
    const [islogin, setIslogin] = useState(true)
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const usernamevalidation = (username) => {
        if (!isValidUsername(username)) {
            return { isValid: false, errorMessage: "username is invalid" }
        }
    }
    const avtar = useFileHandler("single")
    console.log(avtar);
    const password = useInputValidation("");
    let username = useInputValidation("", usernamevalidation)
    const togglelogin = () => {
        setIslogin(!islogin)
    }
    const sugnuphandle=(e)=>{
        e.preventDefault()

    }
    const loginhandle=(e)=>{
        e.preventDefault()

    }
    return (
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

                {islogin ?
                    <>
                        <Typography variant='h5'>login</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem"
                            
                        }}  
                        onSubmit={loginhandle}
                        >
                            <TextField value={username.value} onChange={username.changeHandler} required fullWidth label="username" margin='normal' variant='outlined' />
                            {username.error && (
                                <Typography color={"red"} variant='caption'>
                                    {username.error}
                                </Typography>
                            )}
                            <TextField required fullWidth label="password" margin='normal' type='password' variant='outlined' />
                            <Button fullWidth type='submit' sx={{
                                marginTop: "1rem"
                            }} variant='contained' color='primary'   >
                                login
                            </Button>
                            <Typography textAlign={"center"} m={"1rem"} >or</Typography>

                            <Button fullWidth type='submit'
                                variant='text'
                                onClick={togglelogin}

                            >
                                Sign instead
                            </Button>
                        </form>
                    </>
                    : <>
                        <Typography variant='h5'>Sign Up</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem"
                        }}  onSubmit={sugnuphandle}>
                            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                <Avatar sx={{
                                    width: "100%",
                                    height: "10rem",
                                    objectFit: "contain",



                                }} src={avtar.preview} />

                                {avtar.error && (
                                    <Typography color={"red"} variant='caption'>
                                        {avtar.error}
                                    </Typography>
                                )}

                                <IconButton sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0
                                }}
                                    component="label"
                                >
                                    <CameraAlt />
                                    <VisuallyHiddenInput type="file" onChange={avtar.changeHandler} />
                                </IconButton>
                            </Stack>
                            <TextField required fullWidth label="name" margin='normal' variant='outlined' />

                            <TextField value={username.value} onChange={username.changeHandler} required fullWidth label="username" margin='normal' variant='outlined' />
                            {username.error && (
                                <Typography color={"red"} variant='caption'>
                                    {username.error}
                                </Typography>
                            )}
                            <TextField required fullWidth label="bio" margin='normal' variant='outlined' />

                            <TextField required fullWidth label="password" margin='normal' type='password' variant='outlined' />
                            <Button fullWidth type='submit' sx={{
                                marginTop: "1rem"
                            }} variant='contained' color='primary'   >
                                login
                            </Button>
                            <Typography textAlign={"center"} m={"1rem"} >or</Typography>

                            <Button fullWidth type='submit'
                                variant='text'
                                onClick={togglelogin}

                            >
                                login instead
                            </Button>
                        </form>
                    </>}

            </Paper>

        </Container>
    )
}

export default Login