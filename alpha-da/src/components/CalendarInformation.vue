<template>
<v-card>
    <calendar></calendar>
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

</style>