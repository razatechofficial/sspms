// components/StudentModal.tsx
import React, { useEffect, useState } from 'react';

interface Student {
  enrollmentNo?: string;
  enrollmentDate?: string; // ISO string
  name: string;
  fathersName: string;
  dob: string; // ISO string
  caste: string;
  religion: string;
  fathersOccupation: string;
  homeAddress: string;
  classEnrolled: string;
  classLeft?: string;
  leftOn?: string; // ISO string
  reason?: string;
  remarks?: string;
}

interface StudentModalProps {
  student?: Student;
  onClose: () => void;
  onSubmit: (data: Student) => Promise<void>;
}

const StudentModal: React.FC<StudentModalProps> = ({ student, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Student>({
    enrollmentNo: '',
    enrollmentDate: '',
    name: '',
    fathersName: '',
    dob: '',
    caste: '',
    religion: '',
    fathersOccupation: '',
    homeAddress: '',
    classEnrolled: '',
    classLeft: '',
    leftOn: '',
    reason: '',
    remarks: '',
  });

  useEffect(() => {
    if (student) {
      setFormData({
        ...student,
        dob: new Date(student.dob).toLocaleDateString('en-US'), // Format for the form
        leftOn: student.leftOn ? new Date(student.leftOn).toLocaleDateString('en-US') : '',
      });
    }
  }, [student]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newStudentData: Student = {
      ...formData,
      dob: new Date(formData.dob).toISOString(), // Convert back to ISO
      leftOn: formData.leftOn ? new Date(formData.leftOn).toISOString() : undefined,
    };

    await onSubmit(newStudentData);
    onClose(); // Close modal after submission
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>{student ? 'Edit Student' : 'Add Student'}</h2>
        
        <input
          type="text"
          value={formData.enrollmentNo}
          onChange={(e) => setFormData({ ...formData, enrollmentNo: e.target.value })}
          placeholder="Enrollment No"
          required
        />
        <input
          type="date"
          value={formData.enrollmentDate.substring(0, 10)} // Date input format YYYY-MM-DD
          onChange={(e) => setFormData({ ...formData, enrollmentDate: e.target.value })}
          placeholder="Enrollment Date"
          required
        />
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={formData.fathersName}
          onChange={(e) => setFormData({ ...formData, fathersName: e.target.value })}
          placeholder="Father's Name"
          required
        />
        <input
          type="date"
          value={formData.dob} // Keep in MM/DD/YYYY format for the input
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          placeholder="Date of Birth"
          required
        />
        <input
          type="text"
          value={formData.caste}
          onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
          placeholder="Caste"
          required
        />
        <input
          type="text"
          value={formData.religion}
          onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
          placeholder="Religion"
          required
        />
        <input
          type="text"
          value={formData.fathersOccupation}
          onChange={(e) => setFormData({ ...formData, fathersOccupation: e.target.value })}
          placeholder="Father's Occupation"
          required
        />
        <textarea
          value={formData.homeAddress}
          onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
          placeholder="Home Address"
          required
        />
        <input
          type="text"
          value={formData.classEnrolled}
          onChange={(e) => setFormData({ ...formData, classEnrolled: e.target.value })}
          placeholder="Class Enrolled"
          required
        />
        <input
          type="text"
          value={formData.classLeft}
          onChange={(e) => setFormData({ ...formData, classLeft: e.target.value })}
          placeholder="Class Left"
        />
        <input
          type="date"
          value={formData.leftOn ? formData.leftOn.substring(0, 10) : ''} // For the date input
          onChange={(e) => setFormData({ ...formData, leftOn: e.target.value })}
          placeholder="Left On"
        />
        <input
          type="text"
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          placeholder="Reason"
        />
        <textarea
          value={formData.remarks}
          onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
          placeholder="Remarks"
        />
        
        <button type="submit">{student ? 'Update Student' : 'Add Student'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default StudentModal;
