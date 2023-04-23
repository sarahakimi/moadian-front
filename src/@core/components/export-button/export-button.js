import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import ExportVariant from "mdi-material-ui/ExportVariant";
import {CSVDownload} from "react-csv";

function ExportButton({api, headers, data}) {

  const [initiateDownload, setInitiateDownload] = useState(false)

  const fetchCsvData = () => {
    setInitiateDownload(false)
    api()
  }

  useEffect(() => {
    if (data?.length > 0) {
      setInitiateDownload(true)
    }
  }, [data, initiateDownload])

  return (
    <Button sx={{mr: 4, mb: 2}} color='secondary' variant='outlined' startIcon={<ExportVariant fontSize='small'/>}
            onClick={fetchCsvData}>
      خروجی
      {initiateDownload ? <CSVDownload data={data} headers={headers} target="_blank"/> : null}
    </Button>
  );
}

export default ExportButton;
