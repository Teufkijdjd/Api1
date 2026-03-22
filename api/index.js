module.exports = (req, res) => {
  const secretKey = "ZeIoNhUb888";

  // เช็คว่ามี Token ส่งมาไหม และตรงกับรหัสลับหรือไม่
  if (req.headers['x-auth-token'] === secretKey) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('print("ZeIoNhUb Connected!") game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 100');
  } else {
    // หน้า 404 บรรทัดเดียวที่คุณต้องการ
    res.status(404).send('404: Not Found');
  }
};
