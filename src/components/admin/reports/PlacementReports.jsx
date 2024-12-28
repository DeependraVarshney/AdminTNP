const placementData = {
  overview: {
    totalStudents: 1200,
    placedStudents: 850,
    averagePackage: "12.5 LPA",
    highestPackage: "45 LPA",
    totalOffers: 920,
    companiesVisited: 45
  },
  monthlyStats: [
    { month: 'Jul', placed: 50, offers: 55 },
    { month: 'Aug', placed: 120, offers: 130 },
    { month: 'Sep', placed: 200, offers: 220 },
    { month: 'Oct', placed: 350, offers: 380 },
    { month: 'Nov', placed: 500, offers: 540 },
    { month: 'Dec', placed: 650, offers: 700 }
  ],
  branchWise: [
    { branch: 'CSE', total: 300, placed: 280 },
    { branch: 'IT', total: 250, placed: 230 },
    { branch: 'ECE', total: 200, placed: 170 },
    { branch: 'EEE', total: 150, placed: 120 },
    { branch: 'MECH', total: 100, placed: 80 }
  ],
  packageDistribution: [
    { range: '> 20 LPA', count: 75 },
    { range: '15-20 LPA', count: 150 },
    { range: '10-15 LPA', count: 300 },
    { range: '5-10 LPA', count: 250 },
    { range: '< 5 LPA', count: 75 }
  ]
};

import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Download, FilterList } from '@mui/icons-material';
import { useState } from 'react';

const PlacementReports = () => {
  const [filters, setFilters] = useState({
    year: '2024',
    branch: 'all',
    dateRange: 'year'
  });
  const [filteredPlacementData, setFilteredPlacementData] = useState(placementData);

  const applyFilters = () => {
    const filtered = {
      ...placementData,
      monthlyStats: placementData.monthlyStats.filter(item => {
        // Add your filter logic here
        return true; // Replace with actual filter conditions
      })
    };
    setFilteredPlacementData(filtered);
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <Grid container spacing={3}>
      {/* Filters */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" gap={2} alignItems="center">
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Year</InputLabel>
                <Select
                  value={filters.year}
                  label="Year"
                  onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                >
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Branch</InputLabel>
                <Select
                  value={filters.branch}
                  label="Branch"
                  onChange={(e) => setFilters({ ...filters, branch: e.target.value })}
                >
                  <MenuItem value="all">All Branches</MenuItem>
                  <MenuItem value="cse">CSE</MenuItem>
                  <MenuItem value="it">IT</MenuItem>
                  <MenuItem value="ece">ECE</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Date Range</InputLabel>
                <Select
                  value={filters.dateRange}
                  label="Date Range"
                  onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                >
                  <MenuItem value="year">Yearly</MenuItem>
                  <MenuItem value="quarter">Quarterly</MenuItem>
                  <MenuItem value="month">Monthly</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="outlined"
                startIcon={<FilterList />}
                size="small"
                onClick={applyFilters}
              >
                Apply Filters
              </Button>

              <Button
                variant="contained"
                startIcon={<Download />}
                size="small"
              >
                Download Report
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Overview Stats */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {Object.entries(placementData.overview).map(([key, value]) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Typography variant="h6">
                    {value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Monthly Progress Chart */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Placement Progress
            </Typography>
            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredPlacementData.monthlyStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="placed" name="Placed Students" fill="#2e7d32" />
                  <Bar dataKey="offers" name="Total Offers" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Package Distribution */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Package Distribution
            </Typography>
            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={placementData.packageDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {placementData.packageDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Branch-wise Stats */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Branch-wise Placement Status
            </Typography>
            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={placementData.branchWise}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="total" name="Total Students" fill="#1976d2" />
                  <Bar dataKey="placed" name="Placed Students" fill="#2e7d32" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PlacementReports;

