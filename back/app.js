const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const app = express(); //한번 호출 필수
const cors = require('cors');
//create server를 구조적으로 바꾸어줌

// app.get('/', (req, res) => {
//     res.send('hello express');
// })

// app.get('/api', (req, res) => {
//     res.send('hello api');
// });

// app.get('/api/posts', (req, res) => {
//     //api 들은 보통 json으로 응답한다.
//     res.json([
//         {id: 1, content: 'hello'},
//         {id: 2, content: 'hello2'},
//         {id: 3, content: 'hello3'},
//     ]);
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:3800',
    credentials: true,
  }));


app.use('/post', postRouter); //중복된거 밖으로 뺌 prefix 접두어
app.use('/user', userRouter); //중복된거 밖으로 뺌 prefix 접두어
app.listen(3060, () => {
    console.log('서버 실행 중')
})

