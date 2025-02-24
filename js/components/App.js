import Assignments from "./Assignements.js";
import Panel from "./Panel.js"


export default {
    components: {
        Assignments,
        Panel
    },
    template: `
   <div class="grid gap-6">
        <assignments></assignments>
        <panel>
            <template v-slot:heading> Hello world</template>
           This is my default slot content. 
            <template v-slot:footer> Footer</template>
           
        </panel>
         <panel theme="light">
           This is my default slot content. 
        </panel>
    </div> 
    `,
}