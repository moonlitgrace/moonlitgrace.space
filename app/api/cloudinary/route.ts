// pages/api/upload.js
import cloudinary from '../../../utils/cloudinary';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'upload preset',
      });
      res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
