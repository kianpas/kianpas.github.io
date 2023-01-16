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
    </nav>
    <div class="dimm" v-show="mobileNav" @click="toggleMenu"></div>
    <box-icon
      name="menu"
      color="#ffffff"
      v-show="mobile"
      @click="toggleMenu"
    ></box-icon>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" to="/">HOME</router-link>
        <router-link class="link" to="/about">ABOUT</router-link>
        <router-link class="link" to="/project">PROJECT</router-link>
        <router-link class="link" to="/roadMap">ROAD MAP</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import "boxicons";
export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
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
    toggleMenu() {
      this.mobileNav = !this.mobileNav;
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
    }
  }

  box-icon {
    margin: 10px 10px 0 10px;
    z-index: 1;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
  }
  .link {
    margin: 5px 10px 0 10px;
    z-index: 1;
    text-decoration: none;
  }
}

.dimm {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: block;
  filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.7);
}

.mobile-nav-enter {
  transform: translateX(-250px);
}

.mobile-nav-enter-active {
  transition: all 0.5s ease-out;
}
.mobile-nav-leave-active {
  transition: all 0.5s ease;
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
