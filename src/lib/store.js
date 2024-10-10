import { writable } from 'svelte/store';
export const tarr = writable([...Array(10).keys()]) //[1,2,3,4]);