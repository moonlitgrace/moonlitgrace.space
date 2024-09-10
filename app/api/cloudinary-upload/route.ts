// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '@/lib/cloudinary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const file = req.body.file; // The base64 or URL of the file
      const uploadResponse = await cloudinary.uploader.upload(file, {
        upload_preset: 'your upload preset',
      });

      res.status(200).json({ success: true, data: uploadResponse });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
