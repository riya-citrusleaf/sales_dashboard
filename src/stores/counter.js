import { defineStore } from "pinia";

export const useCounter = defineStore("counter", {
    state: () => ({
        count: 0
    }),

    actions: {
        increment(val = 1) {
            this.count += val;
        },

        waitAdd() {
            setTimeout(() => {
                this.count++;
            }, 2000);
        }
    },

    getters: {
        doubleCount: (state) => state.count * 2
    }
});