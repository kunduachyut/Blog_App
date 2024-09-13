
import { ConnectDb } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server"; 


const LoadDB = async () => {
  await ConnectDb();
};

// Load the database connection immediately when the file is loaded
LoadDB();

export async function POST(request) {
  // Ensure that the database connection is established
  await LoadDB();
  
  try {
    const formData = await request.formData();
    const emailData = {
      email: `${formData.get('email')}`,
    };

    // Save email data to the database
    await EmailModel.create(emailData);

    // Return JSON response indicating success
    return NextResponse.json({ success: true, msg: "Email Subscribed" });

  } catch (error) {
    // Handle any errors
    console.error("Error while subscribing email:", error);
    return NextResponse.json({ success: false, msg: "Failed to subscribe email" }, { status: 500 });
  }
}

export async function GET(request) {
    const emails= await EmailModel.find({});
    return NextResponse.json({emails}); 
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success:true,msg:"Email Deleted"})
}