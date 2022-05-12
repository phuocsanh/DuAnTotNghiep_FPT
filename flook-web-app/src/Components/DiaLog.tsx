import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import actionTypes from '../Shop/Action/constants';

interface WrapperDiaLogProps {
  Component: any;
}

const WrapperDiaLog: React.FC<WrapperDiaLogProps> = props => {
  const { Component } = props

  const [ scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const authDiaLog = useSelector((state: RootStateOrAny) => state.AppReducer.authDiaLog)

  const descriptionElementRef = useRef<HTMLElement>(null);

  const dispatch = useDispatch()

  // const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };

  const handleClose = () => {
    dispatch({type: actionTypes.closeDialog})
  };

  useEffect(() => {
    if (authDiaLog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [authDiaLog]);
  return (
    <Dialog
      open={authDiaLog}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description">
      <DialogContent dividers={scroll === 'paper'}>
        <Component/>
      </DialogContent>
    </Dialog>
  );
}

export default WrapperDiaLog
