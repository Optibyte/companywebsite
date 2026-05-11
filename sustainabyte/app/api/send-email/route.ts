import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data: any = {};
    let attachments: any[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      data.type = formData.get("type");
      data.name = formData.get("name");
      data.email = formData.get("email");
      data.organization = formData.get("organization") || "";
      data.position = formData.get("position") || "";
      data.experience = formData.get("experience") || "";
      data.mobile = formData.get("mobile") || "";
      data.message = formData.get("message") || "";

      const file = formData.get("resume") as File;
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
        const uploadDir = path.join(process.cwd(), "public", "uploads");

        // Ensure directory exists
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, filename);
        await writeFile(filePath, buffer);

        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type
        });

        data.resumePath = `/uploads/${filename}`;
      }
    } else {
      data = await req.json();
    }

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject = "New Form Submission - Sustainabyte";
    let html = "";

    if (data.type === "contact") {
      subject = "New Contact Inquiry - Sustainabyte";
      html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0D1B3E;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Organization:</strong> ${data.organization}</p>
          <p><strong>Mobile:</strong> ${data.mobile || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${data.message}</div>
        </div>
      `;
    } else if (data.type === "career") {
      subject = `Job Application: ${data.position} - ${data.name}`;
      html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0D1B3E;">New Job Application</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Position:</strong> ${data.position}</p>
          <p><strong>Experience:</strong> ${data.experience}</p>
          <p><strong>Message/Cover Letter:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${data.message || "No message provided."}</div>
          ${data.resumePath ? `<p style="margin-top: 20px; font-weight: bold;">Resume stored at: <a href="http://localhost:3000${data.resumePath}">${data.resumePath}</a></p>` : ""}
        </div>
      `;
    }

    const mailOptions = {
      from: `"Sustainabyte Forms" <${process.env.EMAIL_USER}>`,
      to: "yuvaraj.p@sustainabyte.ai",
      subject: subject,
      html: html,
      attachments: attachments
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Email sent successfully",
      resumeUrl: data.resumePath
    }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to process request: " + error.message }, { status: 500 });
  }
}
