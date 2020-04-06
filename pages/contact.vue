<template>
  <div>
    <div>
      <div class="lg:w-1/2 lg:mt-10 mt-2 px-6 py-4 lg:p-0 max-w-8xl lg:mx-auto items-center">
        <h4 class="text-5xl font-bold text-springblue leading-tight">Contact Us</h4>
        <div class="lg:my-20 my-10">
          <form action>
            <div class="lg:flex">
              <div class="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >First Name</label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="w-full md:w-1/2 lg:ml-4">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >Last Name</label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >Email</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="mt-10">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="feedback"
              >Your Feedback</label>
              <textarea
                class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="feedback"
                type="textarea"
                placeholder="Feedback"
              ></textarea>
            </div>

            <button
              class="mt-10 px-10 w-48 mx-auto py-3 text-lg font-medium text-white bg-springblue hover:text-springgold hover:shadow-md"
            >Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  head: {
    title: "Contact Us | Springs Rental",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          " Located on Chaka Road with easy access to commercial, residential, educational, religious and recreational centers, Springs Rental Apartments offers the best level of contemporary living in the heart of Kilimani with these stunning furnished and rental apartments."
      }
    ],
    noscript: [{ innerHTML: "Body No Scripts", body: true }],
    script: []
  }
};
</script>

<style>
</style>