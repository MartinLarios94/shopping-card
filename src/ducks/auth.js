// actions
const LOGIN = "login";
const LOGOUT = "logout";

// reducer
const initialState = {
  token: localStorage.getItem("token"),
  isLogged: false,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return handlerLogin(state, action.payload)
    case LOGOUT:
      return handlerLogout(state, action.payload)
    default:
      return state;
  }
}

function handlerLogin(state, payload) {
  return {
    ...state,
    isLogged: true,
    token: localStorage.setItem("token", payload.token),
  };
}

function handlerLogout(state, payload) {
  return {
    ...state,
    isLogged: false,
    token: localStorage.removeItem("token"),
  };
}

export function logIn(token, isLogged) {
  return {
      type: LOGIN,
      payload: {
        token
      }
  }
}