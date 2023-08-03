<template>
  <div class="my-img">
    <Navbar />
    <b-overlay :show="Loading">
      <div class="container" style="margin-top: 100px">
        <div>
          <b-row>
            <b-col sm="12" lg="6">
              <h2
                @click="$router.go(-1)"
                style="cursor: pointer"
                class="backTextView"
              >
                <b-icon-chevron-left
                  style="cursor: pointer"
                ></b-icon-chevron-left>
                {{ $t("personaldata") }}
              </h2>
            </b-col>
          </b-row>
          <b-row v-if="!!EduInfo">
            <b-col sm="12" md="6"></b-col>
            <b-col sm="12" md="3" class="text-right">
              <b-button
                block
                @click="OpenSinxMyInfo()"
                variant="primary"
                class="text-center"
                :disabled="SincMyLoading"
                ><b-icon-arrow-clockwise
                  v-if="!SincMyLoading"
                  style="font-size: 35px"
                ></b-icon-arrow-clockwise
                ><b-spinner small v-if="SincMyLoading"></b-spinner
                ><span class="text-right">{{
                  $t("SincMyInfo")
                }}</span></b-button
              >
            </b-col>
            <b-col sm="12" md="3" class="text-right">
              <b-button
                block
                @click="SinxInfo()"
                variant="primary"
                class="text-center"
                :disabled="SincLoading"
                ><b-icon-arrow-clockwise
                  v-if="!SincLoading"
                  style="font-size: 35px"
                ></b-icon-arrow-clockwise
                ><b-spinner small v-if="SincLoading"></b-spinner
                ><span class="text-right">{{ $t("Sinc") }}</span></b-button
              >
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col sm="12" lg="3" class="mt-2">
              <!-- <div class="pricing-box rounded px-4 pt-4 pb-2"> -->
              <fieldset>
                <b-row>
                  <b-col sm="12" md="12" lg="12" class="textImgView">
                    <div class="image-container">
                      <b-img
                        thumbnail
                        fluid
                        style="width: 200px; height: 240px"
                        class="thumbnail ml-auto mr-auto"
                        :src="`data:image/png;base64,${Person.photo}`"
                      />
                    </div>
                  </b-col>
                </b-row>
              </fieldset>
              <!-- </div> -->
            </b-col>
            <b-col sm="12" lg="9">
              <fieldset class="mt-3">
                <b-row>
                  <b-col sm="12" md="6" lg="8" class="my-1">
                    <custom-label
                      :label="$t('student')"
                      :content="MyInfo.fullName"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('pinfl')"
                      :content="MyInfo.pinfl"
                    ></custom-label>
                  </b-col>
                </b-row>
              </fieldset>
              <fieldset class="mt-3">
                <b-row>
                  <b-col sm="12" md="6" lg="2" class="my-1">
                    <custom-label
                      :label="$t('PassportSeria')"
                      :content="Person.passportSeria"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('PassportNumber')"
                      :content="Person.passportNumber"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="3" class="my-1">
                    <custom-label
                      :label="$t('dateofbirth')"
                      :content="Person.birthDate"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="3" class="my-1">
                    <custom-label
                      :label="$t('gender')"
                      :content="Person.gender"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="mt-3 my-1">
                    <custom-label
                      :label="$t('PassportDate')"
                      :content="Person.passportDate"
                    ></custom-label>
                  </b-col>
                  <b-col
                    sm="12"
                    md="6"
                    lg="4"
                    v-if="!!Person.nationality"
                    class="mt-3 my-1"
                  >
                    <custom-label
                      :label="$t('nationality')"
                      :content="Person.nationality"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="mt-3 my-1">
                    <custom-label
                      :label="$t('phonenumber')"
                      :content="MyInfo.userName"
                    ></custom-label>
                  </b-col>
                </b-row>
              </fieldset>
            </b-col>
            <b-col
              sm="12"
              md="12"
              lg="12"
              v-if="!!EduInfo && !!EduInfo.organization"
            >
              <fieldset class="mt-3">
                <legend>{{ $t("eduinfo") }}</legend>
                <b-row>
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('OTM')"
                      :content="EduInfo.organization"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('faculty')"
                      :content="EduInfo.eduFaculty"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('speciality')"
                      :content="EduInfo.eduSpeciality"
                    ></custom-label>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('eduForm')"
                      :content="EduInfo.eduForm"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('eduType')"
                      :content="EduInfo.eduType"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('edulevel')"
                      :content="EduInfo.eduLevel"
                    ></custom-label>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('eduLanguage')"
                      :content="EduInfo.eduLanguage"
                    ></custom-label>
                  </b-col>
                  <b-col sm="12" md="6" lg="4" class="my-1">
                    <custom-label
                      :label="$t('hemisExternalId')"
                      :content="EduInfo.hemisExternalId"
                    ></custom-label>
                  </b-col>
                  <b-col
                    v-if="!!EduInfo.eduContractTypeName"
                    sm="12"
                    md="6"
                    lg="4"
                    class="my-1"
                  >
                    <custom-label
                      :label="$t('contractType')"
                      :content="EduInfo.eduContractTypeName"
                    ></custom-label>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col sm="12" md="10" lg="12">
                    <p style="color: red">*{{ $t("checkEdu") }}</p>
                  </b-col>
                </b-row>
              </fieldset>
            </b-col>
          </b-row>
          <b-row class="mt-4"></b-row>
        </div>
      </div>
      <b-modal
        v-model="MyInfoModal"
        size="md"
        hide-footer
        hide-header
        no-close-on-backdrop
        centered
      >
        <b-row>
          <b-col class="d-flex justify-content-between align-items-center">
            <span> {{ $t("SincMyInfo") }} </span>
            <!-- <img class="cursor-pointer"  src="/images/design/fill-close.svg" alt=""> -->
            <b-icon-x
              scale="2.5"
              style="cursor: pointer; z-index: 9"
              @click="CloseMyInfoModal"
            ></b-icon-x>
          </b-col>
        </b-row>
        <div>
          <b-row class="mt-3">
            <b-col md="12" sm="12">
              <custom-input
                v-model="MyInfo.pinfl"
                :placeholder="$t('12345678901234')"
                :disabled="true"
                :label="$t('pinfl')"
              ></custom-input>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col md="12" sm="12">
              <custom-datepicker
                @keyup="BindValue"
                :label="$t('passportDate')"
                placeholder="00.00.0000"
                v-model="MySicData.passportDate"
              >
              </custom-datepicker>
            </b-col>
          </b-row>
        </div>
        <b-row class="mt-3">
          <b-col>
            <!-- <custom-button v-if="!Restore.isRestore" @click.native="RestorePassword" block> <b-spinner v-if="RestoreLoading" small style="margin-right:8px"></b-spinner> {{ $t('Smskodloish') }} </custom-button> -->
            <b-button variant="primary" pill @click="SinxMyInfo" block>
              <b-spinner
                v-if="SincMyLoading"
                small
                style="margin-right: 8px"
              ></b-spinner>
              {{ $t("confirm") }}
            </b-button>
          </b-col>
        </b-row>
        <b-row> </b-row>
      </b-modal>
    </b-overlay>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import CustomSelect from "./components/CustomSelect.vue";
import CustomInput from "./components/CustomInput.vue";
import CustomDatepicker from "@/views/components/CustomDatepicker";
import CustomLabel from "./components/CustomLabel.vue";
import AccountService from "../services/account.service";
import { BIconChevronLeft, BIconArrowClockwise, BIconX, } from "bootstrap-vue";
export default {
  components: {
    Navbar,
    Footer,
    CustomSelect,
    CustomInput,
    CustomDatepicker,
    CustomLabel,
    BIconChevronLeft,
    BIconArrowClockwise,
    BIconX,
  },
  data() {
    return {
      MyInfo: {},
      Person: {},
      EduInfo: {},
      dtminfo: {},
      MySicData: {
        pinfl: "",
        passportDate: "",
      },
      SincMyLoading: false,
      SincLoading: false,
      MyInfoModal: false,
      ImgStudent: "",
      FiltPassport: "",
      lang: localStorage.getItem("locale") || "uz_latn",
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 175,
        height: 175,
        class: "m1",
      },
      Loading: false,
      SaveLoading: false,
    };
  },
  created() {
    this.Loading = true;
    this.Refresh();
  },
  methods: {
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
    BindValue(data) {
      this.MySicData.passportDate = data;
    },
    OpenSinxMyInfo() {
      this.MyInfoModal = true;
    },
    CloseMyInfoModal() {
      this.MyInfoModal = false;
      this.MySicData.passportDate = "";
    },
    Refresh() {
      AccountService.GetUserInfo(false)
        .then((res) => {
          this.MyInfo = res.data;
          this.Person = res.data.person;
          this.dtminfo = res.data.dtmInfo;
          this.Loading = false;
          if (res.data.eduInfo != undefined) {
            this.EduInfo = res.data.eduInfo;
          }
        })
        .catch((error) => {
          this.Loading = false;
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
        });
    },
    SinxMyInfo() {
       if (
        (this.MySicData.passportDate === "" ||
          this.MySicData.passportDate === 0 ||
          this.MySicData.passportDate === undefined ||
          this.MySicData.passportDate === null) ||
        this.MySicData.passportDate.split(".")[2] < 1991
      ) {
        this.makeToast(this.$t("enterfiltpassportDate"), "error");
        return false;
      }
      (this.SincMyLoading = true), (this.MySicData.pinfl = this.MyInfo.pinfl);
      AccountService.SyncFromGsp(this.MySicData)
        .then((res) => {
          this.Refresh();
          ((this.SincMyLoading = false));
          this.MyInfoModal = false;
            this.makeToast(this.$t("RefreshSuccess"), "success");
        })
        .catch((error) => {
          this.SincMyLoading = false;
          this.MyInfoModal = false;
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          // this.makeToast(error.response.data, "error");
        });
    },
    SinxInfo() {
      (this.SincLoading = true),
        AccountService.GetUserInfo(true)
          .then((res) => {
            (this.SincLoading = false), (this.MyInfo = res.data);
            this.Person = res.data.person;
            this.EduInfo = res.data.eduInfo;
            this.SincLoading = false;
          })
          .catch((error) => {
            this.SincLoading = false;
            if (error.response.data.status == 500) {
              this.makeToast(this.$t("errormessage500"), "error");
            } else {
              this.makeToast(error.response.data, "error");
            }
            // this.makeToast(error.response.data, "error");
          });
    },
  },
};
</script>

<style lang="scss">
//   .my-img{
//     min-height: 100vh;
//     background: rgb(2,0,36);
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,15,125,1) 0%, rgba(104,104,176,1) 0%, rgba(3,250,251,0.13489145658263302) 96%);
// }
.thumbnail {
  box-shadow: 0 10px 20px;
  transition: transform 0.5s;
}
.image-container {
  border-radius: 12px;
}

.thumbnail:hover {
  transform: scale(1.05);
}
</style>
