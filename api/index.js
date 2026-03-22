module.exports = (req, res) => {
  const secretKey = "ZeIoNhUb888"; // รหัสลับที่คุณตั้งไว้

  // เช็คว่ารหัสที่ส่งมาจากเกมถูกต้องไหม
  if (req.headers['x-auth-token'] === secretKey) {
    res.setHeader('Content-Type', 'text/plain');
    
    // --- ใส่โค้ด Lua ของคุณในส่วน ` ` นี้ ---
    res.status(200).send(`
        print("ZeIoNhUb: ระบบวิ่งไวทำงานแล้ว!")
        
        local player = game.Players.LocalPlayer
        local function setSpeed()
            if player.Character and player.Character:FindFirstChild("Humanoid") then
                player.Character.Humanoid.WalkSpeed = 100 -- ปรับตัวเลขความเร็วตรงนี้ (ปกติคือ 16)
            end
        end

        -- สั่งให้ทำงานทันทีและทำงานทุกครั้งที่ตัวละครเกิดใหม่
        setSpeed()
        player.CharacterAdded:Connect(setSpeed)
    `);
    // ---------------------------------------

  } else {
    // ถ้าเปิดผ่าน Browser ปกติ ให้หลอกว่าเป็นหน้า 404
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send(`
        <html><head><title>404 Not Found</title></head>
        <body style="font-family: sans-serif;">
            <h1>404 Not Found</h1>
            <p>The requested URL was not found on this server.</p>
            <hr><address>Apache/2.4.41 (Ubuntu) Server Port 80</address>
        </body></html>
    `);
  }
};
