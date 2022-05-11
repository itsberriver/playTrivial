<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>

    <div>         
        <p class="flex justify-center pt-12  font-Guy  text-general text-6xl ">Select</p>
        <p class="flex justify-center font-Guy text-art text-6xl ">Difficulty:</p>
    </div>

<div class="text-white ">
    

    <div class="flex justify-center space-x-5  ">       
    <button class="bg-science rounded-3xl  ">Normal</button>
    <button class="bg-science rounded-3xl ">Hard</button>
    <button class="bg-science rounded-3xl ">Expert</button>
    </div>



</div>

    <div class=" m-8 text-2xl bg-white flex justify-center py-2 text-science box-border h-11 w-52 rounded-3xl font-Mont">
        <button>
            <RouterLink to="/category">CONFIRM</RouterLink>  
        </button>
    </div>

            <div class="flex text-white">
                <button class="flex p ">
                <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />             
                        <path fill="currentColor" d="m77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160c6.2 6.3 14.4 9.4 22.6 9.4s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zm192.05 0l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160c6.15 6.3 14.35 9.4 22.55 9.4s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"/></svg>
                </RouterLink>
                </button>
            </div>

</template>