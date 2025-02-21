export default {
    template: `
         <form class="mt-6" @submit.prevent="add" > 
            <input type="text" class="text-black border border-gray-600 rounded-lg p-2" placeholder="Add a new assignment" v-model="newAssignment">
            <button class="bg-blue-400 text-white px-4 py-2 rounded-lg mt-2 ml-2" type="submit" >Add</button>
        </form>
    `,
    data() {
        return {
            newAssignment: '',
        }
    },
    methods: {
        add() {
            this.$emit('create', this.newAssignment);
            this.newAssignment = '';
        }
    }
}