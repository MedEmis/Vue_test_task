<template>
  <div v-if="$attrs.body" class="post-card" :class="{ big: $attrs.big }">
    <router-link
      v-if="!$attrs.big"
      class="post-card__button"
      :to="{ name: 'postView', params: { post_id: $attrs.body.id } }"
      >Read all</router-link
    >
    <h3 class="post-card__title">{{ $attrs.body.title }}</h3>
    <p class="post-card__text">{{ $attrs.body.body }}</p>
  </div>
</template>

<script>
export default {
  name: "PostCardVue",
  data() {
    return {};
  },
};
</script>

<style  lang="scss">
.post-card {
  position: relative;
  min-height: 120px;
  height: auto;
  width: auto;
  margin: 20px;
  background: $post-bg;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  padding: $post-padding;
  &__title {
    color: $post-title;
    padding: 5px;
  }
  &__text {
    color: $post-text;
    padding: 10px;
    font-size: $post-font-size;
    text-align: left;
  }
  &__button {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 70px;
    height: 30px;
    cursor: pointer;
    border: none;
    text-decoration: none;
    line-height: 25px;
    border-bottom: 3px solid #555;
    border-radius: 0 10px 0 0;
    background: $post-button-bg;
    color: $post-button-color;
    &:active {
      border: none;
    }
  }
  &.big {
    &__title {
      color: $post-title;
      padding: 40px;
    }
    &__text {
      color: $post-text;
      padding: 10px;
      font-size: $post-font-size;
      text-align: left;
    }
  }
}
</style>