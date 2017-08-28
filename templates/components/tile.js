const html = require("choo/html")
const css = require("sheetify")
const card = require("./card")

const tileStyle = css`
    :host {
        border: 5px solid darkolivegreen;
        box-shadow: 10px 0 20px 0 rgba(0, 0, 0, 0.4), 0 10px 20px 0 rgba(0, 0, 0, 0.4);
    }
`

tile = (state, emit) => {
    return html`
        <div class="container ${tileStyle}">
            ${card(state, emit)}
        </div>
    `
}

module.exports = tile
