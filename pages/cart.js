import OrderList from '../components/OrderList'
import MenuLayout from '../components/MenuLayout'
import { useSelector } from 'react-redux'


const cart = () => {
    const {isLogin} = useSelector((state) => state.user);
 
     return(
        <MenuLayout>
           {isLogin ? <OrderList/>:<div>로그인이 필요합니다.</div>}
        </MenuLayout>
     )
}

export default cart
