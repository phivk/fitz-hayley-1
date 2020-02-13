<template>
  <div
    :class="[
      isRound ? 'br-100' : '',
      'bg-ink avatar-item ',
      bgClass(backgroundId)
    ]"
  ></div>
</template>

<script>
export default {
  name: "AvatarItem",
  props: {
    type: { type: String, default: "Other" },
    backgroundId: { type: String }
  },
  computed: {
    isRound: function() {
      return this.type === "Person";
    }
  },
  methods: {
    bgClass: function(backgroundId) {
      return "bg-" + backgroundId;
    }
  }
};
</script>

<style scoped>
.avatar-item {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center center;
}

.bg-hayley {
  background-image: url("../images/hayley.jpg");
}

.bg-flaxman {
  background-image: url("../images/flaxman.jpg");
}

.bg-blake {
  background-image: url("../images/blake.jpg");
}
</style>
