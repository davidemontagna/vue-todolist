/*
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene
rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul
pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere
il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done
del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/


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
        ],
        inputTodo: ""
    },
    methods: {
        itsDone: function(indexTodo){
            if(indexTodo == false){
                return "";                
            }            
            return "done";            
        },

        //funzione per rimuovere un oggetto dall'array di oggetti
        removeTodo: function(indexTodo){
            this.elements.splice(indexTodo, 1);
        },

        //funzione per inserire un nuovo oggetto nell'array di oggetti
        addTodo: function(inputTodo){
            if(inputTodo != ""){
               newElement = {
                   text: inputTodo,
                   done: false
               }    
               this.elements.push(newElement);                          
            }else{
            alert("Inserisci un nuovo oggetto!");
            }            
        },

        //al click inverto la proprietà done da true a false e viceversa
        invertDone: function(indexTodo){
            this.elements[indexTodo].done = !this.elements[indexTodo].done;
        }

    }
})

