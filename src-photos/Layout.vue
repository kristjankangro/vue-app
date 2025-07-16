<script lang="ts" setup>

</script>

<template>
  <div class="layout">
    <header class="header">
      <slot name="title"/>
    </header>
    <div class="main">
      <aside class="side-menu">
        <slot name="side-menu"/>
      </aside>
      <section class="content">
        <slot name="content"/>
      </section>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
}

.header {
  padding: 1rem;
  text-align: left;
  height: 50px;
}

.main {
  display: flex;
  height: calc(100vh - 50px);
  flex: 1;
}

.side-menu {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 300px;
  background-color: #f0f0f0;
  padding: 1rem;
}
</style>