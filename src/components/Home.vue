<template>
  <div class="home" :class="'slot-active' + activeSlot" ref="home">
    <div class="mail-box" @click="checkMail">
      <div class="dot"></div>
    </div>
    <div class="slot main">
      <div class="text-container">
        <div class="text">
          Happy Birthday!!
        </div>
        <div class="date">
          2017.6.7
        </div>
      </div>
      <div class="down-arrow"></div>
    </div>
    <div class="slot memory">
      <div class="title">大一</div>
      <div class="content">
        <div class="paragraph">
          - 刚进学校的我去教室找你们汇合，你一头长长的黄毛低着头摆弄着手机，我当时内心充满恐惧。
        </div>
        <div class="paragraph">
          - 一直和你保持不远不近的距离，后来你失恋了，在我床下哭的像个傻逼，可能是你哭的太丑了，我开始陪你上课陪你吃饭给你失恋特权给你洗床单。
        </div>
        <div class="paragraph">
          - 后来我谈恋爱了，一瞬间感觉自己也终于是个大姑娘了，开始跟你讲起了小秘密，我们的关系越走越近。
        </div>
      </div>
      <div class="title">大二</div>
      <div class="content">
        <div class="paragraph">
          - 我劈腿失恋又劈腿，你始终都相信我是个好姑娘，一直陪伴着我理解着我，陪我上课陪我吃饭，陪我在机房看我哭成傻逼。
        </div>
        <div class="paragraph">
          - 我们一起自习，一起上课，你把我从天天打游戏看美剧的状态带进了天天泡机房刷手机玩电脑的状态，也是因为跟着你耳濡目染让我慢慢开始好好学习，我们通了一个又一个通宵，一起准备了一个又一个考试，我们终于要离开西浦了。
        </div>
        <div class="paragraph">
          - 一年又结束了，一觉醒来看见你已经清空了宿舍的杂物，终于要和满是飞蛾和屎味的宿舍说再见了，心里竟然有些舍不得。
        </div>
      </div>
      <div class="title">大三</div>
      <div class="content">
        <div class="paragraph">
          - 我们一起住进了flat，过起了看不见你人但听得见你放屁的生活，你在我快饿死的时候分给我吃你做的好吃的，救了我无数条命，我们一起放飞自我叫炸鸡吃，一起亡羊补牢去健身房。
        </div>
        <div class="paragraph">
          - 我们开始不常见到面，不能一起吃饭，一起上课，一起欢乐。但你心情不好的时候我一直会在。
        </div>
        <div class="paragraph">
          - 我找到了真爱开始不常跟你一起玩，你嘟着嘴生着气却还是选择原谅我，
        </div>
      </div>
      <div class="title">大四</div>
      <div class="content">
        <div class="paragraph">
          - 我们都开始变得更忙，你找到了实习，完成了一个人的旅行，又勇敢的决定去法国学习，我为你感到无比的自豪。
        </div>
        <div class="paragraph">
          - 我忙着写代码，学习，最后连滚带爬也算进了帝国，你知道消息比我还开心。
        </div>
        <div class="paragraph">
          - 一年很快又过去了，我们收拾了行李一起回了国，然后你去了法国，我留下来gap year，两情若是长久时，又岂在朝朝暮暮，像我们这种好朋友当然是要一辈子的呀。
        </div>
      </div>
      <div class="down-arrow"></div>
    </div>
    <div class="slot photo">
      <div class="last"><div class="arrow" @click="goPrePic"><</div></div>
      <div class="pic-box" :class="picture"></div>
      <div class="next"><div class="arrow" @click="goNextPic">></div></div>
      <div class="down-arrow"></div>
    </div>
    <div class="slot mail">
      <div class="mail-container">
        <div class="write-mail">
          写信功能，敬请期待。。。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var slotNum = 4;
var timeout;
export default {
  name: 'home',
  computed: {
    picture() {
      return 'picture-' + this.pictureNum;
    }
  },
  data () {
    return {
      prevScroll: -1,
      activeSlot: 0,
      pictureNum: 0,
      pictureLength: 17
    }
  },
  methods: {
    goPrePic() {
      clearTimeout(timeout);
      if (this.pictureNum === 0) {
        this.pictureNum = this.pictureLength - 1;
      } else {
        this.pictureNum--;
      }
      timeout = setTimeout(this.addPicNo, 5000);
    },
    goNextPic() {
      clearTimeout(timeout);
      if (this.pictureNum === this.pictureLength - 1) {
        this.pictureNum = 0;
      } else {
        this.pictureNum++;
      }
      timeout = setTimeout(this.addPicNo, 5000);
    },
    hlMouseScroll(e) {
      e.preventDefault();
      if (e.deltaY < 0) {
        console.log("scroll up");
        if (this.activeSlot > slotNum - 4) {
          // this.prevScroll = -1;
          this.activeSlot--;
          this.scrollThePage();
        }
      } else if (e.deltaY > 0) {
        console.log("scroll down");
        if (this.activeSlot < slotNum - 1) {
          // this.prevScroll = 1;
          this.activeSlot++;
          this.scrollThePage();
        }
      }
    },
    scrollThePage() {
      console.log('scrollThePage');
      var vm = this;
      if (document.addEventListener) {
        document.removeEventListener('DOMMouseScroll', this.hlMouseScroll, false);
      }
      window.onmousewheel = document.onmousewheel = '';
      this.$refs.home.style.transform = `translateY(${-25*this.activeSlot}%)`;
      this.$refs.home.addEventListener(this.transitionEnd(), transitionEnd);
      function transitionEnd() {
        vm.addScrollListener();
        vm.$refs.home.removeEventListener(this.transitionEnd, transitionEnd);
      }
    },
    addScrollListener() {
      console.log('addScrollListener');
      if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', this.hlMouseScroll, false);
      }//W3C
      window.onmousewheel = document.onmousewheel = this.hlMouseScroll;//IE/Opera/Chrome
    },
    transitionEnd(){
        var transEndEventNames = {
          WebkitTransition : 'webkitTransitionEnd',
          MozTransition    : 'transitionend',
          OTransition      : 'oTransitionEnd otransitionend',
          transition       : 'transitionend'
        }
        for(var name in transEndEventNames){
            if(typeof this.$refs.home.style[name] === "string"){
                return transEndEventNames[name]
            }
        }
    },
    addPicNo() {
      var self = this;
      clearTimeout(timeout);
      if (self.pictureNum !== self.pictureLength - 1) {
        self.pictureNum++;
      } else {
        self.pictureNum = 0;
      }
      timeout = setTimeout(this.addPicNo, 5000);
    },
    checkMail() {
      this.$router.push('mailList')
    }
  },
  mounted() {
    this.addScrollListener();
    timeout = setTimeout(this.addPicNo, 5000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home {
  height: 400%;
  width: 100%;
  transition: transform 0.3s;
  transform: translateY(0);
  // overflow: scroll;
  .mail-box {
    position: absolute;
    left: 20px;
    top: 50px;
    z-index: 999;
    width: 83px;
    height: 48px;
    background: url('../../assets/mail.png') no-repeat center;
    background-size: contain;
    cursor: pointer;
    .dot {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1000;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: red;
    }
  }
  .slot {
    position: relative;
    height: 25%;
    width: 100%;
    .down-arrow {
      position: absolute;
      bottom: 10px;
      width: 40.875px;
      height: 34.4375px;
      left: 50%;
      margin-left: -20.4375px;
      background: url('../../assets/down-arrow.png') no-repeat center;
      background-size: contain;
      animation: slideInDown 1s infinite;
    }
  }
  .slot.main {
    position: relative;
    background-color: #33ff99;
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
  .slot.memory {
    background: #00ff66;
    font-size: 16px;
    padding: 10px 250px;
    overflow: auto;
    .title {
      padding-top: 5px;

    }
    .content {
      padding: 6px;
      .paragraph {
        padding: 4px 0 4px 20px;
      }
    }
  }
  .slot.photo {
    background: #00ff33;
    position: relative;
    .last, .next {
      position: absolute;
      height: 100%;
      width: 10%;
      text-align: center;
      cursor: pointer;
    }
    .last {
      left: 0;
    }
    .next {
      right: 0;
    }
    .arrow {
      font-size: 32px;
      color: white;
      line-height: 1;
      position: relative;
      top: 50%;
      margin-top: -16px;
    }
    .pic-box {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -280px;
      margin-top: -290px;
      width: 560px;
      height: 580px;
      &.picture-0 {
        background: url('../../assets/pic-0.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-1 {
        background: url('../../assets/pic-1.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-2 {
        background: url('../../assets/pic-2.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-3 {
        background: url('../../assets/pic-3.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-4 {
        background: url('../../assets/pic-4.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-5 {
        background: url('../../assets/pic-5.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-6 {
        background: url('../../assets/pic-6.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-7 {
        background: url('../../assets/pic-7.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-8 {
        background: url('../../assets/pic-8.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-9 {
        background: url('../../assets/pic-9.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-10 {
        background: url('../../assets/pic-10.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-11 {
        background: url('../../assets/pic-11.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-12 {
        background: url('../../assets/pic-12.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-13 {
        background: url('../../assets/pic-13.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-14 {
        background: url('../../assets/pic-14.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-15 {
        background: url('../../assets/pic-15.jpg') no-repeat center;
        background-size: contain;
      }
      &.picture-16 {
        background: url('../../assets/pic-16.jpg') no-repeat center;
        background-size: contain;
      }
    }
  }
  .slot.mail {
    background: #00cc33;
    position: relative;
    .write-mail {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      color: #fff;
      line-height: 1;
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
  @keyframes typing {
    from {
      display: block;
      width: 0;
    }
    1% {
      border-right: .1em solid;
    }
    99% {
      border-right: .1em solid;
    }
    100% {
      border-right: 0;
    }
  }
  @keyframes blink-caret {
    50% {
      border-color: transparent;
    }
  }
  @keyframes fade-in {
      0% {opacity: 0;}/*初始状态 透明度为0*/
      40% {opacity: 0;}/*过渡状态 透明度为0*/
      100% {opacity: 1;}/*结束状态 透明度为1*/
  }
  @keyframes slideInDown {
    from {
      transform: translate3d(0, -70%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInDown {
    animation-name: slideInDown;
  }

  .bounceIn {
    animation-name: bounceIn;
  }
}
</style>
