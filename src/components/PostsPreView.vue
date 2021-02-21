<template>
  <div class="infinity-list-wrapper">
    <div v-if="GET_INFINITE_POSTS" class="post-list">
      <div v-for="(body, id) in GET_INFINITE_POSTS" :key="id">
        <PostCardVue :body="body" />
      </div>
      <div
        v-if="GET_INFINITE_POSTS"
        class="visibilityChanged"
        v-observe-visibility="visibilityChanged"
      />
    </div>
    <WebLoaderVue v-if="GET_IS_POST_FETCHING" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WebLoaderVue from "./WebLoader.vue";
import PostCardVue from "./PostCard.vue";

export default {
  name: "Posts_PreView",
  components: { PostCardVue, WebLoaderVue },
  data() {
    return {
      page: 1,
      initial: 6,
      next: 3,
    };
  },

  mounted() {
    if (!this.GET_INFINITE_POSTS.length) {
      this.INFINITE_REQUEST([this.page, this.initial]);
    }
  },
  methods: {
    ...mapActions(["INFINITE_REQUEST"]),
    visibilityChanged(isVisible) {
      //visibility of bottom of the list
      if (!isVisible) return;
      if (isVisible && this.GET_INFINITE_POSTS?.length) {
        this.page++;
        this.INFINITE_REQUEST([this.page, this.next]);
      }
    },
  },
  computed: mapGetters(["GET_INFINITE_POSTS", "GET_IS_POST_FETCHING"]),
};
</script>

<style lang="scss">
.infinity-list-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.post-list {
  padding-bottom: 30px;
  height: auto;
}
.post-num {
  left: 20vw;
  top: 7vh;
  z-index: 15;
  font-size: 20px;
  color: #fff;
}
</style>