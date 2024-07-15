import {
  Dialog,
  DialogTitle,
  InputAdornment,
  Stack,
  TextField,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { useInputValidation } from "6pp"
import { Search as SearchIcon } from "@mui/icons-material"
import React, { useState } from 'react'
import Useritem from '../shared/Useritem';
import { sampleuser } from '../../constant/sampledata';



const SearchDialog = () => {
  const [user, setUser] = useState(sampleuser)

  const search = useInputValidation("")
  let isLoadingsendFriendRequest = false
  const addFriendHandler = (id) => {
    console.log(id)

  }



  return (

    <Dialog open>

      <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"} > Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          inputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}

        />

        <List>
          {
            user.map((i) => (
              <Useritem user={i}
                key={i._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingsendFriendRequest} />
            ))
          }
        </List>
      </Stack>
    </Dialog>
  )
}

export default SearchDialog