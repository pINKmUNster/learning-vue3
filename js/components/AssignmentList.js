import Assignment from "./Assignment.js";

export default {
    components: {Assignment},
    template: `
     <section v-if="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}
                <span class="text-sm text-gray-600">({{ assignments.length }})</span>
            </h2> 
            <div class="flex gap-2">
                <button 
                    v-for="tag in tags" 
                     @click="currentTag = tag"
                    class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-xs mr-2"
                    :class="{'bg-blue-400 text-blue': tag === currentTag}"
                >{{ tag }}</button>
            </div>
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
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        },
    }
}