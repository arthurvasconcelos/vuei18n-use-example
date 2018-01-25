<template>
  <div id="app" class="app">
    <p>MAIN APP:</p>
    {{ $t('singlekey') }}
    <br>
    {{ $t('nested.key') }}
    <br><br>
    <button class="infoButton" :class="{ 'is-active': $i18n.locale === 'pt' }" v-on:click="$i18n.locale = 'pt'">pt</button>
    <button class="infoButton" :class="{ 'is-active': $i18n.locale === 'en' }" v-on:click="$i18n.locale = 'en'">en</button>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<style lang="scss" src="./main.scss"></style>
