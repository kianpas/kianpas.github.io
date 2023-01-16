<template>
  <div class="project-cover">
    <div class="item">
      <img :src="project.imgSrc" alt="" />
      <div>
        <p>{{ project.projectName }}</p>
        <span class="link"><a :href="project.projectLink">View Detail</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.item {
  /* height: 50%;
  width: 50%; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.item img {
  height: 130px;
  width: 250px;
  margin: 10px;
}

.projects {
  display: flex;
  justify-content: center;
}

.project-cover {
  display: flex;
  justify-content: center;
  height: 300px;
  margin: 0 20px;
  padding: 10px;
  background-color: rgba(30, 30, 38, 0.9);
  border-radius: 10px;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
}

.item p {
  margin-bottom: 10px;
  text-align: center;
}

.item .link {
  padding: 10px;
  background-color: rgba(30, 30, 38, 0.9);
  transition: 0.5s;
}
.item .link a {
  padding: 5px;
  text-decoration: none;
  transition: 0.5s;
}

.item .link a:hover {
  background-color: #fff;
  color: #000;
}
</style>
