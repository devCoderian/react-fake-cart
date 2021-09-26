import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head'

//모든 /pages 페이지 공통
const App = ({ Component }) => {
    <Head> <title>Fake-shop</title></Head>
    return (
        <div>
            <Component />
        </div>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}
export default App
