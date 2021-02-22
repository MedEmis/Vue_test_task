<template>
  <div v-if="$attrs.body" class="post-card" :class="{ big: $attrs.big }">
    <router-link
      v-if="!$attrs.big"
      class="post-card__button"
      :to="{ name: 'postView', params: { post_id: $attrs.body.id } }"
      >Read more</router-link
    >
    <h3 class="post-card__title">{{ $attrs.body.title }}</h3>
    <p class="post-card__text">{{ $attrs.body.body }}</p>
    <span class="post-card__id">id:{{ $attrs.body.id }}</span>
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
  margin: post(margin);
  margin-bottom: 20px;
  background: post(bg);
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  &__title {
    color: post(title);
    padding: 10px;
    background: post(title-bg);
  }
  &__text {
    padding: post(padding);
    color: post(text);
    font-size: post(font-size);
    text-align-last: left;
  }
  &__button {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 100px;
    height: 30px;
    cursor: pointer;
    border: none;
    text-decoration: none;
    line-height: 25px;
    border-bottom: 3px solid #555;
    background: post(button-bg);
    color: post(button-color);
    &:active {
      border: none;
    }
  }
  &__id {
    position: absolute;
    bottom: 0;
    left: 0;
    line-height: 30px;
    width: 50px;
    height: 30px;
    background: rgb(4, 92, 114);
    color: #fff;
    text-align: center;
  }
  &.big {
    font-size: 1.5rem;
    text-align: left;
  }
}
</style>