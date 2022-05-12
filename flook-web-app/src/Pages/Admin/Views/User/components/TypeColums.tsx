import * as React from 'react';
import moment from "moment";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { GridActionsCellItem, GridRowId } from '@mui/x-data-grid-pro';
import { AntSwitch } from '../../../../../Assets/Theme/AppStyle';


const deleteUser = (id:GridRowId) => () => {
  setTimeout(() => {
    
    alert(JSON.stringify(id))
  });
};

export const columAction = {
  width: 120,
  field: 'actions',
  type: 'actions',
  getActions: (params: any) => [
    <GridActionsCellItem 
      label="Edit" 
      sx={{m:0,p:0}} 
      icon={<SettingsOutlinedIcon sx={{m:0,p:0}}/>}
    />,
    <GridActionsCellItem 
      label="isActive"
      sx={{m:0,p:0}} 
      icon={
        <Stack direction="row" spacing={1} alignItems="center">
          <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
        </Stack>
      }
    />,
    <GridActionsCellItem 
      label="Delete" 
      sx={{m:0,p:0}} 
      icon={<DeleteOutlineOutlinedIcon sx={{m:0,p:0}}/>}  
      onClick={deleteUser(params.id)}
    />,
  ],
}

// ========================== Info table ====================================>>>
export const columnsUsers = [
  { width: 100, editable: false, hide: true, field: "id", headerName: "Stt" },
  { width: 120, editable: false, field: "avatar", headerName: "Avatar" },
  { width: 200, editable: false, field: "email", headerName: "Email" },
  { width: 170, editable: false, field: "displayName", headerName: "DisplayName" },
  { width: 150, editable: false, field: "userName", headerName: "UserName" },
  { width: 150, editable: false, hide: true, field: "password", headerName: "Mật khẩu" },
  { width: 170, editable: false, field: "phoneNumber", headerName: "Phone Number" },
  { width: 100, editable: false, field: "roles", headerName: "Roles", renderCell: (params: any) => params.value[0].name },
  {...columAction}
]


// ========================== Info model ====================================>>>

export const InfoModelUser = [
  {
    field: "_id",
    class: "col-md-6 mb-3",
    classInput: "form-control",
    label: "Mã người dùng",
    placeholder: "Nhập mã người dùng",
    disabled: true,
  },
  { field: "displayName", class: "col-md-6 mb-3", classInput: "form-control", label: "Họ tên", placeholder: "Nhập họ tên" },
  { field: "userName", class: "col-md-6 mb-3", classInput: "form-control", label: "Tài khoản", placeholder: "Nhập tài khoản" },
  { field: "password", class: "col-md-6 mb-3", classInput: "form-control", label: "Mật khẩu", placeholder: "Nhập mật khẩu" },
  { field: "email", class: "col-md-6 mb-3", classInput: "form-control", label: "Email", placeholder: "Nhập email" },
  { field: "phoneNumber", class: "col-md-6 mb-3", classInput: "form-control", label: "Số điện thoại", placeholder: "Nhập sô điện thoại" },
  { field: "roles", class: "col-md-6 mb-3", classInput: "form-control", label: "Loại người dùng" },
];

export const InfoModelMovie = [
  { field: "_id", class: "col-md-6 mb-2", label: "Mã phim", placeholder: "Nhập ID", disabled: true },
  { field: "name", class: "col-md-6 mb-2", label: "Tên phim", placeholder: "Nhập tên phim" },
  { field: "trailer", class: "col-md-6 mb-3", label: "Trailer", placeholder: "Nhập link trailer" },
  { field: "premiere", class: "col-md-6 mb-3", label: "Ngày khởi chiếu", placeholder: "Nhập ngày khởi chiếu" },
  { field: "imag", class: "col-md-12 mb-2", label: "Hình ảnh", placeholder: "Nhập tên phim", type: "file" },
  { field: "otherImages", class: "col-md-12 mb-3", label: "Hình ảnh liên quan", placeholder: "Nhập tên phim", type: "file" },
  { field: "discription", class: "col-12 mb-3", label: "Mô tả", placeholder: "Nhập mô tả" },
];

export const InfoModelCorn = [{ label: "" }];
