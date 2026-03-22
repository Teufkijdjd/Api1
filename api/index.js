module.exports = (req, res) => {
  const secretKey = "ZeIoNhUb888"; 

  if (req.headers['x-auth-token'] === secretKey) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`
        print("ZeIoNhUb: ระบบทำงาน!")
        local p = game.Players.LocalPlayer
        p.Character.Humanoid.WalkSpeed = 100
    `);
  } else {
    // --- บรรทัดเดียวที่คุณต้องการ ---
    res.status(404).send('404 Not Found'); 
  }
};
};
