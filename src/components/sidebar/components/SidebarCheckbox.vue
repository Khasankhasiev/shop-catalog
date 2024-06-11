<template>
    <div class="checkbox-group">
        <input
            type="checkbox"
            :id="uniqueId"
            v-model="isChecked"
            class="checkbox-input"
        />
        <label :for="uniqueId" class="checkbox-label">
            {{ label }}
        </label>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});

const isChecked = ref(false);
const uniqueId = ref(`checkbox-${props.id}`);
</script>

<style scoped>
.checkbox-group {
    display: flex;
    align-items: center;
}

.checkbox-input {
    margin-right: 8px;
    accent-color: var(--border-color);
    width: 20px;
    height: 20px;
}

.checkbox-label {
    cursor: pointer;
}
</style>
