//express 呼び出し
const express = require('express')
// express関数を代入
const app = express()
// どこに通信するか設定
const port = 3000

let booklog = {}

// JSONを使用可能にする
app.use(express.json())

app.post('/booklog', (req, res) => {
  // 受け取った値
  booklog = req.body

  if (!(booklog.name && booklog.text)) {
    return res.json({
      "ok": false,
      "error": "invalid parameter"
    })
  }

  res.json({
    "ok": true,
    "booklog": booklog
  })
})

app.get("/booklog", (req, res) => {
  res.json({
    "ok": true,
    "booklog": [
      booklog
    ]
  })
})

// resをすぐに返せるように、サーバーを起動させておく
app.listen(port, () => {
  // 初期の処理をここに書く
  console.log(`App listening at http://localhost:${port}`)
})
