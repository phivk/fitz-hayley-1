<template>
  <header
    :class="[isCollapsed ? 'pa4 flex' : '', 'w-100 fixed tc bg-green creme']"
  >
    <div :class="[isCollapsed ? 'pa0 absolute' : 'pa5']">
      <span :class="[isCollapsed ? 'f3' : 'f1', 'serif']"
        >Most Sacred Things</span
      >
    </div>
    <nav :class="[isCollapsed ? 'center' : '', 'f4 sans-serif']">
      <ul :class="[isCollapsed ? '' : 'pb4', 'center list ']">
        <li class="mr4 dib">
          <a href="/" class="creme link dim">Home</a>
        </li>
        <li class="mr4 dib">
          <a href="/correspondences" class="creme link dim">Correspondences</a>
        </li>
        <li class="mr4 dib">
          <a href="/entities" class="creme link dim">Entities</a>
        </li>
        <li class="dib">
          <a href="/about" class="creme link dim">About</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    isCollapsed: { type: Boolean, default: false }
  }
};
</script>
