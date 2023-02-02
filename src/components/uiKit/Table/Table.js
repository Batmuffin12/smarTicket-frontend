import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Table = ({
  customDefaultColumnDefs = {},
  rowData,
  columnDefs,
  update,
  isDataLoading,
}) => {
  const defaultColumnDefs = {
    editable: true,
    sortable: true,
    filter: true,
    resizable: true,
    filterParams: { newRowsAction: true },
    ...customDefaultColumnDefs,
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
    if (params.valueChanged && params.newValue !== params.oldValue) {
      update({
        id: params.data.id,
        updates: {
          [params.column.colId]: params?.colDef?.formatValue
            ? params?.colDef?.formatValue(params.newValue)
            : params.newValue,
        },
      });
    }
  };

  const suppressNoRowsOverlay = () => {
    return !(!isDataLoading && (!rowData || rowData.length === 0));
  };

  return (
    <TableWrapper className="ag-theme-alpine">
      <AgGridReact
        onGridReady={onTableGridReady}
        onCellEditingStopped={onCellEditingStopped}
        rowData={isDataLoading ? null : rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColumnDefs}
        suppressNoRowsOverlay={suppressNoRowsOverlay}
      />
    </TableWrapper>
  );
};

export default Table;
