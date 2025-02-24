import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";


export default {
    components: {Assignment, AssignmentTags,Panel},
    template: `
     <panel v-if="assignments.length" class="w-60">
         <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">{{ title }}
                    <span class="text-sm text-gray-600">({{ assignments.length }})</span>
                </h2>
                <button v-show="canToggle" @click="$emit('toggle')">&times;</button> 
              </div>  
                <assignment-tags
                    v-model:currentTag="currentTag"
                    :tags="this.assignments.map(a => a.tag)"
                />
                <ul class="border border-gray-600 rounded-lg p-4 divide-y divide-gray-600 mt-6">
                    <assignment 
                        :assignment="assignment"
                        v-for="assignment in filteredAssignments"
                        :key="assignment.id"
                    ></assignment>
                </ul>
            <slot></slot>
        </panel>
    `,
    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        assignments: Array,
        canToggle: {
            type: Boolean,
            default: false
        },
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