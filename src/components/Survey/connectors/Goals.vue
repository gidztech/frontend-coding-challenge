<script>
  import { mapGetters, mapActions } from "vuex";
  import CheckButton from "@/components/Survey/components/CheckButton";
  import ThvButton from "@/components/Shared/Button";

  const MAX_NUMBER_OF_GOALS = 4

  export default {
    name: "Goals",
    components: {
      ThvButton,
      CheckButton
    },
    computed: {
      ...mapGetters('survey', { name: 'getName', selectedGoals: 'getGoals' }),
      goalLimitReached() {
        return this.selectedGoals.length === MAX_NUMBER_OF_GOALS
      },
      noGoalsSelected() {
        return this.selectedGoals.length === 0
      }
    },
    data() {
      return {
        goals: {
          improveEnergy: {
            name: "Energy"
          },
          improveFitness: {
            name: "Fitness"
          },
          improveLongTermHealth: {
            name: "Long-term health"
          },
          improveMood: {
            name: "Mood"
          },
          improveSleep: {
            name: "Sleep"
          },
          improveWeight: {
            name: "Weight"
          }
        }
      };
    },
    methods: {
      ...mapActions("survey", ["addGoals", "removeGoals"]),
      goalIsSelected(value) {
        return this.selectedGoals.includes(value)
      },
      handleGoalChange({ value, selected }) {
        if (selected) {
          if (!this.goalLimitReached) {
            this.addGoals(value)
          } else {
            window.alert(`You have already selected ${MAX_NUMBER_OF_GOALS} goals. Remove one to proceed`)
          }
        
        } else {
          this.removeGoals(value)
        }
      },
      submit() {
        if (!this.noGoalsSelected) {
          this.$router.push("/diet");
        } else {
          window.alert('You must select at least one goal')
        }
        
      },
      back() {
        this.$router.push("/name");
      }
    }
  };
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ name }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to four</p>
        <div class="spacer sp__top--sm"></div>
        <check-button
          v-for="(goal, key) in goals"
          :key="key"
          :value="key"
          :text="goal.name"
          :selected="goalIsSelected(key)"
          @change="handleGoalChange"
        ></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" @click="submit"
              >Next</thv-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
