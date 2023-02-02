import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import StyledButton from "components/styles/StyledButton";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { valueFormatter } from "./valueFormatter";

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Table = ({
  customDefaultColumnDefs = {},
  rowData,
  columnDefs,
  update,
  addItems,
  deleteItems,
  isDataLoading,
}) => {
  const defaultColumnDefs = {
    editable: true,
    sortable: true,
    filter: true,
    resizable: true,
    filterParams: { newRowsAction: true },
    valueFormatter: valueFormatter,
    ...customDefaultColumnDefs,
  };

  const gridOptions = {
    pinnedTopRowData: [{}],
  };
  const [agGridApi, setAgGridApi] = useState();

  useEffect(() => {
    if (agGridApi && isDataLoading) {
      agGridApi.hideOverlay();
      agGridApi.showLoadingOverlay();
    }
  }, [agGridApi, isDataLoading]);

  const onTableGridReady = (params) => {
    setAgGridApi(params.api);
  };

  const onCellEditingStopped = (params) => {
    if (
      params.data.id &&
      params.valueChanged &&
      params.newValue !== params.oldValue
    ) {
      update({
        id: params.data.id,
        updates: {
          [params.column.colId]: params?.colDef?.formatValue
            ? params?.colDef?.formatValue(params.newValue)
            : params.newValue,
        },
      });
    } else {
      if (isPinnedRowDataCompleted(params)) {
        addItems(params);
        agGridApi.setPinnedTopRowData([{}]);
      }
    }
  };

  const suppressNoRowsOverlay = () => {
    return !(!isDataLoading && (!rowData || rowData.length === 0));
  };

  const deleteOnClick = () => {
    const selectedRowsData = agGridApi.getSelectedRows()?.map((row) => row.id);
    deleteItems(selectedRowsData);
  };

  const isPinnedRowDataCompleted = (params) => {
    if (params.rowPinned === "top") {
      return columnDefs.every((def) => params?.data[def.field] !== undefined);
    }
    return false;
  };

  return (
    <TableWrapper className="ag-theme-alpine">
      <AgGridReact
        gridOptions={gridOptions}
        onGridReady={onTableGridReady}
        onCellEditingStopped={onCellEditingStopped}
        rowData={isDataLoading ? null : rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColumnDefs}
        suppressNoRowsOverlay={suppressNoRowsOverlay}
        rowSelection="multiple"
        enableCellTextSelection
        animateRows
      />
      <StyledButton onClick={deleteOnClick}>delete Items</StyledButton>
    </TableWrapper>
  );
};

export default Table;
