import Vue from 'vue'
import { toNpNumber } from "@/utils/np-number";

export const FILTERS = {
    npNumber: (value) => {
        return toNpNumber(value);
    }
}

export const registerFilters = function () {
    Object.keys(FILTERS).forEach(key => {
        Vue.filter(key, FILTERS[key]);
    })
}