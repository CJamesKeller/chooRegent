const html = require("choo/html")
const tile = require("../components/tile")

render = (state, emit) => {
    return html`
        <div class="container">
            <h1>Choo Regent!</h1>
            ${tile(state, emit)}
        </div>
    `
}

module.exports = render
