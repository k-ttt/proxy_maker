const ADD_CARD = 'ADD_CARD'
const CHANGE_URL = 'CHANGE_URL'

const defaultUrl = 'https://www.pokemon-card.com/assets/images/card_images/large/SM9/035966_P_KAMERU.jpg'

let nextId = 0
export const addCard = (url = defaultUrl) => (
  {
    type: ADD_CARD,
    id: nextId++,
    url,
  }
)

export const changeUrl = (id, url) => (
  {
    type: CHANGE_URL,
    id,
    url,
  }
)

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          id: action.id,
          url: action.url,
        }
      ]
    case CHANGE_URL:
      return state.map(
        value => {
          if (value.id === action.id) {
            value.url = action.url === '' ? defaultUrl : action.url
            return value
          }
          return value
        }
      )
    default:
      return state
  }
}
