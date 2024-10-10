import connect from "@/lib/db";
import Student from "@/lib/models/Student";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

// GET all students
export const GET = async () => {
  try {
    await connect();
    const students = await Student.find();
    return new NextResponse(JSON.stringify(students), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching students: " + error.message, {
      status: 500,
    });
  }
};

// POST a new student
export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();

    const newStudent = new Student(body);
    await newStudent.save();

    return new NextResponse(
      JSON.stringify({ message: "Student is created", student: newStudent }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating student: " + error.message, {
      status: 500,
    });
  }
};

// PATCH (update) a student by ID
export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { studentId, updatedData } = body;
    await connect();

    if (!studentId || !updatedData) {
      return new NextResponse(
        JSON.stringify({ message: "Student ID or update data not provided" }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(studentId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid Student ID" }),
        {
          status: 400,
        }
      );
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      updatedData,
      { new: true }
    );

    if (!updatedStudent) {
      return new NextResponse(
        JSON.stringify({ message: "Student not found in database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Student is updated",
        student: updatedStudent,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in updating student: " + error.message, {
      status: 500,
    });
  }
};

// DELETE a student by ID
export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get("studentId");
    if (!studentId) {
      return new NextResponse(
        JSON.stringify({ message: "Student ID not provided" }),
        {
          status: 400,
        }
      );
    }

    if (!Types.ObjectId.isValid(studentId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid Student ID" }),
        {
          status: 400,
        }
      );
    }

    await connect();
    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return new NextResponse(
        JSON.stringify({ message: "Student not found in database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Student is deleted",
        student: deletedStudent,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in deleting student: " + error.message, {
      status: 500,
    });
  }
};
