<template>
  <div>
    <Navbar />
    <b-overlay :show="Loading" style="min-height: calc(100vh - 460px)">
      <div class="container" style="margin-top: 100px">
        <b-row>
          <b-col sm="12" lg="6">
            <h2 @click="$router.go(-1)" style="cursor: pointer">
              <b-icon-chevron-left></b-icon-chevron-left>
              {{ $t("PaymentSchedule") }}
            </h2>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col sm="12">
            <div class="pricing-box rounded px-4 pt-4 pb-2">
              <!-- <b-row>
                <b-col sm="9"></b-col>
                <b-col sm="3" class="text-center">
                  <b-button
                    block
                    @click="PrintPaymentPlan()"
                    variant="primary"
                    class="text-center"
                    > <b-spinner small v-if="downloadloading"></b-spinner><b-icon-printer v-if="!downloadloading" style="font-size: 35px"></b-icon-printer
                    ><span class="text-right">{{ $t("Print") }}</span></b-button
                  >
                </b-col>
              </b-row> -->
              <b-row class="mt-3">
                <b-col sm="12">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        variant="outline-primary"
                        class="text-center"
                      >
                        <div class="row align-items-center">
                          <div class="col-lg-12">
                            <div class="custom-form mb-1 mb-lg-0">
                              <div id="message"></div>
                              <form name="contact-form" id="contact-form">
                                <div class="row">
                                  <div
                                    class="col-md-12"
                                    v-if="
                                      PaymentPlans.creditAmount != 0 ||
                                        PaymentPlans.debitAccount != 0
                                    "
                                  >
                                    <div class="form-group text-center">
                                      <label
                                        v-if="PaymentPlans.creditAmount != 0"
                                        for="name"
                                        class="mr-5"
                                        >{{ $t("creditAccount") }}</label
                                      >
                                      <label
                                        v-if="PaymentPlans.debitAccount != 0"
                                        for="name"
                                        class="mr-5"
                                        >{{ $t("debitAccount") }}</label
                                      >
                                      <p v-if="PaymentPlans.creditAmount != 0">
                                        {{
                                          $options.filters.currency(
                                            PaymentPlans.creditAmount,
                                            {
                                              symbol: "",
                                              fractionCount: 2,
                                            }
                                          )
                                        }}{{ $t("summa") }}
                                      </p>
                                      <p v-if="PaymentPlans.debitAccount != 0">
                                        {{
                                          $options.filters.currency(
                                            PaymentPlans.debitAccount,
                                            {
                                              symbol: "",
                                              fractionCount: 2,
                                            }
                                          )
                                        }}{{ $t("summa") }}
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-md-12">
                                    <div class="form-group text-center">
                                      <!-- <label for="name" class="mr-5">{{
                                        $t("contractPrice")
                                      }}</label> -->
                                      <p class=" font-size-15 text-center">
                                        {{ $t("contractPrice") }} :
                                        {{
                                          $options.filters.currency(
                                            PaymentPlans.contractPrice,
                                            {
                                              symbol: "",
                                              fractionCount: 2,
                                            }
                                          )
                                        }}{{ $t("summa") }}
                                      </p>
                                    </div>
                                  </div>

                                  <!-- <div
                                    :class="
                                      PaymentPlans.creditAmount != 0 ||
                                      PaymentPlans.debitAccount != 0
                                        ? 'col-md-12'
                                        : 'col-md-12'
                                    "
                                  >
                                    <div class="form-group text-center">
                                      <label for="name" class="mr-5">{{
                                        $t("totalPaidAmount")
                                      }}</label>
                                      <p>
                                        {{
                                          $options.filters.currency(
                                            PaymentPlans.totalPaidAmount,
                                            {
                                              symbol: "",
                                              fractionCount: 2,
                                            }
                                          )
                                        }}{{ $t("summa") }}
                                      </p>
                                    </div>
                                  </div> -->

                                  <!-- <div
                                    :class="
                                      PaymentPlans.creditAmount != 0 ||
                                      PaymentPlans.debitAccount != 0
                                        ? 'col-md-12'
                                        : 'col-md-12'
                                    "
                                  >
                                    <div class="form-group text-center">
                                      <label for="name" class="mr-5">{{
                                        $t("totalUnpaidAmount")
                                      }}</label>
                                      <p>
                                        {{
                                          $options.filters.currency(
                                            PaymentPlans.totalUnpaidAmount,
                                            {
                                              symbol: "",
                                              fractionCount: 2,
                                            }
                                          )
                                        }}{{ $t("summa") }}
                                      </p>
                                    </div>
                                  </div> -->
                                </div>
                              </form>
                            </div>
                            <b-row class="ml-1">
                              <b-col sm="12" md="12" lg="6" class="text-left">
                                <b-row>
                                  <b-col sm="12" md="12" lg="4">
                                    {{ $t("totalPaidAmount") }}:</b-col
                                  >
                                  <b-col
                                    sm="12"
                                    md="12"
                                    lg="8"
                                    class="text-left"
                                    >{{
                                      $options.filters.currency(
                                        PaymentPlans.totalPaidAmount,
                                        {
                                          symbol: "",
                                          fractionCount: 2,
                                        }
                                      )
                                    }}{{ $t("summa") }}
                                  </b-col>
                                </b-row>
                                <!-- <p>
                                  <span class="mr-2"
                                    >{{ $t("totalPaidAmount") }}:</span
                                  >
                                  {{
                                    $options.filters.currency(
                                      PaymentPlans.totalPaidAmount,
                                      {
                                        symbol: "",
                                        fractionCount: 2,
                                      }
                                    )
                                  }}{{ $t("summa") }}
                                </p> -->
                              </b-col>
                              <b-col sm="12" md="12" lg="6" class="text-left">
                                <b-row>
                                  <b-col sm="12" md="12" lg="6">
                                    {{ $t("totalUnpaidAmount") }}:
                                  </b-col>
                                  <b-col
                                    sm="12"
                                    md="12"
                                    lg="6"
                                    class="text-left"
                                    >{{
                                      $options.filters.currency(
                                        PaymentPlans.totalUnpaidAmount,
                                        {
                                          symbol: "",
                                          fractionCount: 2,
                                        }
                                      )
                                    }}{{ $t("summa") }}</b-col
                                  >
                                </b-row>
                                <!-- <p>
                                  <span class="mr-2"
                                    >{{ $t("totalUnpaidAmount") }}:</span
                                  >
                                  {{
                                    $options.filters.currency(
                                      PaymentPlans.totalUnpaidAmount,
                                      {
                                        symbol: "",
                                        fractionCount: 2,
                                      }
                                    )
                                  }}{{ $t("summa") }}
                                </p> -->
                              </b-col>
                            </b-row>
                          </div>
                        </div>
                      </b-button>
                    </b-card-header>
                  </b-card>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <h2 class="text-center">
              {{ $t("paymentgraph") }}
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            sm="12"
            md="12"
            v-for="(item, index) in MyPaymentPlan"
            :key="index"
            v-show="MyPaymentPlan.length > 0"
          >
            <div class="pricing-box rounded px-4  pb-2">
              <!-- <b-row>
                <b-col sm="9"></b-col>
              </b-row> -->
              <b-row>
                <b-col sm="12">
                  <b-card no-body class="cardStyleHover">
                    <!-- <b-card-header header-tag="header" role="tab"> -->
                    <!-- <b-button
                        block
                        variant="outline-primary"
                        class="text-left"
                      > -->

                    <b-row class="m-2">
                      <!-- <b-col sm="4">
                            <p class="my-4 font-size-15 text-left">
                              {{ $t("firstDedline") }} :
                              {{ item.firstLevelDedline }}
                            </p>
                          </b-col> -->
                      <b-col sm="4">
                        <p class="font-size-15 text-left">
                          <span style="font-weight:bold;font-size:18px"
                            >{{ index + 1 }}.</span
                          >
                          {{ $t("dedline") }} :
                          {{ item.dedline }}
                        </p>
                      </b-col>
                      <b-col sm="4">
                        <p class="font-size-15 text-left">
                          {{ $t("sum") }} :
                          {{
                            $options.filters.currency(item.amount, {
                              symbol: "",
                              fractionCount: 2,
                            })
                          }}{{ $t("summa") }}
                        </p>
                      </b-col>
                      <b-col sm="4">
                        <p class="font-size-15 text-left">
                          {{ $t("amountInPlan") }} :
                          {{
                            $options.filters.currency(item.amountInPlan, {
                              symbol: "",
                              fractionCount: 2,
                            })
                          }}{{ $t("summa") }}
                        </p>
                      </b-col>
                      <b-col sm="4">
                        <p class="font-size-15 text-left">
                          <b-badge
                            style="cursor: pointer"
                            variant="success"
                            class="btn-soft-primary pr-btn text-right"
                            size="sm"
                            >{{ $t("paidAmount") }} :
                            {{
                              $options.filters.currency(
                                item.paidAmountInCurrenctDeadline,
                                {
                                  symbol: "",
                                  fractionCount: 2,
                                }
                              )
                            }}{{ $t("summa") }}</b-badge
                          >
                        </p>
                      </b-col>
                      <b-col sm="4">
                        <p class="font-size-15 text-left">
                          <b-badge
                            style="cursor: pointer"
                            :variant="
                              item.daysToEnd == 0 ? 'danger' : 'warning'
                            "
                            class="btn-soft-primary pr-btn text-right"
                            size="sm"
                            >{{ $t("unpaidAmount") }} :
                            {{
                              $options.filters.currency(item.unpaidAmount, {
                                symbol: "",
                                fractionCount: 2,
                              })
                            }}{{ $t("summa") }}</b-badge
                          >
                        </p>
                      </b-col>
                      <b-col sm="4" class="text-center">
                        <b-button
                          style="width:70%"
                          size="sm"
                          block
                          @click="OpenHistory(item)"
                          variant="primary"
                          class="text-center"
                          >{{ $t("paymenthistory") }}</b-button
                        >
                      </b-col>
                    </b-row>
                    <!-- </b-button> -->
                    <!-- </b-card-header> -->
                  </b-card>
                </b-col>
              </b-row>

              <!-- <div class="mt-4">
                <div class="hero-bottom-img">
                  <img
                    v-if="item.statusid != 21"
                    src="@/assets/images/pricing-bottom-bg.png"
                    alt
                    class="img-fluid d-block mx-auto"
                  />
                  <img
                    v-if="item.statusid == 21"
                    src="@/assets/images/pricing_bottom_danger.png"
                    alt
                    class="img-fluid d-block mx-auto"
                  />
                </div>
              </div> -->
            </div>
          </b-col>
        </b-row>
        <b-sidebar
          no-header
          width="400px"
          shadow
          right
          v-model="historySidebar"
          bg-variant="white"
        >
          <div style="width: 100%; height: 100%">
            <div
              class="container-fluid w-100"
              style="
              height:800px;
                width: 100% !important;
                position: relative;
                overflow-y: auto;
              "
            >
              <b-row class="w-100">
                <b-col class="text-right close-icon">
                  <!-- <b-img @click="isOpenSidebar = false" src="/images/design/close.svg" /> -->
                  <b-icon-x
                    scale="2.5"
                    style="cursor: pointer; z-index: 9"
                    @click="historySidebar = false"
                  ></b-icon-x>
                </b-col>
              </b-row>
              <b-row class="p-0">
                <b-col>
                  <ul class="timeline">
                    <li v-for="(el, i) in paymenthistory" :key="i">
                      <b-row class="p-0">
                        <b-col class="float-left">
                          <b-row class="p-0">
                            <b-col class="float-left">
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  flex-sm-row flex-column
                                  mb-sm-0 mb-1
                                "
                              >
                                <h6>{{ el.studentName }}</h6>
                                <!-- <small class="timeline-item-time text-nowrap text-muted ml-1">{{ item.dateofcreated }}</small> -->
                              </div>
                              <p>
                                <b-badge :variant="getColor(el)">{{
                                  el.docDate
                                }}</b-badge>
                                -
                                <b-badge :variant="getColor(el)">
                                  {{
                                    $options.filters.currency(el.amount, {
                                      symbol: "",
                                      fractionCount: 2,
                                    })
                                  }}
                                </b-badge>
                                {{ el.message == null ? "" : "-" }}
                                {{ el.message }}
                              </p>
                              <p class="p-0 m-0">
                                {{ $t("detail") }} : {{ el.detail }}
                              </p>
                            </b-col>
                          </b-row>
                          <!-- <p class="p-0 m-0">{{ $t('reason') }} : </p> -->
                        </b-col>
                      </b-row>
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-sidebar>
      </div>
    </b-overlay>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import {
  BIconPlus,
  BIconPencil,
  BIconTrash,
  BIconXCircle,
  BIconCursor,
  BIconX,
  BIconEye,
  BIconCloudDownload,
  BIconChevronLeft,
  BIconClockHistory,
  BIconCheckCircle,
  BIconPrinter,
} from "bootstrap-vue";
import MyPaymentPlanService from "../services/mypaymentplan.service";
import CustomInput from "./components/CustomInput.vue";
import FileManageService from "../services/filemanage.service";
export default {
  components: {
    Navbar,
    BIconPlus,
    Footer,
    BIconPencil,
    BIconTrash,
    BIconXCircle,
    BIconCursor,
    CustomInput,
    BIconX,
    BIconEye,
    BIconCloudDownload,
    BIconChevronLeft,
    BIconClockHistory,
    BIconCheckCircle,
    BIconPrinter,
  },
  data() {
    return {
      lang: localStorage.getItem("locale") || "uz_latn",
      MyPaymentPlan: [],
      DeleteLoading: false,
      filter: {
        id: 0,
        message: "",
      },
      AcceptLoading: false,
      RejectLoading: false,
      downloadloading: false,
      AcceptLoading: false,
      Loading: false,
      historySidebar: false,
      History: [],
      paymenthistory: [],
      PaymentPlans: {},
      AdoptPermisConclusion: {
        docnumber: "",
        docdate: "",
        commenttext: "",
        projectfiletext: "",
      },
      dataFilter: {
        statusIds: [],
        // fromDocDate: "2022-03-24T06:19:14.058Z",
        // toDocDate: "2022-03-24T06:19:14.058Z",
        fromDocDate: "",
        toDocDate: "",
        eduYearId: 0,
        filters: {
          additionalProp1: {
            value: null,
            matchMode: null,
          },
          additionalProp2: {
            value: null,
            matchMode: null,
          },
          additionalProp3: {
            value: null,
            matchMode: null,
          },
        },
        search: null,
        sortBy: null,
        orderType: null,
        page: 1,
        pageSize: 20,
      },
    };
  },
  created() {
    this.Refresh();
  },
  methods: {
    DownloadFile(item) {
      this.downloadloading = true;
      FileManageService.Get(item.AdoptPermisConclusion.projectfileid)
        .then((res) => {
          this.downloadFile1(res, item.AdoptPermisConclusion);
          this.downloadloading = false;
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.downloadloading = false;
        });
    },
    getColor(item) {
      if (
        item.statusId == 24 ||
        item.statusId == 21 ||
        item.statusId == 15 ||
        item.statusId == 8
      ) {
        return "danger";
      }
      if (item.statusId == 12) {
        return "warning";
      } else {
        return "success";
      }
    },
    downloadFile1(response, item) {
      var blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", item.projectfiletext); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    OpenHistory(item) {
      this.paymenthistory = [];
      this.paymenthistory = item.paymentHistory;
      if (item.paymentHistory.length > 0) {
        this.historySidebar = true;
      } else {
        this.makeToast(this.$t("notpaymenthistory"), "error");
      }
    },
    Refresh() {
      this.Loading = true;
      MyPaymentPlanService.Get()
        .then((res) => {
          this.MyPaymentPlan = res.data.items;
          this.PaymentPlans = res.data;
          this.Loading = false;
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.makeToast(error.response.data, "error");
          }
          this.Loading = false;
          this.$router.push({ name: "Cabinet" });
        });
    },
    forceFileDownload(response, name) {
      var headers = response.headers;
      var blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name + ".xlsx"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    PrintPaymentPlan() {
      this.downloadloading = true;
      MyPaymentPlanService.GetReconciliationAct()
        .then((res) => {
          this.downloadloading = false;
          this.forceFileDownload(res, "ReconciliationAct");
        })
        .catch((error) => {
          // this.makeToast(error.response.data, "error");
          if (error.response.data.status == 500) {
            this.downloadloading = false;
            this.makeToast(this.$t("errormessage500"), "error");
          } else {
            this.downloadloading = false;
            this.makeToast(error.response.data, "error");
          }
        });
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

<style lang="scss">
.my-table-padding {
  tr {
    td,
    th {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .boxCard {
    position: relative;
    width: 100%;
    padding-right: 123px;
    padding-left: 115px;
  }
}
</style>
