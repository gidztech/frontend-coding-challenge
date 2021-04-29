<script>
  import { mapGetters } from 'vuex'
  import ProgressBar from '@/components/Shared/ProgressBar'
  import surveySteps from '../../../constants/survey-steps'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    },
    computed: {
      ...mapGetters('survey', { currentStep: 'getStep' }),
      surveySteps () {
        return surveySteps
      }
    },
  }
</script>

<template>  
  <div class="progress-bar-container">
  <progress-bar :currentStep='currentStep' :totalSteps='surveySteps.length'></progress-bar>
  </div>
</template>

<style lang="css">
  .progress-bar-container {
    display: flex;
    flex-wrap: nowrap;
    width: 80px;
    align-items: center;
  }

</style>
