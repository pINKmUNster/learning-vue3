import AssignmentList from './AssignmentList.js'
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },
    template: `   
       <section class="space-y-6">
            <assignmentList 
                title="In Progress" 
                :assignments="filter.inProgress">
            </assignmentList>
            <assignmentList 
                title="Completed" 
                :assignments="filter.completed">
            </assignmentList>
        </section>
        <assignmentCreate @create="add" ></assignmentCreate>
    `,
    data() {
        return {
            assignments: [

            ]
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