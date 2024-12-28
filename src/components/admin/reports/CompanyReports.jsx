import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Chip
} from '@mui/material';
import {
  Download,
  FilterList,
  Business
} from '@mui/icons-material';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { useState } from 'react';

const CompanyReports = () => {
  const [filters, setFilters] = useState({
    year: '2024',
    industry: 'all',
    status: 'all'
  });

  const companyData = {
    industryDistribution: [
      { name: 'Technology', value: 45 },
      { name: 'Finance', value: 25 },
      { name: 'Consulting', value: 15 },
      { name: 'Manufacturing', value: 10 },
      { name: 'Others', value: 5 }
    ],
    companyStats: [
      {
        id: 1,
        name: 'Google',
        industry: 'Technology',
        offers: 25,
        avgPackage: '25 LPA',
        highestPackage: '45 LPA',
        selectionRate: '85%',
        status: 'completed'
      },
      // Add more companies...
    ]
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'ongoing':
        return 'warning';
      case 'upcoming':
        return 'info';
      default:
        return 'default';
    }
  };

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
                <InputLabel>Industry</InputLabel>
                <Select
                  value={filters.industry}
                  label="Industry"
                  onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                >
                  <MenuItem value="all">All Industries</MenuItem>
                  <MenuItem value="tech">Technology</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                  <MenuItem value="consulting">Consulting</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status}
                  label="Status"
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                >
                  <MenuItem value="all">All Status</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="ongoing">Ongoing</MenuItem>
                  <MenuItem value="upcoming">Upcoming</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="outlined"
                startIcon={<FilterList />}
                size="small"
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

      {/* Industry Distribution */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Industry Distribution
            </Typography>
            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={companyData.industryDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {companyData.industryDistribution.map((entry, index) => (
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

      {/* Company Statistics */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Company Statistics
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company</TableCell>
                  <TableCell>Industry</TableCell>
                  <TableCell>Offers</TableCell>
                  <TableCell>Avg. Package</TableCell>
                  <TableCell>Highest Package</TableCell>
                  <TableCell>Selection Rate</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {companyData.companyStats.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Business />
                        {company.name}
                      </Box>
                    </TableCell>
                    <TableCell>{company.industry}</TableCell>
                    <TableCell>{company.offers}</TableCell>
                    <TableCell>{company.avgPackage}</TableCell>
                    <TableCell>{company.highestPackage}</TableCell>
                    <TableCell>{company.selectionRate}</TableCell>
                    <TableCell>
                      <Chip
                        label={company.status}
                        color={getStatusColor(company.status)}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CompanyReports; 