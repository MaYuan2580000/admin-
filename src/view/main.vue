<template>
      <div id="app">
    <myheader></myheader>
    <section style="display:flex; flex:1;">
      <div style="background:#333;">
      <slidle @collapse="slidleCollapse"></slidle>
      </div>
      <article  :style="{width:'calc(100vw - '+leftW+'px)'}" style="padding:10px; box-sizing:border-box">
        <bread></bread>
        <router-view></router-view>
      </article>
    </section>
  </div>
</template>
<script>
import { myheader, slidle, bread} from "@/components";
export default {

  data() {
    return {
       leftW:201, 
    
    };
  },

  components: {
    myheader,
    slidle,
    bread
  },
  methods:{
    slidleCollapse(val){
        this.leftW = val?65:201;
    }
  }
};
</script>