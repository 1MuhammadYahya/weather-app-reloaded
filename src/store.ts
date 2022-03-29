import { writable } from 'svelte/store';

export const weatherData = writable(null);
export const viewWidgets = writable(false);