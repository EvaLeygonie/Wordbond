<script>
import axios from "axios"
import ShowDetails from "../components/ShowDetails.vue"

  export default {
    components: {
      ShowDetails,
    },
    data() {
    return {
      drinks: [],
      drinkSearch: "",
      details: false,
      drinkId: "",
      selectedAlcohol: "",
      alcoholOptions: ["Gin", "Vodka", "Tequila", "Dry Vermouth", "Light Rum", "Dark Rum", "Whiskey", "Rum", "Scotch", "Brandy", "Triple sec",  "Sweet Vermouth", "Champagne", "Wine", "Beer"],
    }
  },
  methods: {
    async searchDrink() {
      try {
        let response
        if (this.drinkSearch.trim()) {
          response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.drinkSearch}`)
        } else if (this.selectedAlcohol) {
          response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.selectedAlcohol}`)
        } else {
          response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
        }

        let allDrinks = response.data.drinks || []

        if (this.drinkSearch.trim() && this.selectedAlcohol) {
          allDrinks = allDrinks.filter(drink => {
            for (let i = 0; i < 15; i++) {
              let ingredient = drink[`strIngredient${i}`]
              if (ingredient && ingredient.toLowerCase() === this.selectedAlcohol.toLowerCase()) {
                return true
              }
            }
            return false
          })
        }

        this.drinks = allDrinks.slice(0, 12)
        this.details= false
        this.drinkSearch = ""
      } catch (error) {
        console.error("Could not get drink!", error)
      }
    },
    showDetails(id) {
        this.details = true
        this.drinkId = id
    },
  },
  async created() {
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
      this.drinks = response.data.drinks.slice(0, 12)
    } catch (error) {
      console.error("Could not get drink list!", error)
    }
  }
}
</script>

<template>
  <div id="search_bar">
  <input v-model="drinkSearch" id="drink_name" placeholder="Drink name">
  <select v-model="selectedAlcohol" id="alcohol_filter">
    <option value="">Select Alcohol</option>
    <option v-for="option in alcoholOptions" :key="option" :value="option">{{ option }}</option>
  </select>
  <input type="submit" @click="searchDrink" id="search_button" value="Search">
  </div>

  <div v-if="details">
      <ShowDetails :drinkId="drinkId"></ShowDetails>
    </div>

  <div class="drinks-grid">
    <div class="drink-card" v-for="drink in drinks" :key="drink.idDrink">
      <h3>{{ drink.strDrink }}</h3>
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
      <button @click="showDetails(drink.idDrink)">See Recipe</button>
    </div>
  </div>
</template>

<style scoped>
  #search_bar{
    margin: 30px 0px;
    text-align: center;
    padding: 5px
  }

  #drink_name {
    padding: 5px 15px;
    background-color: rgba(252, 229, 202, 0.8);
    color: #1B1B1B;
    font-weight: 600;
    font-size: 1.1em;
    border:  none;
    border-radius: 15px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  #drink_name:focus {
  outline:  2px solid rgba(181, 130, 140, 0.7);
  }

  #alcohol_filter {
    margin-left: 10px;
    padding: 5px 15px;
    background-color: rgba(252, 229, 202, 0.8);
    border-radius: 10px;
    font-size: 1.1em;
    border:  none;
    border-radius: 15px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  #search_button {
    margin: 5px 10px;
    padding: 5px 15px;
    background-color: rgba(181, 130, 140, 0.7);
    color: #1B1B1B;
    font-weight: 600;
    font-size: 1.1em;
    border:  none;
    border-radius: 15px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .drinks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 30px 20px;
    gap: 15px;
  }

  .drink-card {
    text-align: center;
    border: 2px solid #C6DCBA;
    background:rgba(255, 205, 178, 0.5);
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
</style>
