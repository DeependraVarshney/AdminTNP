import { useState } from 'react';
import { Grid, Box, Tabs, Tab, Paper } from '@mui/material';
import PlacementReports from '../../components/admin/reports/PlacementReports';
import CompanyReports from '../../components/admin/reports/CompanyReports';
import StudentReports from '../../components/admin/reports/StudentReports';
import CustomReports from '../../components/admin/reports/CustomReports';

const Reports = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Placement Reports" />
          <Tab label="Company Reports" />
          <Tab label="Student Reports" />
          <Tab label="Custom Reports" />
        </Tabs>
      </Paper>

      {activeTab === 0 && <PlacementReports />}
      {activeTab === 1 && <CompanyReports />}
      {activeTab === 2 && <StudentReports />}
      {activeTab === 3 && <CustomReports />}
    </Box>
  );
};

export default Reports; 