import {connect} from 'react-redux'
import {addToCart,removeFromCart} from '../Service/Actions/actions'
import Home from "../Components/Home";

const mapStateToProps = state =>({
   data : state.cardItems
})

const mapDispatchToProps = dispatch =>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeFromCartHandler: data=>dispatch(removeFromCart(data))

})

export default connect (mapStateToProps,mapDispatchToProps)(Home)
// export default Home;