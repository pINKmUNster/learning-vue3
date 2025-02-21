import Assignment from "./Assignment.js";

export default {
    components: { Assignment  },
    template: `
     <section v-if="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
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