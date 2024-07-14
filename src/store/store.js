import { reactive } from "vue";

export const store = reactive({
  params: {
    total: 0,
    tip: 0,
    people: 0,
    remaining: 0,
  },
  people: [],
});

export function getGrandTotal() {
  return store.params.total * (store.params.tip / 100 + 1);
}
