import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Table = ({ rowData, columnDefs }) => {
  return (
    <TableWrapper className="ag-theme-alpine">
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </TableWrapper>
  );
};

export default Table;
