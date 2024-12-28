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
  Chip,
  Autocomplete,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { useState } from 'react';

const JNFForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Company Details
    companyName: '',
    website: '',
    industry: '',
    aboutCompany: '',

    // Job Details
    jobTitle: '',
    jobDescription: '',
    jobType: '',
    workLocation: '',
    positions: '',
    ctc: '',
    bondDetails: '',

    // Eligibility Criteria
    eligibleBranches: [],
    minimumCGPA: '',
    backlogPolicy: '',
    selectionProcess: [],

    // Additional Details
    skillsRequired: [],
    documents: [],
    additionalNotes: ''
  });

  const steps = [
    'Company Details',
    'Job Details',
    'Eligibility Criteria',
    'Additional Details'
  ];

  const branches = [
    'Computer Science',
    'Information Technology',
    'Electronics',
    'Mechanical',
    'Civil'
  ];

  const selectionProcessSteps = [
    'Online Test',
    'Technical Interview',
    'HR Interview',
    'Group Discussion',
    'Coding Test'
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Handle form submission
  };

  const CompanyDetailsForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Company Name"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Industry"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="About Company"
          value={formData.aboutCompany}
          onChange={(e) => setFormData({ ...formData, aboutCompany: e.target.value })}
        />
      </Grid>
    </Grid>
  );

  const JobDetailsForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Job Title"
          value={formData.jobTitle}
          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth required>
          <InputLabel>Job Type</InputLabel>
          <Select
            value={formData.jobType}
            label="Job Type"
            onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
          >
            <MenuItem value="full-time">Full Time</MenuItem>
            <MenuItem value="internship">Internship</MenuItem>
            <MenuItem value="contract">Contract</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Job Description"
          value={formData.jobDescription}
          onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Work Location"
          value={formData.workLocation}
          onChange={(e) => setFormData({ ...formData, workLocation: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Number of Positions"
          type="number"
          value={formData.positions}
          onChange={(e) => setFormData({ ...formData, positions: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="CTC (per annum)"
          value={formData.ctc}
          onChange={(e) => setFormData({ ...formData, ctc: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Bond Details (if any)"
          value={formData.bondDetails}
          onChange={(e) => setFormData({ ...formData, bondDetails: e.target.value })}
        />
      </Grid>
    </Grid>
  );

  const EligibilityCriteriaForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Autocomplete
          multiple
          options={branches}
          value={formData.eligibleBranches}
          onChange={(event, newValue) => {
            setFormData({ ...formData, eligibleBranches: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} label="Eligible Branches" required />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip label={option} {...getTagProps({ index })} />
            ))
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Minimum CGPA"
          type="number"
          inputProps={{ step: 0.01, min: 0, max: 10 }}
          value={formData.minimumCGPA}
          onChange={(e) => setFormData({ ...formData, minimumCGPA: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Backlog Policy"
          value={formData.backlogPolicy}
          onChange={(e) => setFormData({ ...formData, backlogPolicy: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          multiple
          options={selectionProcessSteps}
          value={formData.selectionProcess}
          onChange={(event, newValue) => {
            setFormData({ ...formData, selectionProcess: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} label="Selection Process" required />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip label={option} {...getTagProps({ index })} />
            ))
          }
        />
      </Grid>
    </Grid>
  );

  const AdditionalDetailsForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Skills Required"
          value={formData.skillsRequired.join(', ')}
          onChange={(e) => setFormData({
            ...formData,
            skillsRequired: e.target.value.split(',').map(skill => skill.trim())
          })}
          helperText="Enter skills separated by commas"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Required Documents"
          value={formData.documents.join(', ')}
          onChange={(e) => setFormData({
            ...formData,
            documents: e.target.value.split(',').map(doc => doc.trim())
          })}
          helperText="Enter document names separated by commas"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Additional Notes"
          value={formData.additionalNotes}
          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
        />
      </Grid>
    </Grid>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <CompanyDetailsForm />;
      case 1:
        return <JobDetailsForm />;
      case 2:
        return <EligibilityCriteriaForm />;
      case 3:
        return <AdditionalDetailsForm />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Create Job Notification Form
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {getStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
            >
              Next
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default JNFForm; 