import { useState } from 'react';
import { Grid, Box, Tabs, Tab, Paper } from '@mui/material';
import NotificationCenter from '../../components/admin/notifications/NotificationCenter';
import NotificationComposer from '../../components/admin/notifications/NotificationComposer';
import NotificationTemplates from '../../components/admin/notifications/NotificationTemplates';
import NotificationHistory from '../../components/admin/notifications/NotificationHistory';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Notification Center" />
          <Tab label="Compose" />
          <Tab label="Templates" />
          <Tab label="History" />
        </Tabs>
      </Paper>

      {activeTab === 0 && <NotificationCenter />}
      {activeTab === 1 && <NotificationComposer />}
      {activeTab === 2 && <NotificationTemplates />}
      {activeTab === 3 && <NotificationHistory />}
    </Box>
  );
};

export default Notifications; 