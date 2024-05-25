// src/api/members.js
import axiosInstance from './axios';

export const getMembers = async () => {
  const response = await axiosInstance.get('/api/members/');
  return response.data;
};

export const getMember = async (id) => {
  const response = await axiosInstance.get(`/api/members/${id}`);
  return response.data;
};

export const createMember = async (memberData) => {
  const response = await axiosInstance.post('/api/members/', memberData);
  return response.data;
};

export const updateMember = async (id, memberData) => {
  const response = await axiosInstance.put(`/api/members/${id}`, memberData);
  return response.data;
};

export const deleteMember = async (id) => {
  const response = await axiosInstance.delete(`/api/members/${id}`);
  return response.data;
};
