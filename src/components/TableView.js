import styled from "styled-components";
import Table from "./uiKit/Table";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableWrapper = styled.div`
  width: 95%;
  height: 80%;
`;

const TableView = ({ rowData, columnDefs }) => {
  return (
    <Wrapper>
      TODO CHANGE THIS TO PROP
      <TableWrapper>
        <Table columnDefs={columnDefs} rowData={rowData} />
      </TableWrapper>
    </Wrapper>
  );
};

export default TableView;
