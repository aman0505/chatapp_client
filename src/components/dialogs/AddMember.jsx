import React, { useState } from 'react'
import Useritem from '../shared/Useritem'
import { sampleuser } from "../../constant/sampledata"
import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'

const AddMember = ({ addmember, isloadingAddMember, chadId }) => {

    const [members, setMembers] = useState(sampleuser)
    const [selectedMembers, setSelectedMembers] = useState([])


    const selectMemberHandler = (_id) => {
        setSelectedMembers((prev) => prev.includes(_id) ? [...prev.filter((current) => current !== _id)] : [...prev, _id])


    }


    const addFriendHandler = () => {
        console.log("addFriendHandler")
    }
    const addMemberSubmitHanlder = () => {
        closeHandler()


    }

    const closeHandler = () => {
        setSelectedMembers([])
        setMembers([])
    }
    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
                <DialogTitle textAlign={"center"}>
                    Add Member
                </DialogTitle>
                <Stack spacing={"1rem"}>
                    {
                        members.length > 0 ?
                            members.map((i) => (
                                <Useritem
                                    isadded={

                                        selectedMembers.includes(i._id)
                                    }
                                    key={i._id} user={i} handler={selectMemberHandler} />
                            )) : <Typography>
                                No Friends
                            </Typography>
                    }
                </Stack>
                <Stack direction={"row"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}>


                    <Button onClick={closeHandler} color='error'>cancle</Button>
                    <Button onClick={addMemberSubmitHanlder} variant='contained' disabled={isloadingAddMember} >submit change</Button>
                </Stack>

            </Stack>
        </Dialog>
    )
}

export default AddMember