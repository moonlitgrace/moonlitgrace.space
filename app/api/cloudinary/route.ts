import { NextResponse } from 'next/server';
import { validateFile } from '@/lib/utils';
import cloudinary from '@/app/_lib/cloudinary';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!validateFile(file)) {
      return NextResponse.json({ message: 'No file provided' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const base64String = Buffer.from(buffer).toString('base64');
    const base64Image = `data:${file.type};base64,${base64String}`;

    const uploadRes = await cloudinary.uploader.upload(base64Image);

    return NextResponse.json({ url: uploadRes.secure_url });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
