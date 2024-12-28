import axios from '../config/axios';
import { API_BASE_URL } from '../config/constants';

const reportService = {
  getReports: async (filters, pagination) => {
    const response = await axios.get(`${API_BASE_URL}/reports`, {
      params: {
        ...filters,
        page: pagination.page,
        limit: pagination.rowsPerPage,
      },
    });
    return response.data;
  },

  generateReport: async (reportConfig) => {
    const response = await axios.post(`${API_BASE_URL}/reports/generate`, reportConfig);
    return response.data;
  },

  scheduleReport: async (scheduleConfig) => {
    const response = await axios.post(`${API_BASE_URL}/reports/schedule`, scheduleConfig);
    return response.data;
  },

  downloadReport: async (id, format = 'pdf') => {
    const response = await axios.get(`${API_BASE_URL}/reports/${id}/download`, {
      params: { format },
      responseType: 'blob',
    });
    return response.data;
  },

  deleteReport: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/reports/${id}`);
    return response.data;
  },

  getReportTypes: async () => {
    const response = await axios.get(`${API_BASE_URL}/reports/types`);
    return response.data;
  },

  previewReport: async (reportConfig) => {
    const response = await axios.post(`${API_BASE_URL}/reports/preview`, reportConfig);
    return response.data;
  },

  getScheduledReports: async () => {
    const response = await axios.get(`${API_BASE_URL}/reports/scheduled`);
    return response.data;
  },

  cancelScheduledReport: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/reports/scheduled/${id}`);
    return response.data;
  },
};

export default reportService; 