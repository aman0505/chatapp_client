import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleuser } from '../../constant/sampledata'
import Useritem from '../shared/Useritem'
import { useInputValidation } from '6pp'
const NewGroups = () => {

    const groupname = useInputValidation()

    const submitHandler = () => {

    }



    const [members, setMembers] = useState(sampleuser)
    const [selectedMembers, setSelectedMembers] = useState([])
    const a = [1, 2, 34, 5, 6, 647, 7, 7, 676, 67,]

    const selectMemberHandler = (_id) => {
        setSelectedMembers((prev) => prev.includes(_id) ? [...prev.filter((current) => current !== _id)] : [...prev, _id])


    }

    const closehandler = () => {
        console.log("dialog closed ")
    }
    return (
        <Dialog open onClose={closehandler}>
            <Stack p={{ xs: "1rem", sm: "3rem" }} Width={"30rem"} spacing={"2rem"}>
                <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>

                <TextField lebel="Group name" value={groupname.value} onChange={groupname.changeHandler} />
                <Typography varient="body1">Members</Typography>
                <Stack>
                    {
                        members.map((i) => (
                            <Useritem user={i}
                                key={i._id}
                                handler={selectMemberHandler}
                                isadded={selectedMembers.includes(i._id)}

                            />
                        ))
                    }
                    <Stack direction={"row"} justifyContent={"space-evenly"}>
                        <Button variant='outlined' color="error">Cancle</Button>
                        <Button variant='contained' onClick={submitHandler}>Create</Button>


                    </Stack>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default NewGroups