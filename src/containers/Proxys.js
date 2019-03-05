import { connect } from 'react-redux'
import Proxy from '../components/Proxy'
import { changeUrl } from '../reducers'

const mapStateToProps = state => ({state})

const mapDispatchToProps = dispatch => ({
  changeUrl: (id, url) => dispatch(changeUrl(id, url))
})

export default connect(mapStateToProps,mapDispatchToProps)(Proxy)
