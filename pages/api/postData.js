// pages/api/postData.js

export default async (req, res) => {
    if (req.method === 'POST') {
      const { data } = req.body;
      res.status(200).json({ message: `Received data: ${data}` });
    } else {
      res.status(405).end();
    }
  };