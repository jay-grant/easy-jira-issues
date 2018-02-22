<template>
  <div>
    <h1>File Upload</h1>
    <p>Test file uploads to API on http://localhost:5000/api/values</p>
    <div class="button-group">
      <input
        type="file"
        class="no-print"
        multiple
        @change="onFileChange"/>
      <button v-on:click="testApi">
        TEST API
      </button>
      </div>
  </div>
</template>

<script>
import ApiService from '../../common/ApiService';

export default {
  name: 'LandingComponent',
  components: {
  },
  methods: {
    async testApi() {
      const response = await ApiService.post('values', {
        yeet: 'esketit',
        skrt: 'hELLO',
        god: 'help',
      });
      console.log(response);
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      console.log(files);
      ApiService.post('values', files);
      // this.loadFiles(files);
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
              date: this.getValueFromDom(dom, 'created').split(' ').slice(0, 4).join(' '),
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
.button-group * {
  display: block;
  margin-top: 4px;
  margin-left: 4px;
}
@media print {
  .page-break {
    page-break-after: always;
  }
  .no-print, .no-print * {
    display: none !important;
  }
}
</style>
