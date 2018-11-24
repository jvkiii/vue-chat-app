<template>
  <transition name="anim-view" appear>
    <div class="anim-view">
      <slot/>
    </div>
  </transition>
</template>


<script>
export default {
  name:'AnimView',
}
</script>


<style lang="scss">
  .anim-view {
    position:absolute;
    width:100%;
    opacity:1;
    transform: translateY(0);
    transition: transform 0.3s, opacity 0.3s;
  }
  
  .anim-view-enter, .anim-view-leave-to {
    opacity:0;
    transform:  translateY(10px);
  }
</style>

