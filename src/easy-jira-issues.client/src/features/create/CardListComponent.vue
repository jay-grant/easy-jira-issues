<template>
  <div>
    <div
      v-for="(card, index) in cards"
      :key="card.number"
    >
      <CardComponent :card-data="card"/>
      <div
        class="page-break"
        v-if="index % 2 === 1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardListComponent',
  props: {
    'cards-data': Array,
  },
  data() {
    return {
      cards: [],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
