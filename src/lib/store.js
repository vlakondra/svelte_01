import { writable } from 'svelte/store';

export const tarr = writable([...Array(10).keys()]) //[1,2,3,4]);


//////-----Загрузка------//////////
export const data_loading = writable(false)

export default function () {

    async function getdata() {
        data_loading.set(true)
    }

    getdata()
    return 123
}