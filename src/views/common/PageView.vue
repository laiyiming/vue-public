<template>
  <div
    class="page-view"
  >
    <div
      v-loading="loading"
      class="app-main"
    >
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppHeader from '@/components/AppHeader/index';

export default {
  name: 'PageView',
  components: {
    AppHeader,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      loading: state => state.pageLoading,
    }),
  },

  methods: {
  },
};
</script>
