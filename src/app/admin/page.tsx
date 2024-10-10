// // app/students/page.tsx
// "use client";
// import { useEffect, useState } from "react";

// const StudentsPage = () => {
//   const [students, setStudents] = useState<any[]>([]);
//   const [showModal, setShowModal] = useState(false); // For modal visibility
//   const [newStudent, setNewStudent] = useState({
//     enrollmentNo: "",
//     enrollmentDate: "",
//     name: "",
//     fatherName: "",
//     dob: "",
//     caste: "",
//     religion: "",
//     fatherOccupation: "",
//     homeAddress: "",
//     classEnrolled: "",
//     classLeft: "",
//     leftOnDate: "",
//     reason: "",
//     remarks: "",
//   });

//   const fetchStudents = async () => {
//     try {
//       const res = await fetch("/api/students", {
//         method: "GET",
//       });
//       const data = await res.json();
//       setStudents(data);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   const handleAddStudent = async () => {
//     try {
//       const res = await fetch("/api/students", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newStudent),
//       });

//       if (res.ok) {
//         alert("Student added successfully");
//         const addedStudent = await res.json();
//         setStudents([...students, addedStudent]);
//         setShowModal(false); // Close the modal after adding student
//       } else {
//         const errorData = await res.json();
//         alert(`Error adding student: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Error adding student:", error);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewStudent({
//       ...newStudent,
//       [e.target.name]: e.target.value,
//     });
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Student List</h1>

//       {/* Button to open the modal */}
//       <button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
//         onClick={() => setShowModal(true)}
//       >
//         Add New Student
//       </button>

//       {/* Modal for adding a new student */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded shadow-lg w-1/2">
//             <h2 className="text-xl font-bold mb-4">Add New Student</h2>
//             <form>
//               <input
//                 type="text"
//                 name="enrollmentNo"
//                 placeholder="Enrollment No"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="date"
//                 name="enrollmentDate"
//                 placeholder="Enrollment Date"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="fatherName"
//                 placeholder="Father's Name"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="date"
//                 name="dob"
//                 placeholder="Date of Birth"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="caste"
//                 placeholder="Caste"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="religion"
//                 placeholder="Religion"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="fatherOccupation"
//                 placeholder="Father's Occupation"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="homeAddress"
//                 placeholder="Home Address"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="classEnrolled"
//                 placeholder="Class Enrolled"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="classLeft"
//                 placeholder="Class Left"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="date"
//                 name="leftOnDate"
//                 placeholder="Left On Date"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="reason"
//                 placeholder="Reason"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="remarks"
//                 placeholder="Remarks"
//                 className="border border-gray-400 p-2 w-full mb-2"
//                 onChange={handleInputChange}
//               />

//               <div className="flex justify-end mt-4">
//                 <button
//                   type="button"
//                   className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   onClick={handleAddStudent}
//                 >
//                   Add Student
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Student Table */}
//       <table className="table-auto w-full border-collapse border border-gray-400">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-400 px-4 py-2">Enrollment No</th>
//             <th className="border border-gray-400 px-4 py-2">
//               Enrollment Date
//             </th>
//             <th className="border border-gray-400 px-4 py-2">Name</th>
//             <th className="border border-gray-400 px-4 py-2">Father's Name</th>
//             <th className="border border-gray-400 px-4 py-2">DOB</th>
//             <th className="border border-gray-400 px-4 py-2">Caste</th>
//             <th className="border border-gray-400 px-4 py-2">Religion</th>
//             <th className="border border-gray-400 px-4 py-2">
//               Father's Occupation
//             </th>
//             <th className="border border-gray-400 px-4 py-2">Home Address</th>
//             <th className="border border-gray-400 px-4 py-2">Class Enrolled</th>
//             <th className="border border-gray-400 px-4 py-2">Class Left</th>
//             <th className="border border-gray-400 px-4 py-2">Left On Date</th>
//             <th className="border border-gray-400 px-4 py-2">Reason</th>
//             <th className="border border-gray-400 px-4 py-2">Remarks</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student._id}>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.enrollmentNo}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {new Date(student.enrollmentDate).toLocaleDateString()}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.name}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.fatherName}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {new Date(student.dob).toLocaleDateString()}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.caste}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.religion}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.fatherOccupation}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.homeAddress}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.classEnrolled}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.classLeft}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {new Date(student.leftOnDate).toLocaleDateString()}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.reason}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {student.remarks}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentsPage;


import React from 'react'

const Admin = () => {
  return (
    <div>Admin</div>
  )
}

export default Admin