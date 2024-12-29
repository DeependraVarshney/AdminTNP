import axios from 'axios';
import { API_BASE_URL } from '../../config/constants';

const studentService = {
  getStudents: async (filters, pagination) => {
    const response = await axios.get(`${API_BASE_URL}/students`, {
      params: {
        ...filters,
        page: pagination.page,
        limit: pagination.rowsPerPage,
      },
    });
    return response.data;
  },

  getStudentById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/students/${id}`);
    return response.data;
  },

  createStudent: async (studentData) => {
    const formData = new FormData();
    Object.keys(studentData).forEach(key => {
      if (studentData[key] instanceof File) {
        formData.append(key, studentData[key]);
      } else if (typeof studentData[key] === 'object') {
        formData.append(key, JSON.stringify(studentData[key]));
      } else {
        formData.append(key, studentData[key]);
      }
    });

    const response = await axios.post(`${API_BASE_URL}/students`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  updateStudent: async (id, studentData) => {
    const formData = new FormData();
    Object.keys(studentData).forEach(key => {
      if (studentData[key] instanceof File) {
        formData.append(key, studentData[key]);
      } else if (typeof studentData[key] === 'object') {
        formData.append(key, JSON.stringify(studentData[key]));
      } else {
        formData.append(key, studentData[key]);
      }
    });

    const response = await axios.put(`${API_BASE_URL}/students/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  deleteStudent: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/students/${id}`);
    return response.data;
  },

  bulkImport: async (fileData) => {
    const formData = new FormData();
    formData.append('file', fileData);

    const response = await axios.post(`${API_BASE_URL}/students/bulk-import`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  exportStudents: async (filters) => {
    const response = await axios.get(`${API_BASE_URL}/students/export`, {
      params: filters,
      responseType: 'blob',
    });
    return response.data;
  },

  updateStatus: async (id, status) => {
    const response = await axios.patch(`${API_BASE_URL}/students/${id}/status`, { status });
    return response.data;
  },

  uploadDocument: async (id, documentData) => {
    const formData = new FormData();
    formData.append('file', documentData.file);
    formData.append('type', documentData.type);
    formData.append('description', documentData.description);

    const response = await axios.post(`${API_BASE_URL}/students/${id}/documents`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  getDocuments: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/students/${id}/documents`);
    return response.data;
  },

  deleteDocument: async (studentId, documentId) => {
    const response = await axios.delete(`${API_BASE_URL}/students/${studentId}/documents/${documentId}`);
    return response.data;
  },
};

export default studentService;