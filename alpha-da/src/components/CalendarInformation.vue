<template>
<v-card>
    <calendar class="halfWidth"></calendar>
</v-card>
    
</template>

<script>
import Calendar from './Calendar.vue';
export default {
    name: "CalendarInformation",
    components: {
        calendar: Calendar,
    }
    
}
</script>

<style scoped>
.halfWidth {
    width: 50%

}
</style>