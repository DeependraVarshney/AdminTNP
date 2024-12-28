import { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import DataTable from '../../components/common/DataTable';
import PlacementAnalytics from '../../components/admin/placements/PlacementAnalytics';
import PlacementFilters from '../../components/admin/placements/PlacementFilters';
import { useTable } from '../../hooks/useTable';
import { usePlacement } from '../../hooks/usePlacement';

const Placements = () => {
  const { getPlacements } = usePlacement();
  const [filters, setFilters] = useState({
    search: '',
    company: 'All',
    status: 'All',
    year: new Date().getFullYear().toString(),
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'companyName', headerName: 'Company', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'package', headerName: 'Package (LPA)', width: 150 },
    { field: 'openings', headerName: 'Openings', width: 100 },
    { field: 'appliedCount', headerName: 'Applied', width: 100 },
    { field: 'selectedCount', headerName: 'Selected', width: 100 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'startDate', headerName: 'Start Date', width: 120 },
  ];

  // Mock data for development
  const mockData = [
    {
      id: 1,
      companyName: 'Tech Corp',
      role: 'Software Engineer',
      package: '12.5',
      openings: 10,
      appliedCount: 50,
      selectedCount: 5,
      status: 'In Progress',
      startDate: '2024-02-15',
    },
    {
      id: 2,
      companyName: 'Data Systems',
      role: 'Data Analyst',
      package: '8.5',
      openings: 5,
      appliedCount: 30,
      selectedCount: 3,
      status: 'Completed',
      startDate: '2024-02-10',
    },
  ];

  const mockPagination = {
    page: 0,
    rowsPerPage: 10,
    total: mockData.length,
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Placements</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {/* Handle add placement */}}
        >
          Add Placement Drive
        </Button>
      </Box>

      <PlacementAnalytics />
      
      <PlacementFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <DataTable
        columns={columns}
        data={mockData}
        pagination={mockPagination}
      />
    </Box>
  );
};

export default Placements; 