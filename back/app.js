const express = require('express');
const postRouter = require('./routes/post');
const app = express(); //한번 호출 필수

//create server를 구조적으로 바꾸어줌

app.get('/', (req, res) => {
    res.send('hello express');
})

app.get('/api', (req, res) => {
    res.send('hello api');
});

app.get('/api/posts', (req, res) => {
    //api 들은 보통 json으로 응답한다.
    res.json([
        {id: 1, content: 'hello'},
        {id: 2, content: 'hello2'},
        {id: 3, content: 'hello3'},
    ]);
});


app.use('/post', postRouter); //중복된거 밖으로 뺌 prefix 접두어

app.listen(3065, () => {
    console.log('서버 실행 중')
})
