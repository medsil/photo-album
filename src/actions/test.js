export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'

export function helloWorld(firstName, lastName) {
    return {
      type: NEW_HELLO_WORLD,
      payload: {
        firstName: firstName,
        lastName: lastName
      }
    }
  }

  export const NEW_ALB = 'ADD_ALBUM'

  export function newAlbum(id, title) {
    return {
      type: NEW_ALB,
      payload: {
        id : id,
        title: title
      }
    }
  }