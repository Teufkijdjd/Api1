module.exports = async (req, res) => {
  try {
    const secretKey = "nnn";

    // กัน undefined + lowercase header
    const token = req.headers['x-auth-token'];

    if (token && token === secretKey) {
      res.setHeader('Content-Type', 'text/plain');

      res.status(200).send(`
print("ZeIoNhUb: รหัสถูกต้อง!")
loadstring(game:HttpGet("https://pastebin.com/raw/g9trxTQs"))()
      `);
    } else {
      res.status(403).send('Forbidden');
    }
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
};
