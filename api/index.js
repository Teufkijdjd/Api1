module.exports = (req, res) => {
  try {
    const secretKey = "nnn"; // รหัสใหม่ที่คุณตั้งไว้

    if (req.headers['x-auth-token'] === secretKey) {
      res.setHeader('Content-Type', 'text/plain');
      // ใช้เครื่องหมาย ` (Backtick) ครอบโค้ด Lua เพื่อให้พิมพ์ได้หลายบรรทัด
      res.status(200).send(`
        print("ZeIoNhUb: รหัส nnn ถูกต้อง!")
        local p = game.Players.LocalPlayer
        if p.Character and p.Character:FindFirstChild("Humanoid") then
            p.Character.Humanoid.WalkSpeed = 100
        end
      `);
    } else {
      res.status(404).send('404: Not Found');
    }
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
};
