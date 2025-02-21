export default {
    template: `
        <button 
        :class="{
        ' rounded px-5 py-2 disabled:cursor-not-allowed':  true,
        'bg-blue-200 hover:bg-blue-400 border': type === 'primary',
        'bg-purple-200 hover:bg-purple-400 border': type === 'secondary',
        'bg-gray-200 hover:bg-gray-400 border': type === 'muted',
        'is-loading': processing
        }" 
        :disabled="processing">
            <slot />
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing:{
            type: Boolean,
            default: false
        }
    },
}