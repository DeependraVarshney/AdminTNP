import { useState } from 'react';
import { Grid, Box, Tabs, Tab, Paper } from '@mui/material';
import StudentList from '../../components/admin/students/StudentList';
import StudentRegistration from '../../components/admin/students/StudentRegistration';
import StudentBulkUpload from '../../components/admin/students/StudentBulkUpload';
import StudentAnalytics from '../../components/admin/students/StudentAnalytics';
import StudentDetailsView from '../../components/admin/students/StudentDetailsView';
import StudentProfileManager from '../../components/admin/students/StudentProfileManager';

const Students = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSelectedStudent(null);
    setIsEditing(false);
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setActiveTab(-1); // Custom value for details view
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = (updatedData) => {
    // Handle save logic
    console.log('Saving profile:', updatedData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <Box>
      <Paper sx={{ mb: 3 }}>
        <Tabs 
          value={selectedStudent ? -1 : activeTab} 
          onChange={handleTabChange}
        >
          <Tab label="All Students" />
          <Tab label="Add Student" />
          <Tab label="Bulk Upload" />
          <Tab label="Analytics" />
        </Tabs>
      </Paper>

      {selectedStudent ? (
        isEditing ? (
          <StudentProfileManager
            student={selectedStudent}
            onSave={handleSaveProfile}
            onCancel={handleCancelEdit}
          />
        ) : (
          <StudentDetailsView
            studentId={selectedStudent.id}
            onEdit={handleEditProfile}
            onBack={() => setSelectedStudent(null)}
          />
        )
      ) : (
        <>
          {activeTab === 0 && <StudentList onStudentSelect={handleStudentSelect} />}
          {activeTab === 1 && <StudentRegistration />}
          {activeTab === 2 && <StudentBulkUpload />}
          {activeTab === 3 && <StudentAnalytics />}
        </>
      )}
    </Box>
  );
};

export default Students; 