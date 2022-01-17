let app = new Vue({
    el: "#app",
    data: {

        elements: [
            {
                text: 'Monopoly',
                done: true
            },
            {
                text: 'Vudulhu',
                done: false
            },
            {
                text: 'Terraforming Mars',
                done: false
            },
            {
                text: 'Puerto Rico',
                done: true
            },
            {
                text: 'Dixit',
                done: false
            },
            {
                text: 'I Coloni di Catan',
                done: false
            },
            {
                text: 'Sherlock Holmes Consulente Investigativo: I Delitti del Tamigi',
                done: true
            },
        ]
    },
    methods: {
        itsDone: function(indexTodo){
            if(indexTodo == false){
                return "";                
            }            
            return "done";
            
        }
    }
})