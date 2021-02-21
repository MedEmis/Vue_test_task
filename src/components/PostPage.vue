<template>
  <div>
    <div v-if="GET_ONE_POST === undefined">404 Not Found</div>
    <PostCardVue :body="GET_ONE_POST" :big="true" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostCardVue from "./PostCard.vue";
export default {
  name: "PostPage",
  components: {
    PostCardVue,
  },
  mounted() {
    // request for chosen post from store
    this.REQUEST_POST(this.$route.params.post_id);
    //if no post => redirect to main page
    if (this.GET_ONE_POST === undefined) {
      this.$router.push("/");
    }
  },
  methods: { ...mapActions(["REQUEST_POST"]) },
  computed: { ...mapGetters(["GET_ONE_POST"]) },
};
</script>

<style lang="scss">
</style>