import AssignmentList from './AssignmentList.js'

export default {
    components: {
        AssignmentList
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
    `,
    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: 'First project',
                    complete: true
                },
                {
                    id: 2,
                    name: 'Second project',
                    complete: false
                },
                {
                    id: 3,
                    name: 'Third project',
                    complete: false
                },
            ]
        }
    },
    computed:{
        filter()
        {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed:  this.assignments.filter(a => a.complete)
            }
        }
    }
}