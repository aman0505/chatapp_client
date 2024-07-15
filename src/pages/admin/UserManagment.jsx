import React, { useState, useEffect } from 'react'
import AdminLayout from '../../components/layout/Admin/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar } from '@mui/material'
import { dashboardData } from '../../constant/sampledata'
import { transformImage } from '../../lib/Features'

const UserManagment = () => {

  const columns = [
    {
      field: "id",
      headerName: "id",
      headerClassName: "table-header",
      width: 200
    },

    {
      field: "avtars",
      headerName: "avtar",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "table-header",
      width: 200,
    }, {
      field: "userName",
      headerName: "UserName",
      headerClassName: "table-header",
      width: 200,
    }, {
      field: "Friends",
      headerName: "Friends",
      headerClassName: "table-header",
      width: 150
    }, {
      field: "groups",
      headerName: "Groups",
      headerClassName: "table-header",
      width: 200,
    },
    // {
    //   field:"groups",
    //   headerName:"Groups",
    //   headerClassName:"table-header",
    //   width:200,
    // },


  ]
  const [rows, setRows] = useState([])


  useEffect(() => {
    setRows(dashboardData.users.map((i) => ({
      ...i, id: i._id,avatar:transformImage(i.avatar,50)
    })))
  }, []);
  return (
    <AdminLayout>
      <Table heading={"only users"} rows={rows} columns={columns} />
    </AdminLayout>
  )
}

export default UserManagment