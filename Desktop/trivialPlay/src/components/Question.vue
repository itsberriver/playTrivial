<script >
  import axios from 'axios'
export default {
    name: 'Inicio',
    data(){
        return{
            posts: []

        }
    },

    mounted() {
        let vue = this;
        axios.get
            ('https://opentdb.com/api.php?amount=1&category=25&difficulty=easy&type=multiple')
            
        .then (function (response){
            vue.posts = response.data
            console.log(vue.posts)

            
            
        })
    }

}
</script>

<template>

  <div class="flex flex-col justify-center text-white text-center ">
    <div class=" ">
      <h1 class="font-Guy mt-6  text-sm ">Trivueal Factória</h1>

    </div>

    <div class=" font-extra-bold mt-40 text-3xl "> 
      <!-- api question -->
      <h1 class="font-extrabold ">Who painted the biblical fresco The Creation of Adam?</h1>

    </div>

    <div class="flex flex-col justify-center space-y-5 text-xl  " >
    <!-- api answers -->
      <button class="bg-art rounded-full w-80 h-8 ">Rembrandt</button>
      <button class="bg-art rounded-full w-80 h-8">Leonardo Da Vinci</button>
      <button class="bg-art rounded-full w-80 h-8">Michelangelo</button>
      <button class="bg-art rounded-full w-80 h-8">Caravaggio</button>

    </div>

    <div class="py-5">

      <button class="bg-white rounded-full font-extra-bold text-science w-52 h-8">Next</button> 
    </div>
    <TheWelcome/>
  </div>
</template>

