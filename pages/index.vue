<template>
<div>
<navbar/> 
<!--Bulma Hero Full Screen-->
 <section class="hero  is-fullheight-with-navbar">
   <div class="hero-head">
  
   </div>
  <div class="hero-body">
    <div class="columns">
       <div class="column is-half">
           <p class="title is-1">Manages Your Office Work</p>
           <p class="subtitle ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure impedit sint recusandae placeat dicta ipsum dolore! Magni quam amet distinctio obcaecati adipisci unde quod sint, illo dolorem nostrum laboriosam! Ipsa a vitae quis reprehenderit, ipsam iusto similique ut nemo, nam cupiditate vel! Ipsum iure eligendi voluptatibus non ex sit!</p>
           <button class="button is-primary">Read More ..</button> 
       </div>
       <div class="column col-2">
        <!-- <template>
          <b-carousel :indicator-inside="false" class="carousel">
              <b-carousel-item v-for="(item, i) in 6" :key="i">
                  <span class="image">
                    <img :src="getImgUrl(i)">
                  </span>
              </b-carousel-item>
              <template slot="indicators" slot-scope="props">
                  <span class="al image">
                      <img :src="getImgUrl(props.i)" :title="props.i">
                  </span>
              </template>
          </b-carousel>
         </template>
      -->
       <img src="../assets/Saturn.png" />
       </div>
    </div>
  </div>
</section>    
</div>
</template>

<script>
import navbar from '../components/NavBar'
export default {
  components: {
    navbar
  },
  methods:{
    getImgUrl(value) {
          return `https://picsum.photos/id/43${value}/1230/500`
      }
  }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
.col-2{
  display: grid;
  place-items: center;
}
.columns{
  margin-left:1rem;
}
</style>
