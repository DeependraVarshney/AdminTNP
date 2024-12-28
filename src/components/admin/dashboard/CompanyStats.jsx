import { Card, CardContent, Typography, Box, Divider, LinearProgress } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const CompanyStats = () => {
  const companyData = [
    { name: 'Product', value: 45 },
    { name: 'Service', value: 30 },
    { name: 'Startup', value: 15 },
    { name: 'Others', value: 10 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const packageStats = [
    { range: '> 20 LPA', count: 5, color: '#2e7d32' },
    { range: '15-20 LPA', count: 12, color: '#1976d2' },
    { range: '10-15 LPA', count: 25, color: '#ed6c02' },
    { range: '5-10 LPA', count: 45, color: '#9c27b0' }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Company Statistics
        </Typography>

        <Box height={200} mb={3}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={companyData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {companyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle2" gutterBottom>
          Package Distribution
        </Typography>
        
        {packageStats.map((stat, index) => (
          <Box key={index} mb={2}>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="body2">{stat.range}</Typography>
              <Typography variant="body2" color="textSecondary">
                {stat.count} companies
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={(stat.count / 87) * 100}
              sx={{ 
                height: 8, 
                borderRadius: 5,
                backgroundColor: `${stat.color}22`,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: stat.color
                }
              }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CompanyStats; 
