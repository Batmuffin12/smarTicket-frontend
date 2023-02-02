import styled from "styled-components";
import StyledButton from "./styles/StyledButton";
import StyledH1 from "./styles/StyledH1";
import Table from "./uiKit/Table/Table";

const Wrapper = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const TableWrapper = styled.div`
  width: 95%;
  height: 80%;
`;

const TableHeaderWrapper = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-start;
  padding: 0 10px;
  justify-content: space-between;
`;

const TableView = ({
  title,
  rowData,
  columnDefs,
  isDataLoading,
  getItems,
  ...rest
}) => {
  return (
    <Wrapper>
      <TableHeaderWrapper>
        <StyledH1>{title}</StyledH1>
        <StyledButton onClick={getItems}>Refresh</StyledButton>
      </TableHeaderWrapper>
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
