import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Switch,
  Divider,
  Avatar,
  IconButton,
  Chip
} from '@mui/material';
import {
  PhotoCamera,
  Save,
  ArrowBack,
  ArrowForward
} from '@mui/icons-material';
import { useState } from 'react';

const StudentRegistration = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [studentData, setStudentData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    alternatePhone: '',
    photo: null,
    category: '',
    nationality: '',
    religion: '',
    bloodGroup: '',
    aadharNumber: '',
    panNumber: '',

    // Academic Information
    rollNumber: '',
    registrationNumber: '',
    batch: '',
    branch: '',
    section: '',
    semester: '',
    admissionType: '',
    admissionDate: '',
    academicStatus: 'active',

    // Contact Information
    currentAddress: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India'
    },
    permanentAddress: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India'
    },
    sameAsCurrent: false,

    // Parent/Guardian Information
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    motherEmail: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    guardianEmail: '',

    // Academic History
    previousInstitute: '',
    previousQualification: '',
    previousBoard: '',
    previousScore: '',
    entranceExam: '',
    entranceScore: '',
    entranceRank: '',

    // Additional Information
    hostelRequired: false,
    transportRequired: false,
    scholarshipApplied: false,
    scholarshipDetails: '',
    medicalConditions: '',
    bloodGroup: '',
    emergencyContact: '',
    emergencyRelation: '',

    // Documents
    documents: {
      photo: null,
      aadhar: null,
      pan: null,
      previousMarksheets: [],
      entranceExamCard: null,
      domicile: null,
      incomeCertificate: null,
      casteCertificate: null
    }
  });

  const steps = [
    'Personal Information',
    'Academic Details',
    'Contact Information',
    'Family Details',
    'Academic History',
    'Additional Details',
    'Documents'
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (field, value) => {
    setStudentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddressChange = (type, field, value) => {
    setStudentData(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value
      }
    }));
  };

  const handleFileUpload = (field, file) => {
    setStudentData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }));
  };

  // Render different form sections based on active step
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                value={studentData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={studentData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                value={studentData.dateOfBirth}
                onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={studentData.gender}
                  label="Gender"
                  onChange={(e) => handleChange('gender', e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Add more personal information fields */}
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Roll Number"
                value={studentData.rollNumber}
                onChange={(e) => handleChange('rollNumber', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Registration Number"
                value={studentData.registrationNumber}
                onChange={(e) => handleChange('registrationNumber', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth required>
                <InputLabel>Batch</InputLabel>
                <Select
                  value={studentData.batch}
                  label="Batch"
                  onChange={(e) => handleChange('batch', e.target.value)}
                >
                  <MenuItem value="2020-24">2020-24</MenuItem>
                  <MenuItem value="2021-25">2021-25</MenuItem>
                  <MenuItem value="2022-26">2022-26</MenuItem>
                  <MenuItem value="2023-27">2023-27</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Add more academic fields */}
          </Grid>
        );

      // Add cases for other steps...

      default:
        return null;
    }
  };

  return (
    <Box>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <form>
            {renderStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
              {activeStep > 0 && (
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  startIcon={<ArrowBack />}
                >
                  Back
                </Button>
              )}
              {activeStep < steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  endIcon={<ArrowForward />}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Save />}
                  onClick={() => {
                    console.log('Saving student data:', studentData);
                    // Handle form submission
                  }}
                >
                  Submit
                </Button>
              )}
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StudentRegistration; 