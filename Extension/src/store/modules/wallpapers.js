import { getField, updateField } from "vuex-map-fields";

export default {
    namespaced: true,
    state: {
        source: 'featured', // collection, featured
        collections: "S7cHx-uehAo,41305491,8878770",
        featuredImages: [
            "g30P1zcOzXo", "x39cWh7xIYI",
            "VjfNJnJBWYA", 'ntBPI4OnXZ0',
            'TWok6xTnc9w', 'b_IcUohrtUI',
            '6F-uGWod7Xk', '59Al83Zjtf8',
            "JV78PVf3gGI", "Wd-bC5nM7pQ",
            "8NOpqulKiQw", "CKA5ViRKHRU",
        
        
        "w5WFYzOyx9w",
        ],
        currentWallpaper: null,
    },

    getters: {
        getField
    },

    mutations: {
        updateField
    }
}