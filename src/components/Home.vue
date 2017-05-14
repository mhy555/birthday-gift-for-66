<template>
  <div class="home">
    <div class="slot main">
      <div class="text-container">
        <div class="text">
          Happy Birthday!!
        </div>
        <div class="date">
          2017.6.7
        </div>
      </div>
      <div class="arrow">

      </div>
    </div>
    <div class="slot memory">

    </div>
    <div class="slot photo">

    </div>
    <div class="mail-container">
      <div class="write-mail">

      </div>
      <div class="mail-box">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home {
  height: 100%;
  width: 100%;
  .slot.main {
    height: 100%;
    width: 100%;
    background-color: #6ffb6f;
    text-align: center;
    .text-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: fit-content;
      width: -moz-fit-content;
      width: -webkit-fit-content;
      animation: bounceIn 0.5s;
      .text {
        font-size: 82px;
      }
      .date {
        font-size: 52px;
        margin-left: 300px;
      }
    }
  }
  @keyframes bounceIn {
    from, 20%, 40%, 60%, 80%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale3d(.2, .2, .2);
    }

    20% {
      transform: translate(-50%, -50%) scale3d(1.3, 1.3, 1.3);
    }

    40% {
      transform: translate(-50%, -50%) scale3d(.9, .9, .9);
    }

    60% {
      opacity: 1;
      transform: translate(-50%, -50%) scale3d(1.4, 1.4, 1.4);
    }

    80% {
      transform: translate(-50%, -50%) scale3d(.97, .97, .97);
    }

    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
    }
  }

  .bounceIn {
    animation-name: bounceIn;
  }
}
</style>
