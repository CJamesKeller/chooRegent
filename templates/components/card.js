const html = require("choo/html")
const css = require("sheetify")
const regular = require("../../store/regular.json")

const cardStyle = css`
    :host {
        border: 2px solid navy;
        box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        margin: 10px;
        max-width: 40vw;
        min-width: 20vw;
        padding-left: 30px;
        padding-right: 30px;
        background-color: lightskyblue;
    }
`
const cardWrap = css`
    :host {
        display: flex;
        flex-wrap: wrap;
    }
`

const buttonStyle = css`
    :host {
        box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        background-color: orangered;
        margin: 10px;
        padding: 10px;
        border: 1px solid navy;
        font-weight: bold;
    }
`

card = (state, emit) => {
    let data = []

    data = state.expressions
    addCard = () => {
        emit("add", {
            "name": "New one!",
            "expression": "It's just an expression..."
        })
    }
    return html`
        <div class="container ${cardWrap}">
            ${data.map(expr => {
                return html`
                    <div class="${cardStyle}">
                        <h2>${expr.name}</h2>
                        <p>${expr.expression}</p>
                    </div>
                `
            })}
            <button class="${buttonStyle}" onclick="${addCard}">Add!</button>
        </div>
    `
}

module.exports = card
