import AssignmentList from './AssignmentList.js'
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },
    template: `   
       <section class="flex gap-8">
            <assignmentList 
                title="In Progress" 
                :assignments="filter.inProgress">
                <assignmentCreate @create="add" ></assignmentCreate>
            </assignmentList>
            <assignmentList
                v-if="showCompleted"
                title="Completed" 
                :assignments="filter.completed"
                can-toggle
                @toggle="showCompleted = !showCompleted"
                >
            </assignmentList>
        </section>
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },
    created(){
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => this.assignments = assignments)
    },
    methods:{
        add(newAssignment){
            this.assignments.push({
                id: this.assignments.length + 1,
                name: newAssignment,
                complete: false
            });
        }
    },
    computed:{
        filter()
        {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed:  this.assignments.filter(a => a.complete)
            }
        },

    }
}