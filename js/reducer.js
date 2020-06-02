let state = {
  count: 0
}

let action = {
  type: "INCREASE"
}

function changeState(state, action) {
  switch(action.type) {
    case "INCREASE":
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

function render() {
  document.body.textContent = state.count
}

function dispatch(action) {
  state = changeState(state, action)
  render()
}

render()