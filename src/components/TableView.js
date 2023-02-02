import styled from "styled-components";
import StyledH1 from "./styles/StyledH1";
import Table from "./uiKit/Table/Table";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const TableWrapper = styled.div`
  width: 95%;
  height: 80%;
`;

const TableView = ({ title, rowData, columnDefs, isDataLoading, ...rest }) => {
  return (
    <Wrapper>
      <StyledH1>{title}</StyledH1>
      <TableWrapper>
        <Table
          columnDefs={columnDefs}
          rowData={rowData}
          isDataLoading={isDataLoading}
          {...rest}
        />
      </TableWrapper>
    </Wrapper>
  );
};

export default TableView;
