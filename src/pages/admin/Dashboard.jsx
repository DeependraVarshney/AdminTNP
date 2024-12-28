import { Grid } from '@mui/material';
import AnalyticsCards from '../../components/admin/dashboard/AnalyticsCards';
import BranchWiseChart from '../../components/admin/dashboard/BranchWiseChart';
import CompanyStats from '../../components/admin/dashboard/CompanyStats';
import PlacementProgress from '../../components/admin/dashboard/PlacementProgress';
import RecentActivities from '../../components/admin/dashboard/RecentActivities';
import UpcomingEvents from '../../components/admin/dashboard/UpcomingEvents';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      {/* Analytics Overview */}
      <Grid item xs={12}>
        <AnalyticsCards />
      </Grid>

      {/* Placement Progress & Company Stats */}
      <Grid item xs={12} md={8}>
        <PlacementProgress />
      </Grid>
      <Grid item xs={12} md={4}>
        <CompanyStats />
      </Grid>

      {/* Branch-wise Stats & Upcoming Events */}
      <Grid item xs={12} md={6}>
        <BranchWiseChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <UpcomingEvents />
      </Grid>

      {/* Recent Activities */}
      <Grid item xs={12}>
        <RecentActivities />
      </Grid>
    </Grid>
  );
};

export default Dashboard; 