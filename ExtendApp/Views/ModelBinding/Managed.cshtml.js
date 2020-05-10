const axios = require('axios')

var managed_app = new Vue({
    el: '#app',
    data: {
        test: "Hello World 22",
        model: {
            title: "",
            songs: []
        }
    },
    created() {
        // handle some loading display
        axios.get("/ModelBinding/GetVueOnlyData")
            .then(res => {
                this.model = res.data;
            })
    },
    methods: {
        post() {
            axios.post("/ModelBinding/PostVueOnlyData", this.model)
                .then(res => {
                    //do something here
                })
        }
    }
})