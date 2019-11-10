<template>
<div id="home-main">
  <div class="sth"></div>
  <div class="home" @mousemove="followMouse">
    <div class="figures">
      <div class="circle">
        <div class="small-triangle" :style="{ top: triangleTop + 'px', left: triangleLeft + 'px'}"></div>
      </div>
      <div class="square">
        <div class="small-circle" :style="{ top: circleTop + 'px', left: circleLeft + 'px'}"></div>
      </div>
      <div class="triangle">
        <div class="small-square" :style="{ top: squareTop + 'px', left: squareLeft + 'px'}"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      circleTop: 400,
      circleLeft: 200,
      squareTop: 400,
      squareLeft: 200,
      triangleTop: 400,
      triangleLeft: 200,
    };
  },
  methods: {
    followMouse(event) {
      const width = window.innerWidth;
      const top = event.clientY + document.documentElement.scrollTop;
      const left = event.clientX + document.documentElement.scrollLeft;

      this.triangleLeft = left - (width*0.8 - 300);
      this.triangleTop = top - 150;

      const y = top - 470;
      const x = left - (width - (0.5*width + 600 - 120));

      this.circleTop = y*Math.cos(45* Math.PI / 180) - x*Math.sin(45* Math.PI / 180)
      this.circleLeft = y*Math.sin(45* Math.PI / 180) + x*Math.cos(45* Math.PI / 180);
      
      this.squareTop = top - 450;
      this.squareLeft = left - (width*0.4 - 60);
    }
  },
};
</script>
<style scoped>
.sth {
  height: 2000px;
  width: 1px;
}
.home {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.figures {
    top: 150px;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    height: 2000px;
}

.circle {
  position: absolute;
  margin-left: -300px;
  top: 0px;
  width: 600px;
  height: 600px;
  overflow: hidden;
  background: #5220DD;
  border-radius: 100%;
  left: 80%;
  overflow: hidden;
}
.square {
  position: absolute;
  top: 320px;
  right: 50%;
  width: 600px;
  height: 600px;
  overflow: hidden;
  background: #17C6E9;
  margin-right: 120px;
  transform: rotate(45deg);
}
.triangle {
  position: absolute;
  top: 600px;
  left: 40%;
  width: 1000px;
  height: 740px;
  overflow: hidden;
  margin-left: 60px;
  border-color: transparent transparent #FFC647;
  border-style: solid;
  border-width: 0 501px 740px;
  transform: rotate(15deg) scale(0.8);
}
.small-triangle {
  position: absolute;
  border-color: transparent transparent #17C6E9;
  border-style: solid;
  border-width: 0 90px 150px;
  transform: translate(-50%, -50%) rotate(-20deg);
}
.small-square {
  position: absolute;
  width: 150px;
  height: 150px;
  background: #FFC647;
  transform: translate(-50%, -50%) rotate(15deg);
}
.small-circle {
  position: absolute;
  width: 220px;
  height: 220px;
  background: #17224D;
  border-radius: 100%;
}
</style>
