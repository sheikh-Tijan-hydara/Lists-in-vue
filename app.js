const app = Vue.createApp({

    data(){
        return{
            enteredTask:'',
            tasks:[],
            taskListIsVisible: true,
        };
    },
    computed: {
        buttonCaption(){
            return this.taskListIsVisible ? 'Hide': 'Show';
        }
    },

    methods:{
        addTask(){
            this.tasks.push(this.enteredTask);
        },
        toggleTask(){
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    }
});

app.mount('#assignment');