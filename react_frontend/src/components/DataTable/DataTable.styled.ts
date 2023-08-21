import styled from 'styled-components';

export const DataTableWrapper = styled.div`
`;

export const TableContainer = styled.div`
  margin-top: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-size: 1rem;
  color: #666;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  font-size: .8rem;
  color: #666;
`;
