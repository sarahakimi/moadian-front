import {useState} from "react";
import toast from "react-hot-toast";
import IconButton from "@mui/material/IconButton";
import DotsVertical from "mdi-material-ui/DotsVertical";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {EyeOutline, PlusOutline} from "mdi-material-ui";
import PencilOutline from "mdi-material-ui/PencilOutline";
import DeleteOutline from "mdi-material-ui/DeleteOutline";
import {deleteCompany} from "./requests";
import DeleteDialog from "../../@core/components/deleteDialog/delete-dialog";

export default function RowOptions({
                                     company,
                                     setSelectedCompany,
                                     toggleEditDurationDrawer,
                                     toggleEditUserDrawer,
                                     toggleShowUserDrawer,
                                     selectedCompany,
                                     setChange,
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

  const deleteFunction = company => {
    toast.promise(deleteCompany(company.id).then(setChange(true)), {
        loading: 'در حال حذف شرکت',
        success: 'با موفقیت حذف شد',
        error: (err) => err.response.data.message ? err.response.data.message : "خطایی رخ داده است",
      }
    )
  }

  const handleDurationExtention = selected => {
    setSelectedCompany(selected)
    toggleEditDurationDrawer()
    handleRowOptionsClose()
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
          نمایش شرکت
        </MenuItem>
        <MenuItem onClick={() => handleDurationExtention(company)}>
          <PlusOutline fontSize='small' sx={{mr: 2}}/>
          تمدید اشتراک
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
