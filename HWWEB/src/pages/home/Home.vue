<template>
    <div id="home">
        <hello></hello>
        <i class="icon iconfont">&#xe600;</i>
    </div>
</template>

<script>
import Hello from '../../components/Hello';
import {t1, t2} from '../../assets/js/test';

t1();
t2();

export default {
    name: 'home',
    components: {
        Hello
    }
};
</script>

<style lang="stylus">
@import '../../assets/css/test';
@import '../../assets/css/mixin';

#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  a {
      color: #ff0;
      width: rem(16);
  }
}
</style>
