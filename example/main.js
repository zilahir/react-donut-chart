import React from 'react'
import ReactDOM from 'react-dom'

import Example from './example'

/**
* @author zilahir
* @function App
* */

const App = () => (
	<div>
		<Example />
	</div>
)

ReactDOM.render(<App />, document.querySelector('#app'))
