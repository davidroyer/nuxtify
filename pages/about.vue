<template>
  <v-layout>
    <v-flex>
      <h2>About Page With Some Sample Text</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam omnis tempore sit corrupti perferendis, ipsum excepturi quasi consectetur. Ea, consequatur numquam. Veniam animi nesciunt reiciendis ea quos dolorum voluptatibus.</p>
      <p>Aut dolores nihil pariatur nisi expedita dolorem magnam similique! Aut tempore accusantium atque molestias cupiditate, non vero nulla? Sit repellendus, debitis fugit omnis repudiandae odio dolorum deserunt temporibus voluptate aperiam?</p>
      <p>Repellat repudiandae earum molestias cumque nesciunt, ratione dolorum dignissimos sed, atque deserunt eveniet, animi laudantium ex aspernatur alias vel. Nam exercitationem minus aspernatur velit possimus animi eos veniam blanditiis eius!</p>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Ipsum dolores minus error assumenda soluta.</li>
        <li>Laudantium libero veritatis ullam inventore eum.</li>
      </ul>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  // fetch({ store, route, params, $createSeo }) {
  //   const metaInfo = $createSeo(route.name, route)
  //   // eslint-disable-next-line no-console
  //   console.log('headMeta', metaInfo)
  //   store.commit('setPageMeta', metaInfo)
  // },

  head() {
    // return this.$createSeo(this.$route.name)
  }
}
</script>
