<script>
  import { mapGetters, mapActions } from 'vuex'
import ThvButton from '@/components/Shared/Button'
import successImage from '../../../assets/images/thrivaling.png'

  export default {
    name: 'Success',
    components: {
      ThvButton
    },
    computed: {
      ...mapGetters('survey', { name: 'getName', goals: 'getGoals', diet: 'getDiet', dob: 'getDob' }),
      successImage () {
        return successImage
      }
    },
    methods: {
      ...mapActions('survey', { reset: 'reset' }),
      submit () {
        this.reset()
        this.$router.push('/name')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__success align-center">
        <img class="survey-questions__success-img" :src="successImage" />
        <div class="spacer sp__top--xs"></div>
        <h1>All done!</h1>
        <div class="spacer sp__top--xs"></div>
        <p>Thank you for completing the survey. The following results have been submitted:</p>
        <div class="spacer sp__top--sm"></div>
        <div class="survey-questions__success-summary">
            <div class="survey-questions__sucess-summary-field">
              <div class="survey-questions__success-summary-heading">
                Name
              </div>
              <div class="survey-questions__success-summary-value">
                {{ name }}
              </div>
            </div>
            <div class="spacer sp__top--xs"></div>
            <div class="survey-questions__sucess-summary-field">
              <div class="survey-questions__success-summary-heading">
                Goals
              </div>
              <div class="survey-questions__success-summary-value">
                {{ goals.join(', ') }}
              </div>
            </div>
            <div class="spacer sp__top--xs"></div>
            <div class="survey-questions__sucess-summary-field">
              <div class="survey-questions__success-summary-heading">
                Diet
              </div>
              <div class="survey-questions__success-summary-value">
                {{ diet }}
              </div>
            </div>
            <div class="spacer sp__top--xs"></div>
            <div class="survey-questions__sucess-summary-field">
              <div class="survey-questions__success-summary-heading">
                DOB
              </div>
              <div class="survey-questions__success-summary-value">
                {{ new Date(dob).toLocaleDateString('en-GB') }}
              </div>
            </div>
        </div>
        <div class="spacer sp__top--sm"></div>
        <thv-button element="button" size="large" @click="submit">Start over</thv-button>
      </div>
    </div>
  </div>
</template>

<style lang="css">
  .survey-questions__success-img {
    width: 150px;
    height: 150px;
  }
  .survey-questions__success-summary {
    padding: 30px 0 30 30px;
  }
  .survey-questions__success-summary-heading {
    color: #99A2BF;
    font-size: 14px;
    line-height: 21px;
  }
  .survey-questions__success-summary-value {
    color: #3D4250;
    font-size: 16px;
    line-height: 24px;
  }
  .survey-questions__success-button {
    width: 202px;
    height: 46px;
    border-radius: .25rem;
    background: #3ECADD;
  }

</style>