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
                {
                    id: 1,
                    name: 'First project',
                    complete: true,
                    tag: 'Science'
                },
                {
                    id: 2,
                    name: 'Second project',
                    complete: false,
                    tag: 'Math'
                },
                {
                    id: 3,
                    name: 'Third project',
                    complete: false,
                    tag: 'Reading'
                },
            ]
        }
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