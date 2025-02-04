<template>
 <button :class="classes" :disabled="disabled" @click="handleClick">{{ label }} </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';


// Define the types for the props
type  ButtonVariant= 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';

interface Props{
label: string;
variant?: ButtonVariant;
size?: ButtonSize;
disabled?: boolean;
}
const variantStyle={
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    danger: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    success: 'bg-green-500 text-white',
}
const sizeStyle={
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg',
}
const props= defineProps<Props>();

const  classes =computed(()=>[
    'px-4 py-2 font-semibold rounded-lg transition duration-200',
    variantStyle[props.variant ?? 'primary'],
    sizeStyle[props.size ?? 'md'],
    props.disabled ? 'opacity-50 cursor-not-allowed' : ''

])

const emit=defineEmits(['click']);

const handleClick=()=>{
  if (!props.disabled){
    emit('click');

  }
}




</script>

<style>

</style>
