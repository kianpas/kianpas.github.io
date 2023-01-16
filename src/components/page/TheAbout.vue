<template>
  <section class="introduce">
    <!-- <div class="pic"></div> -->
    <article>
      <div class="about">
        <h1>ABOUT ME</h1>
        <h2>Wannabe Developer</h2>
        <p>
          현재 공부하고 있는 개발자 지망생 이운산입니다. <br />어렸을 때 작은
          상을 받은 계기로 개발자의 꿈을 꾸었으나 꿈은 꿈, 현실은 현실이라는
          생각에 개발의 꿈을 한켠에 미루어 두었습니다. 하지만 어느 순간 더 이상
          미루면 평생 후회할 것이라는 생각에 2020년 12월부터 본격적인 교육을
          받기 시작했습니다. <br /><br />물론 코드, 개발의 길은 쉬운 일이
          아니었습니다. 그러나 항상 무언가를 만들어내는 과정과 결과를 창출하는데
          큰 흥미를 느끼는 저에게 있어서 코딩은 결과를 만들어내기 위한 하나의
          즐거운 모험이라고 생각합니다. 이러한 마음을 언제나 가지고, 항상
          긍정적인 자세로 업무에 임할 수 있는 개발자가 되고자 합니다.
        </p>
      </div>
      <div class="progress">
        <h3>Current Progress</h3>
      </div>
      <div class="icon-panel">
        <div class="icon">
          <span>JAVA</span>
        </div>
        <div class="icon">
          <span>ORACLE</span>
        </div>
        <div class="icon">
          <span>HTML5</span>
        </div>
        <div class="icon">
          <span>CSS3</span>
        </div>
        <div class="icon">
          <span>JS</span>
        </div>
        <div class="icon">
          <span>jQuery</span>
        </div>
        <div class="icon">
          <span>SPRING</span>
        </div>
      </div>
      <p class="github">
        <i class="fab fa-github fa-1x"></i>
        <span class="link"
          ><a href="https://github.com/kianpas">GO TO GITHUB</a></span
        >
      </p>
      <p class="github">
        <i class="fas fa-portrait fa-1x"></i>
        <span class="link"
          ><a
            href="https://wood-bird-d9d.notion.site/2593947faddd44588573e2d92e6f0262"
            >GO TO NOTION</a
          ></span
        >
      </p>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.introduce {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-basis: 700px;
    margin: 0 20px;
  }
}

.pic {
  /* height: 30%; */
  margin: 15px;
}

.pic img {
  height: 250px;
}

.github {
  font-size: 1.2rem;
  margin-bottom: 1%;
}

.about {
  h1 {
    font-size: 2.5rem;
    margin: 10px;
  }

  h2 {
    margin: 10px;
  }
}
.introduce {
  a {
    text-decoration: none;
  }
  .progress {
    margin: 30px 0 0 10px;
  }
  .icon-panel {
    display: flex;
    margin: 30px auto;
    justify-content: space-evenly;
    @media (max-width: 820px) {
      flex-wrap: wrap;
      min-width: 50px;
      justify-content: center;
    }

    .icon {
      margin: 0 10px;
      font-size: 1.2rem;
      text-align: center;
    }
  }
  .link {
    position: relative;
    &::after {
      content: "";
      background-color: #fff;
      height: 1px;
      width: 60px;
      position: absolute;
      top: 50%;
      left: 110%;
      transform: translateY(-50%);
      transition: 0.5s ease;
    }
    &:hover:after {
      width: 100px;
    }
  }
}
</style>
