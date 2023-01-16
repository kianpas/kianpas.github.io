<template>
  <header>
    <img src="../../assets/logo.png" alt="logo" />
    <nav>
      <ul id="menuList" v-show="!mobile">
        <router-link class="link" to="/">HOME</router-link>
        <router-link class="link" to="/about">ABOUT</router-link>
        <router-link class="link" to="/project">PROJECT</router-link>
        <router-link class="link" to="/roadMap">ROAD MAP</router-link>
        <!-- <router-link class="link" to="/">MUSIC</router-link> -->
        <!-- <li><a href="#signin">SIGN IN</a></li> -->
        <!-- <router-link class="link" to="/">CONTACT</router-link> -->
      </ul>
      <div class="dimm"></div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobile: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 820) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss">
header {
  display: flex;
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: 0.5s ease;
  // justify-content: space-evenly;

  img {
    height: 15px;
    margin: auto 20px;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;

    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .link {
        margin: 5px 10px 0 10px;
        z-index: 1;
        text-decoration: none;
      }
    }
  }
}
</style>
