import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MyNotes from "@/views/MyNotes.vue";
import AddNote from "@/views/forms/AddNote.vue";
import UpdateNote from "@/views/forms/UpdateNote.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MyNotes,
  },
  {
    path: "/addnote",
    name: "addnote",
    component: AddNote,
  },
  {
    path: "/updatenote/:id",
    name: "updatenote",
    component: UpdateNote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
