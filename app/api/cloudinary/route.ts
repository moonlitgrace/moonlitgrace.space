import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ message: 'No file provided' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const base64String = Buffer.from(buffer).toString('base64');
    const base64Image = `data:${file.type};base64,${base64String}`;

    const uploadResponse = await cloudinary.uploader.upload(base64Image);

    return NextResponse.json({ url: uploadResponse.url });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
