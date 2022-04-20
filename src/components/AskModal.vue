<template>
    <div class="vue-ask-modal">
        <div class="vue-ask-body">
            <div class="vue-ask-title">
                <slot name="title" />
            </div>

            <div class="vue-ask-content">
                <slot name="content" />
            </div>

            <div class="vue-ask-buttons">
                <button @click="cancel()" class="vue-ask-button-cancel">
                    <slot name="buttonCancel" />
                </button>

                <button @click="confirm()" class="vue-ask-button-confirm">
                    <slot name="buttonAccept" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits([
        'confirm',
        'cancel'
    ])

    const confirm = () => {
        emit('confirm')
    }

    const cancel = () => {
        emit('cancel')
    }
</script>
