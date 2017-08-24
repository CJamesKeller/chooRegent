const choo = require("choo")
const app = choo()
const main = require("./templates/views/main")
const regular = require("./store/regular.json")

app.use(function(state, emitter) {
    state.expressions = []
    state.expressions = regular.expressions
    
    emitter.on("add", ( newExpression ) => {
        state.expressions.push(newExpression)
        emitter.emit("render")
    })
})

app.route("/", main)
app.mount("div")
