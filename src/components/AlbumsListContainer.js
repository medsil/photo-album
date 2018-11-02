import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { helloWorld, newAlbum } from '../actions/test'

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))
  
			// this.props.dispatch({
			// type: 'HELLO_WORLD',
			// payload: {
			// 		firstName: 'Alice',
			// 		lastName: 'McDog'
			// }
			// })

	/*		this.props.dispatch( helloWorld('Alice', 'McDog' )) */
	this.props.helloWorld('Alice', 'Seriously Alice')
		
	this.props.newAlbum(  5, 'Enjoying sunshine' )
		

    }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}

const mapStateToProps = (state) => {
	return {
		albums: state
	}
}



// export default connect()(AlbumsListContainer)
// export default connect(null, { helloWorld: helloWorld })(AlbumsListContainer)
export default connect(null, { mapStateToProps, helloWorld: helloWorld, newAlbum: newAlbum })(AlbumsListContainer)

