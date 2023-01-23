import React from 'react';
import PropTypes from 'prop-types';
import {Backdrop} from "@mui/material";
import Spinner from "../spinner";

function Loading({open}) {

  return (
    <Backdrop
      sx={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: (theme) => theme.zIndex.drawer + 1}}
      open={open}
    >
      <Spinner/>
    </Backdrop>
  );
}


Loading.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Loading;
