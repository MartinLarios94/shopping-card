import {connect} from 'react-redux'
import Login from '../components/auth'
import {logIn} from '../ducks/auth'

const mapStateToProps = (state, props) => {
    console.log('state', state);
    return {
        token: state.login.token,
        isLogged: state.isLogged
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (token) => dispatch(logIn(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)