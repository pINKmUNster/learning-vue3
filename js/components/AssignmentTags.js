export default {
    template: `
        <div class="flex gap-2">
            <button 
                v-for="tag in allTags" 
                 @click="$emit('change', tag)"
                class="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-xs mr-2"
                :class="{'bg-red-400 text-blue': tag === currentTag}"
            >{{ tag }}</button>
        </div>
    `,
    props: {
        tags: Array,
        currentTag: String
    },

    computed: {
        allTags() {
            return ['all', ...new Set(this.tags)];
        },
    }
}