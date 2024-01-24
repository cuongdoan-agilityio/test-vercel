import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'cuong-test-prismic'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5aYThzRHhFQUFDVUFMRHZ5.DTrvv73vv73vv71YYu-_vXPvv73vv73vv70Fau-_ve-_vWZdPVcvaDZlYmE6RO-_ve-_ve-_vQI',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'test_single',
      path: '/',
    },
  ],
})