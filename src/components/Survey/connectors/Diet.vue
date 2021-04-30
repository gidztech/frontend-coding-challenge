<script>
  import { mapGetters, mapActions } from 'vuex'
import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    computed: {
      ...mapGetters('survey', { selectedDiet: 'getDiet', currentStep: 'getStep' }),
      noDietSelected () {
        return this.selectedDiet === ''
      }
    },
    data () {
      return {
        diets: {
          no: {
            name: 'No'
          },
          coeliac: {
            name: 'Coeliac'
          },
          'low-carb, high-fat': {
            name: 'Low-carb, high-fat'
          },
          paleo: {
            name: 'Paleo'
          },
          pescatarian: {
            name: 'Pescatarian'
          },
          'plant-based': {
            name: 'Plant-based'
          },
          other: {
            name: 'Other'
          }
        }
      }
    },
    methods: {
      ...mapActions('survey', ['updateDiet', 'updateStep']),
      dietIsSelected (value) {
        return this.selectedDiet === value
      },
      handleDietChange ({ value, selected }) {
        this.updateDiet(selected ? value : '')
      },
      submit () {
        if (this.noDietSelected) {
          window.alert('You must select 1 diet')
        } else {
          this.updateStep(this.currentStep + 1)
          this.$router.push('/dob')
        }
      },
      back () {
        this.updateStep(this.currentStep - 1)
        this.$router.push('/goals')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__diet align-center">
        <h1>Do you follow a particular diet?</h1>
        <div class="spacer sp__top--sm"></div>
        <check-button 
          v-for="(diet, key) in diets" 
          :key="key" :text="diet.name" 
          :value="key"
          :selected="dietIsSelected(key)"
          @change="handleDietChange"
          >
        </check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" @click="submit">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
