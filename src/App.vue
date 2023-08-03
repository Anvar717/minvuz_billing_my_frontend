<template>
  <div id="app">
    <!-- Loader -->
    <!-- <div id="preloader" v-if="loading">
      <div id="status">
        <div class="spinner"></div>
      </div>
    </div> -->
    <div class="loader d-flex align-items-center"  v-if="loading">
      <div class="spinner1" >
      <div class="spinner1 spinner2">
        <div class="spinner1 spinner3"></div>
      </div>   
    </div>
    </div>
    
    <router-view v-if="!loading" />
  </div>
</template>

<script>
import WebNotifyService from './services/webnotify.service'
export default {
  data() {
    return {
      loading: true
    };
  },
  created() {
    setTimeout(() => (this.loading = false), 600);
  },
  watch:{
    // $route(){
    //   this.loading = true
    //   setTimeout(() => (this.loading = false),600);
    //   if(!!localStorage.getItem('user_info')){
    //     WebNotifyService.GetUnReadMessagesCount().then(res => {
    //         this.$store.state.messageCount = res.data.result
    //     })
    //   }
      
    // }
  }
};
</script>
<style lang="scss">
.loader{
  width: 100%;
  height: 100vh !important;
  background-color: white;
}
.spinner1 {
  margin: auto;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #5168A0;
  border-bottom: none;
  border-left: none;
  animation: spin 4.5s infinite linear reverse;
  
    .spinner2 {
    margin: 25px auto;
    height: 200px;
    width: 200px;
    animation: spin 2s infinite linear;
    }
  
    .spinner3 {
    margin: 25px auto;
    height: 150px;
    width: 150px;
    animation: spin 1s infinite linear reverse;
    }
}

 @keyframes spin{
 
  100% {
    transform: rotate(360deg);
   }
}
</style>