import React, { useState, useEffect, useRef, memo } from "react";

import { MenuItem, Menu, Modal, Button, Dialog, DialogContent, DialogContentText, Stack, Box, Typography } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from "@mui/material/Tooltip";
import Checkout from "./Checkout";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { DeleteUserAction } from "../../../Redux/Action/AuthAction";
import 'react-toastify/dist/ReactToastify.css';


const ScrollDialog = (props) => {
  let row = props.row;
  const dispatch = useDispatch();

  console.log("rowSroll", row);



  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [timeDelete, setTimeDelete] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const [openNote, setOpenNote] = useState({ create: false, edit: false, delete: false });
  const handleTooltipClose = function () {
    setOpenNote({ delete: false, edit: false });
  };
  const handleTooltipEditOpen = function () {
    setOpenNote({ edit: row == "" ? true : false });
  };
  const handleTooltipDeleteOpen = function () {
    setOpenNote({ delete: row == "" ? true : false });
  };
  const handleTooltipCreateOpen = function () {
    setOpenNote({ create: true });
  };
  const handleDeleteRow = function () {

  };

  const handleClickOpen = (scrollType) => () => {
    if (openNote.edit === false) {
      setOpen(true);
      setOpenEdit(true);

      setScroll(scrollType);
    }
    if (openNote.create && row.length === 0) {
      setOpen(true);
      setOpenEdit(false);

      setScroll(scrollType);
    }
  };

  const deleteOrRecycleBin = (isDelete) => {
    isDelete ? dispatch(DeleteUserAction(row[0]._id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmYyMWI4YjgyMDZiZGIxYTQxYTI0ZCIsImlhdCI6MTY0ODg2MjE2NCwiZXhwIjoxNjQ4ODY1NzY0fQ.fTMZKrd6od6IFGIS5ZYCdYT_3BaZOLuq_w0QtgA9RFQ")) : console.log("thùng rác")
  }
  const handleClickOpenDelete = (isDelete) => {
    console.log("click delete")
    setTimeDelete(false)
    setTimeout(function () {
      setTimeDelete(true);
    }, 5000)
    toast(
      <div>

        <Button variant="outlined" onClick={() => { deleteOrRecycleBin(isDelete) }} >Confirm</Button>
        <p style={{ display: "inline-block", margin: 10 }}> {isDelete ? "Delete user" : "Move to recycle bin"}</p>
      </div>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })


  };

  const handleClose = () => {
    setOpen(false);

  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {/* Button Create */}
      <Tooltip title="Bỏ item để thêm mới" open={openNote.create} onOpen={handleTooltipCreateOpen} onClose={handleTooltipClose}>
        <Button sx={{ ml: 5 }} onClick={handleClickOpen("paper")}>
          Create
        </Button>
      </Tooltip>

      {/* Button Update */}
      <Tooltip title="Chọn item để chỉnh sửa" open={openNote.edit} onOpen={handleTooltipEditOpen} onClose={handleTooltipClose}>
        <Button sx={{ ml: 5 }} onClick={handleClickOpen("paper")}>
          Edit
        </Button>
      </Tooltip>

      {/* Button Delete */}

      {/* <Button sx={{ ml: 5 }} onClick={handleClickOpenDelete}>
          Delete
        </Button> */}
      <PopupState popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Tooltip title="Chọn item để xóa" open={openNote.delete} onOpen={handleTooltipDeleteOpen} onClose={handleTooltipClose}>
              <Button sx={{ ml: 5 }} {...bindTrigger(popupState)}>
                Delete
              </Button>

            </Tooltip>
            <Menu {...bindMenu(popupState)}>
              {
                // Nếu là admin
                false ?
                  <div>
                    <MenuItem onClick={() => { timeDelete && handleClickOpenDelete(false); popupState.close(); }}>Recyle Bin</MenuItem>

                    <MenuItem onClick={() => { timeDelete && handleClickOpenDelete(true); popupState.close(); }}>Delete</MenuItem>
                  </div>
                  :
                  <MenuItem onClick={() => { timeDelete && handleClickOpenDelete(false); popupState.close(); }}>Recyle Bin</MenuItem>
              }


            </Menu>
          </React.Fragment>
        )}
      </PopupState>


      <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>

            <Checkout openEdit={openEdit} row={row} />
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
      // pauseOnHover={false}
      />

    </div >
  )
}
export default memo(ScrollDialog);