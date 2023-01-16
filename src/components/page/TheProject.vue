<template>
  <div class="projects">
    <BaseProject
      v-for="(project, id) in projects"
      :key="id"
      :project="project"
    />
  </div>
</template>

<script>
import BaseProject from "../ui/BaseProject.vue";

export default {
  components: { BaseProject },
  data() {
    return {
      projects: [
        {
          id: "1p",
          imgSrc: require("../../assets/miniproject.jpg"),
          projectName: "미니프로젝트",
          projectLink: "https://github.com/kianpas/MiniProject",
        },
        {
          id: "2p",
          imgSrc: require("../../assets/homepage.jpg"),
          projectName: "홈페이지 프로젝트",
          projectLink: "https://github.com/kianpas/kianpas.github.io",
        },
        {
          id: "3p",
          projectName: "세미 프로젝트",
          imgSrc: require("../../assets/frog.jpg"),
          projectLink: "https://github.com/kianpas/frogmarket",
        },
        {
          id: "4p",
          projectName: "파이널 프로젝트",
          imgSrc: require("../../assets/final.png"),
          projectLink: "https://github.com/kianpas/final-pjt-upmu",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
}
</style>
