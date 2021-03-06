import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head'

import wrapper from '../store/configureStore';

const App = ({ Component }) => {
   
    return (
       <>
        <Head> <title>Fake-shop</title></Head>
            <Component />
       </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}
export default wrapper.withRedux(App);
