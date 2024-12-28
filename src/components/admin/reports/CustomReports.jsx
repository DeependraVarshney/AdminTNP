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
  TextField,
  Chip,
  Autocomplete,
  Divider
} from '@mui/material';
import {
  Add,
  Download,
  Save,
  Delete,
  FilterList
} from '@mui/icons-material';
import { useState } from 'react';

const CustomReports = () => {
  const [reportConfig, setReportConfig] = useState({
    name: '',
    type: '',
    metrics: [],
    filters: [],
    groupBy: '',
    sortBy: '',
    dateRange: {
      start: '',
      end: ''
    }
  });

  const availableMetrics = [
    'Placement Rate',
    'Average Package',
    'Highest Package',
    'Company Count',
    'Offers per Student',
    'Branch Performance',
    'Interview Success Rate',
    'Test Performance'
  ];

  const filterOptions = [
    'Branch',
    'Year',
    'Company',
    'Package Range',
    'Status',
    'CGPA Range'
  ];

  const groupByOptions = [
    'Branch',
    'Company',
    'Month',
    'Package Range',
    'Status'
  ];

  const savedReports = [
    {
      id: 1,
      name: 'Branch-wise Placement Analysis',
      type: 'Placement',
      metrics: ['Placement Rate', 'Average Package'],
      lastRun: '2024-03-15'
    },
    // Add more saved reports...
  ];

  const handleSaveReport = () => {
    console.log('Saving report configuration:', reportConfig);
    // Handle save logic
  };

  const handleGenerateReport = () => {
    console.log('Generating report with config:', reportConfig);
    // Handle report generation
  };

  const applyFilters = () => {
    // Add your filter logic here
    console.log('Filters applied:', reportConfig.filters);
  };

  return (
    <Grid container spacing={3}>
      {/* Report Configuration */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Create Custom Report
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Report Name"
                  value={reportConfig.name}
                  onChange={(e) => setReportConfig({ ...reportConfig, name: e.target.value })}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Report Type</InputLabel>
                  <Select
                    value={reportConfig.type}
                    label="Report Type"
                    onChange={(e) => setReportConfig({ ...reportConfig, type: e.target.value })}
                  >
                    <MenuItem value="placement">Placement Report</MenuItem>
                    <MenuItem value="company">Company Report</MenuItem>
                    <MenuItem value="student">Student Report</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  options={availableMetrics}
                  value={reportConfig.metrics}
                  onChange={(event, newValue) => {
                    setReportConfig({ ...reportConfig, metrics: newValue });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Metrics" />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        label={option}
                        {...getTagProps({ index })}
                        color="primary"
                      />
                    ))
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  options={filterOptions}
                  value={reportConfig.filters}
                  onChange={(event, newValue) => {
                    setReportConfig({ ...reportConfig, filters: newValue });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Add Filters" />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Group By</InputLabel>
                  <Select
                    value={reportConfig.groupBy}
                    label="Group By"
                    onChange={(e) => setReportConfig({ ...reportConfig, groupBy: e.target.value })}
                  >
                    {groupByOptions.map((option) => (
                      <MenuItem key={option} value={option.toLowerCase()}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={reportConfig.sortBy}
                    label="Sort By"
                    onChange={(e) => setReportConfig({ ...reportConfig, sortBy: e.target.value })}
                  >
                    {reportConfig.metrics.map((metric) => (
                      <MenuItem key={metric} value={metric.toLowerCase()}>
                        {metric}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Start Date"
                  value={reportConfig.dateRange.start}
                  onChange={(e) => setReportConfig({
                    ...reportConfig,
                    dateRange: { ...reportConfig.dateRange, start: e.target.value }
                  })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="End Date"
                  value={reportConfig.dateRange.end}
                  onChange={(e) => setReportConfig({
                    ...reportConfig,
                    dateRange: { ...reportConfig.dateRange, end: e.target.value }
                  })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" gap={2}>
                  <Button
                    variant="contained"
                    startIcon={<Save />}
                    onClick={handleSaveReport}
                  >
                    Save Configuration
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    onClick={handleGenerateReport}
                  >
                    Generate Report
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<FilterList />}
                    size="small"
                    onClick={applyFilters}
                  >
                    Apply Filters
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Saved Reports */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Saved Reports
            </Typography>

            {savedReports.map((report) => (
              <Box key={report.id} mb={2}>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="subtitle1">
                      {report.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Type: {report.type}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Last run: {new Date(report.lastRun).toLocaleDateString()}
                    </Typography>
                    <Box mt={1}>
                      {report.metrics.map((metric) => (
                        <Chip
                          key={metric}
                          label={metric}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      ))}
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      size="small"
                      startIcon={<Download />}
                    >
                      Run
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      startIcon={<Delete />}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
                <Divider sx={{ mt: 2 }} />
              </Box>
            ))}

            <Button
              fullWidth
              variant="outlined"
              startIcon={<Add />}
              sx={{ mt: 2 }}
            >
              Create New Report
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CustomReports;