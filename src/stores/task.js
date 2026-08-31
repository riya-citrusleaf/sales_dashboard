import { defineStore } from "pinia";

export const useTask = defineStore("task", {
    state: () => ({
        task :"TASK 1"
        details: "details"
    }),

});
