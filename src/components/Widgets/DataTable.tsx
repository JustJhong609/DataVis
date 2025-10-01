import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { TableRow } from '../../types';

const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: ${props => props.theme.borderRadius.md};
  
  &::-webkit-scrollbar {
    height: 6px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`;

const TableHead = styled.thead`
  background: ${props => `${props.theme.colors.primary}20`};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`;

const TableHeader = styled.th`
  padding: ${props => props.theme.spacing.md};
  text-align: left;
  color: ${props => props.theme.colors.text.primary};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  white-space: nowrap;
`;

const TableBody = styled.tbody``;

const TableRowStyled = styled(motion.tr)`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => `${props.theme.colors.primary}10`};
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td<{ highlight?: boolean }>`
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.highlight 
    ? props.theme.colors.text.primary 
    : props.theme.colors.text.secondary};
  font-weight: ${props => props.highlight ? '600' : '400'};
  white-space: nowrap;
`;

const GrowthBadge = styled.span<{ positive: boolean }>`
  color: ${props => props.positive ? '#00ff88' : '#ff0035'};
  font-weight: 600;
`;

interface DataTableProps {
  data: TableRow[];
}

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (!data || data.length === 0) return null;
  
  const columns = Object.keys(data[0]);
  
  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            {columns.map((column) => (
              <TableHeader key={column}>
                {column.replace(/([A-Z])/g, ' $1').trim()}
              </TableHeader>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRowStyled
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              {columns.map((column, colIndex) => {
                const value = row[column];
                const isGrowth = typeof value === 'string' && value.includes('%');
                const isPositive = typeof value === 'string' && value.startsWith('+');
                
                return (
                  <TableCell key={column} highlight={colIndex === 0}>
                    {isGrowth ? (
                      <GrowthBadge positive={isPositive}>
                        {value}
                      </GrowthBadge>
                    ) : (
                      value
                    )}
                  </TableCell>
                );
              })}
            </TableRowStyled>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};
