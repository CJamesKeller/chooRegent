const html = require("choo/html")
const css = require("sheetify")

const createStyle = css`
    :host {
        border: 2px solid darkturquoise;
        box-shadow: 10px 0 20px 0 rgba(0, 0, 0, 0.4), 0 10px 20px 0 rgba(0, 0, 0, 0.4);
        padding: 10px;
        margin: 10px;
        background-color: palegreen;
    }
`

const buttonStyle = css`
    :host {
        box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        background-color: tomato;
        margin: 10px;
        padding: 10px;
        border: 1px solid navy;
        font-weight: bold;
    }
`

create = (state, emit) => {

    addCard = () => {
        let name = document.getElementById("createName")
        let expression = document.getElementById("createExp")

        emit("add", {
            "name": name.value,
            "expression": expression.value
        })
    }

    return html`
        <div class="createForm ${createStyle}">
            <label for="createName">Name:</label>
            <br />
            <input type="text" id="createName" />
            <br />
            <label for="createExp">Expression:</label>
            <br />
            <input type="text" id="createExp" />
            <br />
            <button class="${buttonStyle}" onclick="${addCard}">Add!</button>
        </div>
    `
}

module.exports = create
