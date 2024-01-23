import {connect} from 'react-redux'
import { addToCart } from '../Services/Actions/action';
import HomeRedux from "../components/HomeRedux";



const mapStateToProps = state =>({
 cardData:state.cardItems
})

const mapDispatchToProsp = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})



export default connect(mapStateToProps,mapDispatchToProsp)(HomeRedux)
















// export default HomeRedux