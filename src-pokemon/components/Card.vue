<script lang="ts" setup></script>

<template>
  <div class="card">
    <div class="title">
      <slot name="title"/>
    </div>
    <div class="content">
      <slot name="content"/>
    </div>
    <div class="desc">
      <slot name="desc"/>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 155px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 350px) {
  .card {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
  }
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;
}

.content {
  font-size: 1em;
  margin-bottom: 8px;
}

.desc {
  font-size: 0.875em;
  color: #666;
}


</style>