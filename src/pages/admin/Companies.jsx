import { useState } from 'react';
import { Grid, Box, Tabs, Tab, Paper, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import CompanyVisitManager from '../../components/admin/company/CompanyVisitManager';
import CompanyList from '../../components/admin/company/CompanyList';
import CompanyDetails from '../../components/admin/company/CompanyDetails';
import CompanyRegistration from '../../components/admin/company/CompanyRegistration';

const Companies = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Paper sx={{ flexGrow: 1, mr: 2 }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Companies List" />
            <Tab label="Upcoming Visits" />
            <Tab label="Visit History" />
          </Tabs>
        </Paper>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setIsRegistrationOpen(true)}
        >
          Add Company
        </Button>
      </Box>

      {activeTab === 0 && (
        <CompanyList 
          onCompanySelect={setSelectedCompany}
          selectedCompany={selectedCompany}
        />
      )}
      
      {activeTab === 1 && <CompanyVisitManager type="upcoming" />}
      
      {activeTab === 2 && <CompanyVisitManager type="history" />}

      {/* Company Details Dialog */}
      {selectedCompany && (
        <CompanyDetails
          company={selectedCompany}
          open={Boolean(selectedCompany)}
          onClose={() => setSelectedCompany(null)}
        />
      )}

      {/* Company Registration Dialog */}
      <CompanyRegistration
        open={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </Box>
  );
};

export default Companies; 