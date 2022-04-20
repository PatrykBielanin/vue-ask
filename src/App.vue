<template>
    <VueAsk
        @accepted="commitChange()"
    >
        <button @click.prevent>
            Delete this item
        </button>
    </VueAsk>

    <template v-if="success">
        Successfully deleted
    </template>
</template>

<script setup>
    import { ref } from 'vue'

    const success = ref(false)

    const commitChange = () => {
        success.value = true
    }

    const notAccepted = () => {
        alert("You have to accept to delete this item!")
    }
</script>
