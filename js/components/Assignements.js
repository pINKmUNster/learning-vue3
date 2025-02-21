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
        
        <form class="mt-6" @submit.prevent="add" > 
            <input type="text" class="text-black border border-gray-600 rounded-lg p-2" placeholder="Add a new assignment" v-model="newAssignment">
            <button class="bg-blue-400 text-white px-4 py-2 rounded-lg mt-2 ml-2" type="submit" >Add</button>
        </form>
        
    `,
    data() {
        return {
            newAssignment: '',
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
    methods:{
        add(e){
            if (this.newAssignment.trim() === '') return;
            this.assignments.push({
                id: this.assignments.length + 1,
                name: this.newAssignment,
                complete: false
            });
            this.newAssignment = '';
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