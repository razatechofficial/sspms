import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  enrollmentNo: string;
  enrollmentDate: Date;
  name: string;
  fatherName: string;
  dob: Date;
  caste: string;
  religion: string;
  fatherOccupation: string;
  homeAddress: string;
  classEnrolled: string;
  classLeft?: string;
  leftOnDate?: Date;
  reason?: string;
  remarks?: string;
}

const studentSchema = new Schema<IStudent>({
  enrollmentNo: { type: String, required: true, unique: true },
  enrollmentDate: { type: Date, required: true },
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  dob: { type: Date, required: true },
  caste: { type: String, required: true },
  religion: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  homeAddress: { type: String, required: true },
  classEnrolled: { type: String, required: true },
  classLeft: { type: String },
  leftOnDate: { type: Date },
  reason: { type: String },
  remarks: { type: String }
});

export default mongoose.models.Student || mongoose.model<IStudent>('Student', studentSchema);
