export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const createPost = (post) => {
  return {
    type: 'CREATE_POST',
    title: post.title,
    body: post.body,
    id: Math.floor(Math.Random())
  }
}
