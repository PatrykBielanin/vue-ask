<template>
    <div @click.prevent="trigger()">
        <slot />
    </div>

    <AskModal
        v-if="show"
        @confirm="pass()"
        @cancel="close()"
    >
        <template #title>
            {{ props.title }}
        </template>

        <template #content>
            {{ props.content }}
        </template>

        <template #buttonCancel>
            {{ props.buttonCancel }}
        </template>

        <template #buttonAccept>
            {{ props.buttonAccept }}
        </template>
    </AskModal>
</template>

<script setup>
    import AskModal from "./AskModal.vue"
    import { ref } from 'vue'

    const emit = defineEmits([
        'accepted',
        'canceled'
    ])

    const props = defineProps({
        title: {
            type: String,
            required: false,
            default: 'Confirm your action'
        },
        content: {
            type: String,
            required: false,
            default: 'Are you sure you want to delete this item?'
        },
        buttonCancel: {
            type: String,
            required: false,
            default: 'cancel'
        },
        buttonAccept: {
            type: String,
            required: false,
            default: 'accept'
        }
    })

    const show = ref(false)

    const trigger = () => {
        show.value = true
    }

    const pass = () => {
        show.value = false
        emit('accepted')
    }

    const close = () => {
        show.value = false
        emit('canceled')
    }

</script>
