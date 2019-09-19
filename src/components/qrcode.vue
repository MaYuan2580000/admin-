<template>
  <div id="qrcode">
    <div id="code"></div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import qrcode from "qrcode";
export default {
  data() {
    return {};
  },
  components: {
    qrcode
  },
  methods: {
    useqrcode() {
      var canvas = document.getElementById("canvas");
      qrcode.toCanvas(
        canvas,
        "https://blog.csdn.net/weixin_42890953/article/details/82776760",
        function(error) {
          if (error) console.error(error);
          console.log("QRCode success!");
        }
      );
    }
  },
  mounted() {
    this.useqrcode();
  }
};
</script>

<style>
</style>