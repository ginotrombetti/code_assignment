import React, {FC} from 'react';
import {DataTableWrapper, TableContainer, StyledTable, TableBody, TableHead, TableHeaderCell, TableRow, TableCell} from "./DataTable.styled";

interface DataTableProps {
    hypothesisMean?: number | null;
    standardDeviation: number | null;
    sampleSize: number | null;
    sampleMean: number | null;
}

const DataTable: FC<DataTableProps> = ({
                                           hypothesisMean,
                                           standardDeviation,
                                           sampleSize,
                                           sampleMean,
                                       }) => (
    <DataTableWrapper data-testid="DataTable">
        <TableContainer>
            <StyledTable>
                <TableHead>
                    <tr>
                        <TableHeaderCell>Property</TableHeaderCell>
                        <TableHeaderCell>Value</TableHeaderCell>
                    </tr>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Sample Size</TableCell>
                        <TableCell>{sampleSize}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sample Mean</TableCell>
                        <TableCell>{sampleMean}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Standard Deviation</TableCell>
                        <TableCell>{standardDeviation}</TableCell>
                    </TableRow>
                    {hypothesisMean !== null && (
                        <TableRow>
                            <TableCell>Hypothesis Mean</TableCell>
                            <TableCell>{hypothesisMean}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </StyledTable>
        </TableContainer>
    </DataTableWrapper>
);

export default DataTable;
