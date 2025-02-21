import AssignmentList from './AssignmentList.js'

export default {
    components: {
        AssignmentList
    },
    template: `   
   
        <assignmentList 
            title="In Progress" 
            :assignments="inProgressAssignments">
        </assignmentList>
        <assignmentList  class="mt-8"
            title="Completed" 
            :assignments="completedAssignments">
        </assignmentList>
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
        inProgressAssignments(){
            return this.assignments.filter(a => !a.complete)
        },
        completedAssignments(){
            return this.assignments.filter(a => a.complete)
        }
    }
}