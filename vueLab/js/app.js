Vue.component("book",{
    props:[ "book" ],
    template: `<p>{{ book.title  }} <br>{{ book.emoji }} <br> {{ book.author }} </p>`
})

let app = new Vue ({
    el: "#app",
    data: {

        books: [
            { id:1, title: "Dank book", emoji: "📗", author: "Somedude"},
            { id:2, title: "How to Read",  emoji: "📙", author: "Kevin Stone" }
        ],

        ready: false
    },

    
});