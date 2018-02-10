<template>
  <div>
    <input
      type="file"
      class="no-print"
      multiple
      @change="onFileChange"/>

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
import CardComponent from './CardComponent';

export default {
  name: 'LandingComponent',
  components: {
    CardComponent,
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.loadFiles(files);
    },
    handleFile(file, callback) {
      const reader = new FileReader();
      reader.onload = e => callback(e.target.result);
      reader.readAsText(file);
    },
    getValueFromDom(dom, tag) {
      return dom.querySelector(tag).textContent;
    },
    loadFiles(files) {
      Array.from(files)
        .forEach((file) => {
          this.handleFile(file, (e) => {
            const dom = this.parseXml(e);
            const card = {
              summary: this.getValueFromDom(dom, 'summary'),
              number: this.getValueFromDom(dom, 'key').split('-')[1],
              priority: this.getValueFromDom(dom, 'priority'),
              description: this.getValueFromDom(dom, 'item description'),
              reporter: this.getValueFromDom(dom, 'reporter'),
              date: this.getValueFromDom(dom, 'created'),
              release: this.getValueFromDom(dom, 'fixVersion'),
              epic: '-',
              storyPoints: '',
            };
            this.cards.push(card);
          });
        });
    },
    parseXml(xml) {
      let dom = null;
      if (window.DOMParser) {
        try {
          dom = (new DOMParser()).parseFromString(xml, 'text/xml');
        } catch (e) {
          dom = null;
        }
      } else {
        // todo: handle this properly
        alert('cannot parse xml string');
      }
      return dom;
    },
  },
  data() {
    return {
      cards: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media print {
  .page {
    page-break-after: always;
  }
  .no-print, .no-print * {
    display: none !important;
  }
}
</style>
