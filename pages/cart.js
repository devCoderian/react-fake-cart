import OrderList from '../components/OrderList'
import MenuLayout from '../components/MenuLayout'


const cart = () => {
 
     return(
        <MenuLayout>
           {isLogin ? <OrderList/>:<div>로그인이 필요합니다.</div>}
        </MenuLayout>
     )
}

export default cart
