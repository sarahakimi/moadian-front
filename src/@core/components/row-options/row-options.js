import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import DotsVertical from "mdi-material-ui/DotsVertical";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {EyeOutline} from "mdi-material-ui";
import PencilOutline from "mdi-material-ui/PencilOutline";
import DeleteOutline from "mdi-material-ui/DeleteOutline";
import DeleteDialog from "../deleteDialog/delete-dialog";


export default function RowOptions({
                                     company,
                                     setSelectedCompany,
                                     toggleEditUserDrawer,
                                     toggleShowUserDrawer,
                                     selectedCompany,
                                     deleteFunction
                                   }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)
  const [open, setOpen] = useState(false)

  const handleRowOptionsClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = company => {
    setSelectedCompany(company)
    handleRowOptionsClose()
    setOpen(true)
  }


  const handleEdit = selected => {
    setSelectedCompany(selected)
    toggleEditUserDrawer()
    handleRowOptionsClose()
  }

  const handleShowCompany = selected => {
    setSelectedCompany(selected)
    toggleShowUserDrawer()
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <DotsVertical/>
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{style: {minWidth: '8rem'}}}
      >
        <MenuItem onClick={() => handleShowCompany(company)}>
          <EyeOutline fontSize='small' sx={{mr: 2}}/>
          نمایش کاربر
        </MenuItem>
        <MenuItem onClick={() => handleEdit(company)}>
          <PencilOutline fontSize='small' sx={{mr: 2}}/>
          ویرایش
        </MenuItem>
        <MenuItem onClick={() => handleDelete(company)}>
          <DeleteOutline fontSize='small' sx={{mr: 2}}/>
          حذف
        </MenuItem>
      </Menu>
      <DeleteDialog open={open} setOpen={setOpen} company={selectedCompany} closeFunction={deleteFunction}/>
    </>
  )
}
