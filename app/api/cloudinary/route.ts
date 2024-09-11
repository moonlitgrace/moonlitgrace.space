// app/api/cloudinary-upload/route.ts
import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ success: false, message: 'No file provided' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const base64String = Buffer.from(buffer).toString('base64');
    const base64Image = `data:${file.type};base64,${base64String}`;

    const uploadResponse = await cloudinary.uploader.upload(base64Image);

    return NextResponse.json({ success: true, data: uploadResponse.url });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
