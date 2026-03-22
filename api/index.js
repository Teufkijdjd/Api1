module.exports = (req, res) => {
  const secretKey = "nnn"; // นี่คือรหัสลับ

  if (req.headers['x-auth-token'] === secretKey) {
    // --- ส่วนนี้คือโค้ด LUA ของคุณ ---
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`
        print("ยินดีด้วย! สคริปต์ทำงานแล้ว")
        local p = game.Players.LocalPlayer
        p.Character.Humanoid.WalkSpeed = 100
    `); 
    // ----------------------------
  } else {
    // ถ้าไม่มีรหัสลับ ให้แสดงหน้า 404 หลอกๆ
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('<h1>404 Not Found</h1><p>The requested URL was not found on this server.</p>');
  }
};
