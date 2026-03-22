module.exports = (req, res) => {
  const secretKey = "nnn"; // ต้องแก้ตรงนี้เป็น nnn

  if (req.headers['x-auth-token'] === secretKey) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('print("รหัสใหม่ nnn ใช้งานได้แล้ว!")'); 
  } else {
    res.status(404).send('404: Not Found');
  }
};
Not
