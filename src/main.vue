<template>
  <div id="app" class="app">
    <p>MAIN APP:</p>
    {{ $t('singlekey') }}
    <br>
    {{ $t('nested.key') }}

    <router-view :key="$route.path"></router-view>
  </div>
</template>

<style lang="scss" src="./main.scss"></style>
