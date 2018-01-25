<template>
  <div class="screen-main">
    <p>HOME COMPONENT:</p>
    {{ $t('singlekey') }}
    <br>
    {{ $t('nested.key') }}
    <br><br>
    <button class="infoButton" :class="{ 'is-active': $i18n.locale === 'pt' }" v-on:click="$i18n.locale = 'pt'">pt</button>
    <button class="infoButton" :class="{ 'is-active': $i18n.locale === 'en' }" v-on:click="$i18n.locale = 'en'">en</button>
  </div>
</template>

<style src="./home.scss" lang="scss"></style>
