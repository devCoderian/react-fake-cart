const http = require('http');
const server = http.createServer((req, res) => {
    //백엔드 서버 만들기
    //사가에서 보내는 주소들이 다 백엔드 서버임
    //ex) /post
    //프론트에서 해도되는데 대규모 앱의 대비
    //ex)서버 한대에 프론트랑 백 같이 할 경우 
    //front 서버는 SSR back은 api를 제공
    //front에 요청이 1초에 100개 백에 10개 온다 가정
    //컴퓨터 서버가 부하가 가면 서버가 타지기 때문에 스케일링 작업(서버 한대 더 만들어서 복사)을 해준다.
    //1000 만큼의 요청을 두 컴퓨터(서버)가 나눠받도록 한다 -> 여기서 백엔드는 애초에 요청이 적은데 나누면 불필요한 낭비가 발생
    //한 컴퓨터에 같이 있으면 낭비가 일어남 (스케일링 자체가 통째로 복사하는 것)
    //대규모 기능별로 서버를 나눠주는 경우가 많음
    //처음부터 프론트 백 나눠서 만들기 -> 따로 요청 많은 부분 만 늘려서 컴퓨터 자원을 아끼기
    //작은 컴퓨터 두대가 큰 컴퓨터 한대보다 싸다
    //이 앱은 백엔드(API SERVER)에서 데이터만 가져옴
    //프론트 서버사이드 렌더링

    res.write('res는 응답을 보내고 싶을 때');
    res.write('<h2>화면에 그러짐 html도 가능</h2>');
    res.write('화면에 그러짐'); 
    res.write('화면에 그러짐');
    res.write('화면에 그러짐'); 
    

    console.log(req.url, req.method);
    if(req.method === 'GET'){
        if(req.url === '/api/post'){

        }else if(req.url === '/api/post 등등'){
            //node로 구현하게 되면 분기문이 엄청 많아진다.
            //서버 쪽 라우터들도 쪼개줄 필요가 있다.
            //여기까지가 기본적인 원리이고  express 프레임워크 라는 걸 써준다.
            //서버 -> 프론트에서 요청을 해주면 응답을 해준다. 
            //응답은 무조건 한번 -> ex) res.end
            //기존 노드보다 구조적으로 짤 수 있는 express 사용
        }
    }else if(req.method === 'GET'){
        
    }
    res.end('HelloNode 실행 방법 -> 터미널 -> node app.js, end는 마지막에만 사용 무조건 한번 여러줄 사용시 res.write');
    
})
// server.listen(3065);
server.listen(3075, () => {
    console.log('서버가 실행중입니다.')
    //node런타임이 app.js 를 실행해서 http가 서버역할을 해준다.
    //front 는 next에서 자동 업데이트 해주지만 back은 수정 후 다시 node 실행
});

