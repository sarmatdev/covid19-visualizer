<template>
  <div class="autocomplete" @blur="modal = false">
    <input
      class="input"
      type="text"
      autocomplete="off"
      v-model="country"
      placeholder="Type country"
      @focus="modal = true"
    />
    <div class="suggestions" v-if="filteredCountries && modal">
      <ul class="list">
        <li
          class="list__item"
          v-for="filteredCountry in filteredCountries"
          @click="setCountry(filteredCountry)"
        >
          {{ filteredCountry }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['countries'],
  data() {
    return {
      country: '',
      modal: false,
      filteredCountries: []
    };
  },
  mounted() {
    this.filterCountries();
  },
  methods: {
    filterCountries() {
      if (this.country.length == 0) {
        this.filteredCountries = this.countries;
      }
      this.filteredCountries = this.countries.filter(country => {
        return country.toLowerCase().startsWith(this.country.toLowerCase());
      });
    },
    setCountry(country) {
      this.country = country;
      this.modal = false;
      this.$store.dispatch('store/getDataByCountry', country);
    }
  },
  watch: {
    country() {
      this.filterCountries();
    }
  }
};
</script>

<style lang="scss">
.autocomplete {
  min-width: 20rem;
  width: 40vw;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.6);
  z-index: 10;
}
.input {
  background-color: #f2f2f2;
  border: 1px solid red;
  padding: 1rem;
  width: 100%;
  height: 3rem;
  font-size: 1.6rem;
  outline: none;
}

.suggestions {
  background-color: #5e5d5d;
  width: 100%;
}
.list {
  width: 100%;
  min-height: 0;
  max-height: 20rem;
  overflow-y: scroll;

  &__item {
    list-style: none;
    border-bottom: 1px solid red;
    padding: 0.5em;
    font-size: 1.4rem;

    &:last-child {
      border-bottom: 0;
    }

    &:hover {
      background-color: #404040;
      cursor: pointer;
    }
  }
}
</style>
