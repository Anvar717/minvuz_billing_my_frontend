<script>
import Navbar from "@/components/navbar.vue";
import Service from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import InfoTab from "../components/infotab.vue";
import StatisticCount from "../components/statisticCount.vue";
import AccountService from '../services/account.service';
/**
 * Index-1
 */
export default {
  components: {
    Navbar,
    Service,
    Features,
    Pricing,
    Blog,
    Contact,
    Footer,
    InfoTab,
    StatisticCount,
  },
  data() {
    return {
      isToken: false,
      InfoModal: false,
    };
  },
  created() {
    this.isToken = localStorage.getItem("user_info");
    if(this.isToken){
      AccountService.SetUserLanguage({ languageId : 3 })
          .then((res) => {
            localStorage.setItem('locale','uz_latn')
          })
          .catch((error) => {
          });
    }
  },
  methods: {
    changeAlert() {
      // this.makeToast(this.$t("billinginfo"), "error");
      this.InfoModal = true;
    },
    makeToast(message, type) {
      var a = "";
      if (message.status == 500) {
        a = message.title;
      }
      if (message.status == 400) {
        var errors = Object.values(message.errors);
        var a = errors.map((el, item) => item + 1 + "." + el).join("\n");
      } else {
        a = message;
      }

      this.$toast.open({
        message: a,
        type: type,
        duration: 5000,
        dismissible: true,
      });
    },
  },
};
</script>

<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section class="hero-1-bg" id="home">
        <!-- <marquee style="color: red" behavior="" direction=""
          >{{ $t("Websiteintest") }}
        </marquee> -->
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-7">
              <h2
                style="color: #111e52"
                class="hero-1-title font-weight-bold text-shadow mb-4"
              >
                {{ $t("givechildfamily") }}
              </h2>
              <div class="w-100 mb-5 mb-lg-0">
                <!-- <p class="text-muted mb-5 pb-5 font-size-17">
                  {{ $t('needfamilyforchild') }}
                </p> -->
                <p class="pt-0 mt-0 d-flex" >
                  <!-- <span class="font-size-20 mr-2">🥳️</span>Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur that is fugit. -->
                  <b-row>
                    <b-col sm="12" md="12" lg="12">
                      <b-button
                    
                  class="mr-5 buttonEnterStyle"
                    v-if="!isToken"
                    variant="primary"
                    @click="$store.state.isOpenSidebar = true"
                  >
                    {{ $t("Login") }}
                  </b-button>
                  <!-- <b-button
                    variant="primary"
                    @click="$bvModal.show('InfoModal')"
                  >
                    {{ $t("Login") }}
                  </b-button> -->
                  <b-button
                
                  class="mr-5 buttonEnterStyle"
                    v-if="isToken"
                    variant="primary"
                    @click="$router.push({ name: 'Cabinet' })"
                  >
                    {{ $t("mycabinet") }}
                  </b-button>
                    </b-col>
                    <b-col sm="12" md="12" lg="12" class="mt-2">
                       <b-button
                    class="buttonEnterStyle"
                   target="_blank"
                    variant="primary"
                       href="https://youtu.be/Gx03DeWoWYs"
                  >
                    {{ $t("video") }}
                  </b-button>
                    </b-col>
                  </b-row>
                  
                  <b-modal
                    id="InfoModal"
                    size="lg"
                    :title="$t('Info')"
                    no-close-on-backdrop
                    hide-footer
                  >
                    <p>
                      {{ $t("billinginfo") }}
                    </p>
                  </b-modal>
                </p>
                <!-- <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Enter  email..." />
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                  </form>
                </div> -->
              </div>
            </div>
            <div class="col-lg-5 col-md-10">
              <div class="mt-1 mt-lg-0">
                <img
                  src="@/assets/images/Group8.png"
                  style="width: 120%"
                  alt
                  class="img-fluid d-block mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hero End -->
      <!-- <Service />
      <Features />
      <Pricing />
      <Blog />
      <Contact /> -->
      <info-tab />
      <!-- <statistic-count /> -->
      <Footer />
    </div>
  </div>
</template>
