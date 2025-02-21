import Assignment from "./Assignment.js";

export default {
    components: { Assignment },
    template: `
     <section v-if="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul class="border boder-gray-600 rounded-lg p-4 divide-y divide-gray-600">
                <assignment 
                    :assignment="assignment"
                    v-for="assignment in assignments"
                    :key="assignment.id"
                ></assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title:{
            type: String,
        }
    },
}