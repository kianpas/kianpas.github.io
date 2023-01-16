<template>
  <article class="card">
    <img :src="roadMap.imgSrc" alt="" />
    <div class="info">
      <h1>{{ roadMap.level }}</h1>
      <p>{{ roadMap.content }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ["roadMap"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 500px;
  padding: 2rem 1rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in-out;
  @media (max-width: 820px) {
    height: 14rem;
    margin: 10px;
  }

  &:hover {
    width: 800px;
    @media (max-width: 820px) {
      width: 19em;
      height: 20rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(2, 39, 35, 0.9),
      rgb(2, 80, 56)
    );
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
  }

  &:hover::before {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .info {
    position: relative;
    top: -50px;
    z-index: 3;
    color: #fff;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s all;
  }

  &:hover .info {
    opacity: 1;
    transform: translateY(0px);
  }

  .info {
    h1 {
      margin: 0;
    }

    p {
      letter-spacing: 1px;
      font-size: 16px;
      margin-top: 8px;
      margin-bottom: 20px;
      max-width: 450px;
      font-weight: 300;
    }

    .btn {
      text-decoration: none;
      padding: 0.5rem 1rem;
      background: #fff;
      color: #000;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s ease-in-out;

      &:hover {
        box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
