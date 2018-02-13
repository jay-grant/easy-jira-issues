<template>
  <div class="card">

    <div class="top-bar">
      <div class="issue-summary">
        {{ cardData.summary }}
      </div>

      <div class="top-right-box">
        <div class="issue-number">
          {{ cardData.number }}
        </div>
        <div class="issue-priority">
          {{ cardData.priority }}
        </div>
      </div>
    </div>

    <div class="middle-bar">
      <div class="issue-description">
        <div v-html="cardData.description"/>
      </div>
    </div>

    <div class="bottom-bar">
      <div class="details-box">
        <div class="issue-detail">
          <!-- {{ cardData.epic }} -->
        </div>
        <div class="issue-detail">
          {{ cardData.release }}
        </div>
        <div class="issue-detail">
          {{ cardData.reporter }}
        </div>
        <div class="issue-detail">
          {{ cardData.date }}
        </div>
      </div>

      <div class="issue-story-points">
        {{ cardData.storyPoints }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    'card-data': Object,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">
$right-margin-size: 1.5in;
.card {
  padding: 0.1in;
  width: 7in;
  min-height: 4in;
  max-height: 6in;
  /* background-color: lightcoral; */
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin-bottom: 0.1in;
  border-style: dashed;
  border-width: 1pt;
  border-radius: 8pt;
}
.top-bar {
  /* background-color: lightpink; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.issue-summary {
  font-size: 20pt;
  font-weight: bold;
  border-width: 0;
  border-bottom-width: 1pt;
  border-style: solid;
  text-align: start;
  /* max-width: 5in; */
  padding-bottom: 0.1in;
  /* background: lightblue; */
}
.top-right-box {
  text-align: end;
  min-height: 0.8in;
  padding-left: 0.15in;
  background-color: white;
}
.issue-number {
  font-size: 52pt;
}
.issue-priority {
  font-size: 24pt;
  margin-right: 2pt;
}
.middle-bar {
  /* background-color: lightblue; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.issue-description {
  text-align: start;
  padding-inline-start: 0.1in;
  height: 3in;
  margin-right: $right-margin-size;
  font-size: 10pt;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  /* background: lightpink; */
}
.bottom-bar {
  /* background-color: lightyellow; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.details-box {
  flex-grow: 1;
  padding-top: 0.1in;
  font-size: 11pt;
  border-width: 0;
  border-top-width: 1pt;
  border-style: solid;
  text-align: start;
  max-width: 5in;
}
.issue-story-point {
  font-size: 24pt;
  width: 1in;
  text-align: end;
  background-color: white;
}
</style>

