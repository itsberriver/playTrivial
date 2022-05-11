<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<section >
        <!--'category'--> 

        <div>
        <!-- tittle 'choose category' --> 
        <p class="flex justify-center pt-12  font-Guy  text-general text-6xl ">CHOOSE</p>
        <p class="flex justify-center font-Guy text-art text-6xl ">CATEGORY</p>
        </div>

        <div class="font-Mont font-extra-bold text-xl text-white p-5 space-y-5" id="buttons">
        <!-- buttons with colors and categories -->
                <button class="bg-sports box-border h-10 w-60 rounded-3xl font-Mont flex justify-center items-center  ">               
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M148.7 171.3L64.21 86.83c-28.39 32.16-48.9 71.38-58.3 114.8C19.41 205.4 33.34 208 48 208c38.34 0 73.1-14.1 100.7-36.7zm45.8.6l61.5 61.5L425.2 64.2C380 24.37 320.9 0 256 0c-7.4 0-14.8.492-22.9 1.113C237.8 16.15 240 31.8 240 48c0 47.19-17.2 90.4-45.5 123.9zM208 48c0-14.66-2.623-28.59-6.334-42.09C158.2 15.31 118.1 35.82 86.83 64.21l84.48 84.48C193.9 121.1 208 86.34 208 48zm-36.1 146.5C138.4 222.8 95.19 240 48 240c-16.2 0-31.85-2.236-46.89-6.031C.492 241.2 0 248.6 0 256c0 64.93 24.37 124 64.21 169.2L233.4 256l-61.5-61.5zm145.6 145.6L256 278.6L86.8 447.8C131.1 487.6 191.1 512 256 512c7.438 0 14.75-.492 22.03-1.113C274.2 495.8 272 480.2 272 464c0-47.2 17.2-90.4 45.5-123.9zm45.8.6l84.48 84.48c28.39-32.16 48.9-71.38 58.3-114.8C492.6 306.6 478.7 304 464 304c-38.3 0-73.1 14.1-100.7 36.7zm84.5-253.87L278.6 256l61.52 61.52C373.6 289.2 416.8 272 464 272c16.2 0 31.85 2.236 46.89 6.031C511.5 270.8 512 263.4 512 256c0-64.9-24.4-124.9-64.2-169.17zM304 464c0 14.66 2.623 28.59 6.334 42.09c43.46-9.4 82.67-29.91 114.8-58.3l-84.48-84.48C318.1 390.9 304 425.7 304 464z"/></svg>      
                        <a class="px-2" href="">sports</a>
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />
                </button>
                
                <button class="bg-art box-border h-10 w-60 rounded-3xl font-Mont flex justify-center items-center  ">               
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1792 1792">
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />
                        <path fill="#FDFFF3" d="M1615 0q70 0 122.5 46.5T1790 163q0 63-45 151q-332 629-465 752q-97 91-218 91q-126 0-216.5-92.5T755 845q0-128 92-212l638-579q59-54 130-54zM706 1034q39 76 106.5 130t150.5 76l1 71q4 213-129.5 347T486 1792q-123 0-218-46.5T115.5 1618T29 1435T0 1215q7 5 41 30t62 44.5t59 36.5t46 17q41 0 55-37q25-66 57.5-112.5t69.5-76t88-47.5t103-25.5t125-10.5z"/></svg>      
                        <a class="px-2" href="">art</a>
                </button>  
                
                <button class="bg-tv box-border h-10 w-60 rounded-3xl font-Mont flex justify-center items-center  ">               
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512">
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />
                        <path fill="currentColor" d="M512 448H127.1c-16.8 0-31.1 14.3-31.1 31.1s14.3 32.9 31.1 32.9h384c18.6 0 32.9-14.3 32.9-32s-14.3-32-32-32zM592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"/></svg>      
                        <a class="px-2" href="">tv</a>
                </button>

                <button class="bg-science box-border h-10 w-60 rounded-3xl font-Mont flex justify-center items-center  ">               
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />
                        <path fill="currentColor" d="M437.2 403.5L319.1 215V64h7.1c13.25 0 23.1-10.75 23.1-24V24c0-13.25-10.75-24-23.1-24H120c-13.2 0-23.99 10.75-23.99 24v16c0 13.25 10.75 24 23.1 24h7.1L128 215L10.8 403.5C-18.48 450.6 15.27 512 70.89 512h306.2c55.61 0 89.41-61.5 60.11-108.5zM137.1 320l48.15-77.63c4.55-5.07 6.65-11.57 6.65-18.37l.065-160h63.99l-.06 160c0 6.875 2.25 13.25 5.875 18.38L309.9 320H137.1z"/></svg>
                        <a class="px-2" href="">science</a>
                </button>

                <button class="bg-geography box-border h-10 w-60 rounded-3xl font-Mont flex justify-center items-center  ">               
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />
                        <path fill="currentColor" d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM57.71 192.1l9.36 17.3a64.042 64.042 0 0 0 38.03 29.8l57 16.5c18.1 4.9 29.9 20.6 29.9 38.5v39.9c0 11 6.2 21 16 25c9.8 5.8 16 15.8 16 26.8v39c0 15.6 14.9 26.8 29.9 22.5c16.2-4.6 28.6-18.3 32.7-33.7l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40.1l8.1-4.6c15-8.5 24.2-24.4 24.2-41.7v-8.2c0-12.8-5.1-25-14.1-34l-3.8-3.8c-9-9-21.3-15-34-15h-44c-10.2 0-21.2-2-30.9-7.5l-34.5-19.8c-4.3-2.4-7.6-6.4-9.1-11.1c-3.2-9.6 1.1-20 10.1-24.6l6-2.9c6.6-3.3 14.2-3.9 20.4-1.5l24.1 7.7c8.1 2.7 17.1-.4 21.9-7.5c4.7-7.1 4.2-16.4-1.2-22.9l-13.6-16.2c-10-12-9.9-29.5.3-41.3l15.7-18.38c8.8-10.27 10.2-24.96 3.5-36.7l-2.4-4.16c-4.3-.17-6.9-.26-10.4-.26c-92.9 0-171.6 60.9-198.29 144.1zm379.89-37.6L412 164.8c-15.7 6.3-23.8 23.7-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 21l29.2 7.2c1.2-9 1.8-18.2 1.8-27.5c0-36.8-9.6-71.4-26.4-101.5z"/>
                        </svg>      
                        <a class="px-2" href="">geography</a>
                </button>

                <button class="bg-history box-border h-10 w-60 rounded-3xl font-Mont flex justify-center items-center  ">               
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />
                        <path fill="currentColor" d="M240.1 4.216c9-5.621 21.9-5.621 31.8 0L443.6 102.4l3.5 1.6v.9l48.8 27.3c12.6 7.2 18.7 22 15 36c-3.7 14-16.4 23.8-31.8 23.8h-448c-13.61 0-26.305-9.8-30.029-23.8s2.453-28.8 15.049-36l46.98-27.3v-.9l5.27-1.6L240.1 4.216zM64 224h64v192h40V224h64v192h48V224h64v192h40V224h64v196.3c.6.3 1.2-.2 1.8 1.1l48 32c11.7 7.8 16.9 22.4 12.8 35.9c-4.1 13.5-16.5 22.7-30.6 22.7H32c-14.1 0-26.54-9.2-30.627-22.7c-4.086-13.5 1.144-28.1 12.877-35.9l48-32c.57-1.3 1.16-.8 1.75-1.1V224z"/></svg>      
                        <a class="px-2" href="">history</a>
                </button>

                <button class="bg-general box-border h-10 w-60 rounded-3xl font-Mont flex justify-center items-center  ">               
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />
                        <path fill="currentColor" d="m156.6 384.9l-30.9-31.8c-8.5-7.6-11.5-20-8.6-31.3c3-8.9 7-20.5 12.7-33.8H24c-8.62 0-16.586-4.6-20.854-12.1a23.961 23.961 0 0 1 .211-24.1l52.473-88.5c12.96-21.9 36.5-36.2 61.97-36.2H200c2.4-3.1 4.8-6.8 7.2-10.4C289.1-4.07 411.1-8.142 483.9 5.275c11.7 2.139 20.7 11.155 22.8 22.785c13.4 72.84 9.4 194.84-111.4 276.74c-3.5 2.4-8.2 4.8-11.3 6.3v83.1c0 25.5-13.4 49-35.3 62l-88.5 52.4c-7.4 4.4-16.6 4.5-24.1.3c-7.5-4.3-12.1-12.3-12.1-20.9V380.8c-14.1 4.8-26.4 8.9-35.7 11.9c-11.2 3.6-23.4.5-31.7-7.8zM384 167.1c22.1 0 40-17 40-40c0-21.2-17.9-40-40-40s-40 18.8-40 40c0 23 17.9 40 40 40z"/></svg>      
                        <a class="px-2" href="">general</a>
                </button>

                <button class="bg-random box-border h-10 w-60 rounded-3xl font-Mont flex justify-center items-center  ">               
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                        <rect 
                        x="0" y="0"
                        width="1792"
                        height="1792"
                        fill="none" 
                        stroke="none" />
                        <path fill="currentColor" d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.38-28.6-64-64-64zM128 384c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32s-14.4 32-32 32zm0-96c-17.6 0-32-14.4-32-32s14.38-32 32-32s32 14.38 32 32s-14.4 32-32 32zm0-96c-17.6 0-32-14.4-32-32s14.38-32 32-32s32 14.38 32 32s-14.4 32-32 32zm192 192c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32s-14.4 32-32 32zm0-96c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32s-14.4 32-32 32zm0-96c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32s-14.4 32-32 32z"/></svg>
                        <a class="px-2" href="">random</a>
                </button> 

                <div class=" m-8 text-2xl bg-white flex justify-center py-2 text-science box-border h-11 w-52 rounded-3xl font-Mont">
                <button>
                <RouterLink to="/question">CONFIRM</RouterLink>               
                        
                </button>
                </div>
        </div>


        <div class="flex text-white">
                
                <button class="flex p ">
                <RouterLink to="/mode">
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
</section>
</template>
