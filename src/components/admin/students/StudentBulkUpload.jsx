import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Alert,
  Link,
  Chip
} from '@mui/material';
import {
  CloudUpload,
  Download,
  CheckCircle,
  Error,
  Delete,
  Refresh
} from '@mui/icons-material';
import { useState } from 'react';

const StudentBulkUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResults, setUploadResults] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          // Simulate upload results
          setUploadResults({
            total: 100,
            successful: 95,
            failed: 5,
            errors: [
              {
                row: 15,
                error: 'Invalid email format',
                data: 'john.doe@invalid'
              },
              // Add more errors...
            ]
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Bulk Student Upload
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Download the template file, fill in the student details, and upload it back.
              </Typography>
              <Button
                variant="outlined"
                startIcon={<Download />}
                sx={{ mr: 2 }}
              >
                Download Template
              </Button>
              <Button
                variant="outlined"
                startIcon={<Download />}
              >
                Download Sample File
              </Button>
            </Box>

            <Box
              sx={{
                border: '2px dashed #ccc',
                borderRadius: 1,
                p: 3,
                textAlign: 'center',
                mb: 3
              }}
            >
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUpload />}
                  sx={{ mb: 2 }}
                >
                  Select File
                </Button>
              </label>
              {selectedFile && (
                <Box>
                  <Typography variant="body2">
                    Selected file: {selectedFile.name}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleUpload}
                    disabled={uploading}
                    sx={{ mt: 2 }}
                  >
                    Upload and Process
                  </Button>
                </Box>
              )}
            </Box>

            {uploading && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom>
                  Uploading and processing...
                </Typography>
                <LinearProgress variant="determinate" value={uploadProgress} />
              </Box>
            )}

            {uploadResults && (
              <Box>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Total Records
                        </Typography>
                        <Typography variant="h4">
                          {uploadResults.total}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" color="success.main" gutterBottom>
                          Successful
                        </Typography>
                        <Typography variant="h4" color="success.main">
                          {uploadResults.successful}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" color="error.main" gutterBottom>
                          Failed
                        </Typography>
                        <Typography variant="h4" color="error.main">
                          {uploadResults.failed}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                {uploadResults.errors.length > 0 && (
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Error Details
                    </Typography>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Row</TableCell>
                          <TableCell>Error</TableCell>
                          <TableCell>Data</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {uploadResults.errors.map((error, index) => (
                          <TableRow key={index}>
                            <TableCell>{error.row}</TableCell>
                            <TableCell>{error.error}</TableCell>
                            <TableCell>{error.data}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                )}
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StudentBulkUpload;
  