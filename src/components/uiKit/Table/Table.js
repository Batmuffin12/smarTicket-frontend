import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
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
}) => {
  const onCellEditingStopped = (params) => {
    console.log(params);
    if (params.newValue !== params.oldValue) {
      update({
        id: params.data.id,
        updates: { [params.column.colId]: params.newValue },
      });
    }
  };
  const defaultColumnDefs = {
    editable: true,
    sortable: true,
    filter: true,
    resizable: true,
    filterParams: { newRowsAction: true },
    ...customDefaultColumnDefs,
  };
  return (
    <TableWrapper className="ag-theme-alpine">
      <AgGridReact
        onCellEditingStopped={onCellEditingStopped}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColumnDefs}
      />
    </TableWrapper>
  );
};

export default Table;
