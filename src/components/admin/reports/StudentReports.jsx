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
  Chip,
  Avatar
} from '@mui/material';
import {
  Download,
  FilterList,
  Person,
  TrendingUp,
  TrendingDown
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useState } from 'react';

const StudentReports = () => {
  const [filters, setFilters] = useState({
    year: '2024',
    branch: 'all',
    status: 'all'
  });

  const studentData = {
    performanceMetrics: [
      {
        metric: 'Average Test Score',
        value: '75%',
        trend: 'up',
        change: '+5%'
      },
      {
        metric: 'Interview Success Rate',
        value: '65%',
        trend: 'up',
        change: '+8%'
      },
      {
        metric: 'Multiple Offer Rate',
        value: '30%',
        trend: 'down',
        change: '-2%'
      },
      {
        metric: 'Average Package',
        value: '12.5 LPA',
        trend: 'up',
        change: '+1.5 LPA'
      }
    ],
    branchPerformance: [
      { branch: 'CSE', placed: 280, unplaced: 20, avgPackage: 15 },
      { branch: 'IT', placed: 230, unplaced: 20, avgPackage: 14 },
      { branch: 'ECE', placed: 170, unplaced: 30, avgPackage: 12 },
      { branch: 'EEE', placed: 120, unplaced: 30, avgPackage: 11 },
      { branch: 'MECH', placed: 80, unplaced: 20, avgPackage: 10 }
    ],
    studentList: [
      {
        id: 1,
        name: 'John Doe',
        branch: 'CSE',
        cgpa: 8.5,
        testsAttended: 5,
        interviewsAttended: 3,
        offers: 2,
        highestPackage: '25 LPA',
        status: 'placed'
      },
      // Add more students...
    ]
  };

  const [filteredStudentData, setFilteredStudentData] = useState(studentData);

  const applyFilters = () => {
    const filtered = {
      ...studentData,
      studentList: studentData.studentList.filter(student => {
        // Add your filter logic here
        return true; // Replace with actual filter conditions
      })
    };
    setFilteredStudentData(filtered);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'placed':
        return 'success';
      case 'unplaced':
        return 'error';
      case 'in_process':
        return 'warning';
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
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status}
                  label="Status"
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                >
                  <MenuItem value="all">All Status</MenuItem>
                  <MenuItem value="placed">Placed</MenuItem>
                  <MenuItem value="unplaced">Unplaced</MenuItem>
                  <MenuItem value="in_process">In Process</MenuItem>
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

      {/* Performance Metrics */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {filteredStudentData.performanceMetrics.map((metric) => (
            <Grid item xs={12} sm={6} md={3} key={metric.metric}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {metric.metric}
                  </Typography>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6">
                      {metric.value}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={0.5}>
                      {metric.trend === 'up' ? (
                        <TrendingUp color="success" />
                      ) : (
                        <TrendingDown color="error" />
                      )}
                      <Typography
                        variant="body2"
                        color={metric.trend === 'up' ? 'success.main' : 'error.main'}
                      >
                        {metric.change}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Branch Performance Chart */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Branch-wise Performance
            </Typography>
            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredStudentData.branchPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="placed" name="Placed Students" fill="#2e7d32" />
                  <Bar dataKey="unplaced" name="Unplaced Students" fill="#d32f2f" />
                  <Bar dataKey="avgPackage" name="Avg. Package (LPA)" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Student List */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Student Details
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student</TableCell>
                  <TableCell>Branch</TableCell>
                  <TableCell>CGPA</TableCell>
                  <TableCell>Tests</TableCell>
                  <TableCell>Interviews</TableCell>
                  <TableCell>Offers</TableCell>
                  <TableCell>Highest Package</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudentData.studentList.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar>
                          <Person />
                        </Avatar>
                        {student.name}
                      </Box>
                    </TableCell>
                    <TableCell>{student.branch}</TableCell>
                    <TableCell>{student.cgpa}</TableCell>
                    <TableCell>{student.testsAttended}</TableCell>
                    <TableCell>{student.interviewsAttended}</TableCell>
                    <TableCell>{student.offers}</TableCell>
                    <TableCell>{student.highestPackage}</TableCell>
                    <TableCell>
                      <Chip
                        label={student.status}
                        color={getStatusColor(student.status)}
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

export default StudentReports;