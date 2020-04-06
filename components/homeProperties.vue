<template>
  <div class>
    <h4 class="text-3xl text-center font-bold text-springblue leading-tight">Properties</h4>
    <div class="my-12 xl:flex">
      <div class="border xl:w-1/2 lg:flex items-center">
        <div class="lg:w-1/2">
          <img
            class="lg:h-104 h-56 w-full object-cover"
            src="https://i.imgur.com/PkOIsxh.jpg?1"
            alt
          />
        </div>
        <div class="lg:w-1/2 lg:h-104 p-6 lg:ml-4">
          <h4 class="text-2xl font-medium text-springblue leading-tight">Furnished</h4>
          <p class="my-8 text-black text-sm font-light">
            Extensive living rooms with executive furniture and an extended dining area with cozy
            atmosphere with a classy fridge and water dispenser, exxpansive and kitchen with cooker and microwave,
            Spacious bedrooms with airy bathrooms and balconies,
            Queen beds with quality linen, wardrobes, bedside lamps and
            a study desk.
          </p>
          <router-link to="/furnished">
            <button
              class="px-10 w-48 mx-auto py-3 text-lg font-medium border-2 text-springblue border-springgold hover:border-none hover:bg-springgold hover:text-white"
            >Learn More</button>
          </router-link>
        </div>
      </div>
      <div class="xl:ml-10 ml-0 mt-10 xl:mt-0 border xl:w-1/2 lg:flex items-center">
        <div class="lg:w-1/2">
          <img
            class="lg:h-104 h-56 w-full object-cover"
            src="https://i.imgur.com/JCyPbuJ.jpg?1"
            alt
          />
        </div>
        <div class="lg:w-1/2 lg:h-104 p-6 lg:ml-4">
          <h4 class="text-2xl font-medium text-springblue leading-tight">Rental</h4>
          <p
            class="my-8 text-black text-sm font-light"
          >Accessible by elevator and stairs, En-suite bedrooms with balconies, Full aluminum windows and sliding doors, Large, Modern and Spacious Kitchen, Spacious bedrooms with airy bathrooms and balconies</p>
          <router-link to="/to-let">
            <button
              class="px-10 w-48 mx-auto py-3 text-lg font-medium border-2 text-springblue border-springgold hover:border-none hover:bg-springgold hover:text-white"
            >Learn More</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>