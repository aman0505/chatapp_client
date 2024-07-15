import React from 'react'
import AdminLayout from '../../components/layout/Admin/AdminLayout'
import { Avatar, Stack } from '@mui/material'

const MessageManagment = () => {
  const columns = [
    {
      field: "id",
      headerName: "id",
      headerClassName: "table-header",
      width: 200
    },

    {
      field: "attachments",
      headerName: "Attachments",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />
    },
    {
      field: "content",
      headerName: "Content",
      headerClassName: "table-header",
      width: 400,
    }, {
      field: "sender",
      headerName: "send By",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) =>
        <Stack>
          <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
          <span>
            {params.row.sender.name}
          </span>
        </Stack>
    }, {
      field: "chat",
      headerName: "chat",
      headerClassName: "table-header",
      width: 220
    }, {
      field: "groupChat",
      headerName: "Group chat",
      headerClassName: "table-header",
      width: 100,
    },
    {
      field:"CreatedAt",
      headerName:"time",
      headerClassName:"table-header",
      width:200,
    },


  ]


  return (
    <AdminLayout>

        <div>MessageManagment</div>
    </AdminLayout>
  )
}

export default MessageManagment