import React from 'react';
import TeacherAssignment from './TeacherAssignment';
import StudentAssignment from './StudentAssignment';

const Assignment = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return user.role === 'student' ? <StudentAssignment /> : <TeacherAssignment />;
};

export default Assignment;