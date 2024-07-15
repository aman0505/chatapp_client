import React, { useState, useEffect } from 'react'
import AdminLayout from '../../components/layout/Admin/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar, Stack } from '@mui/material'
import { dashboardData } from '../../constant/sampledata'
import { transformImage } from '../../lib/Features'

import Avatarcard from "../../components/shared/Avtarcard"
const ChatManagment = () => {

  const columns = [
    {
      field: "id",
      headerName: "id",
      headerClassName: "table-header",
      width: 200
    },

    {
      field: "avatar",
      headerName: "avatar", 
      headerClassName: "table-header",
      width: 150,
      renderCell: (params) => <Avatarcard src={params.row.avatar} />
    },
    {
      field: "name",
      headerName: "name",
      headerClassName: "table-header",
      width: 150,
    }, {
      field: "totalMembers",
      headerName: "Total Members",
      headerClassName: "table-header",
      width: 120,
    }, {
      field: "members",
      headerName: "members",
      headerClassName: "table-header",
      width: 400,
      renderCell: (params) => <Avatarcard max={100} avatar={params.row.members} />

    }, {
      field: "totalMessages",
      headerName: "totalMessages",
      headerClassName: "table-header",
      width: 120,
    },
    {
      field: "creator",
      headerName: "Groups",
      headerClassName: "table-header",
      width: 250,
      renderCell: (params) => (
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
          <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
          <span>
            {params.row.creator.name}
          </span>
        </Stack>
      )
    },


  ]
  const [rows, setRows] = useState([])


  useEffect(() => {
    // setRows(dashboardData.users.map((i) => ({
    //   ...i, id: i._id,
    //    avatar: i.avatar.map((i)=>transformImage(i, 50))
    // })))
  }, []);
  return (
    <AdminLayout>
      <Table heading={"All chats"} rows={rows} columns={columns} />
    </AdminLayout>
  )
}



export default ChatManagment