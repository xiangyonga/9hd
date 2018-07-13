
import React from 'react'

import Get from './get'

import Post from './post'

React.Component.prototype.Get = Get
React.Component.prototype.Post = Post

export { Get, Post};

export default {
	Get,Post
}


//vue中

// Vue.prototype.$axios = Axios
// this.$axios