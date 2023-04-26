import React, {useCallback, useState} from 'react';
import {DataGrid, faIR, GridToolbarFilterButton} from "@mui/x-data-grid";

function Table({data, columns, sortModel, setSortModel, selfFilter, noFilter}) {
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(0)

  const handlePageSizeChange = newPageSize => {
    setPageSize(newPageSize)
    setSortModel({...sortModel, ...{page_size: newPageSize}})
  }

  const handlePageChange = newPage => {
    setPage(newPage)
    setSortModel({...sortModel, ...{page: newPage + 1}})
  }
  const [filter, setFilter] = useState({})

  const handleFilterChange = useCallback((filterModel) => {
    setFilter(filterModel)
    if (Object.keys(filterModel).length !== 0 && filterModel.items[0]?.value !== undefined) {
      setSortModel({...sortModel, ...{search: `${filterModel.items[0].columnField}|${filterModel.items[0]?.value}`}})
    } else {
      setSortModel({...sortModel, ...{search: ''}})
    }
  }, [filter, setFilter]);

  const handleSortModelChange = Model => {
    const sortMode = Model.length !== 0 ? `${Model[0]?.field} ${Model[0]?.sort}` : 'id desc'
    setSortModel({...sortModel, ...{sort_by: `${sortMode}`}})
  }


  return (

    <DataGrid
      autoHeight
      pagination
      rows={data}
      columns={columns}
      pageSize={pageSize}
      disableSelectionOnClick
      rowsPerPageOptions={[10, 25, 50]}
      sx={{'& .MuiDataGrid-columnHeaders': {borderRadius: 0}}}
      paginationMode={!selfFilter && 'server'}
      onPageSizeChange={handlePageSizeChange}
      localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
      disableColumnSelector
      sortingMode={!selfFilter && 'server'}
      onSortModelChange={handleSortModelChange}
      onPageChange={handlePageChange}
      page={page}
      rowCount={50}
      onFilterModelChange={handleFilterChange}
      components={!noFilter && {
        Toolbar: GridToolbarFilterButton,
      }}
    />

  );
}

export default Table;
