import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";


export default {
    components: {Assignment, AssignmentTags},
    template: `
     <section v-if="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}
                <span class="text-sm text-gray-600">({{ assignments.length }})</span>
            </h2> 
            
            <assignment-tags
                :tags="this.assignments.map(a => a.tag)"
                @change="currentTag = $event"   
                :currentTag="currentTag"
            />
            <ul class="border boder-gray-600 rounded-lg p-4 divide-y divide-gray-600 mt-6">
                <assignment 
                    :assignment="assignment"
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                ></assignment>
            </ul>
        </section>
    `,
    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        assignments: Array,
        title: {
            type: String,
        }
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    }
}