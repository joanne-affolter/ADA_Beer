<template>
<div>
    <!--Title with image-->
    <v-card class="mb-6" color="primary">
        <v-img
            height="200"
            width="100%"
            src="@/assets/images/front4.jpg"
        ></v-img>

        <v-card-text class="d-flex align-center mt-5 text-h5 white--text font-weight-black">
                Leading breweries in the 3 recommended states
        </v-card-text>
    </v-card>

    <!-- Introduction -->
    <v-card class="mb-6 my-8">
        <v-container>
            <v-row class="ma-0 pa-0">
              <v-col cols="9" sm="9">
                <v-card-text class="text-subtitle-2 font-weight-bold">
                    <span class="font-weight-semibold text-m my-6 primary--text">
                        Now that we have chosen 3 potential states where our client could set up his brewery, let's determine <strong>who are the potential competitors of our client in each of these states.</strong> To do this, we will use 3 criteria and find which breweries :
                    </span>
                    <v-timeline dense class="timeline-custom-dense timeline-custom-dots mt-6">

                        <v-timeline-item small color="primary">
                            <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-semibold me-1">
                                Are the <strong>most popular</strong> with the <strong>highest number of ratings</strong>
                            </h4>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item small color="primary">
                            <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-semibold me-1">
                                Have been established in the area for a long time with the <strong>longest period since the first rating</strong>
                            </h4>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item small color="primary">
                            <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-semibold me-1">
                                Are the <strong>local breweries</strong> with the <strong>highest percentage of ratings</strong> within the state
                            </h4>
                            </div>
                        </v-timeline-item>

                        </v-timeline>

                        <div class="text-subtitle-2 font-weight-semibold my-6">
                            By examining these different criteria, we will <strong>assign scores to each brewery</strong> and then determine <strong>which ones are the strongest on the market</strong> and therefore <strong>which breweries represent the biggest competitors</strong> of our client.
                            <br><br>In parallel, we are going to <strong>compare the 3 states retained</strong> to finally <strong>retain one</strong> for the next part of our work.
                        </div>
                    </v-card-text>
              </v-col>

              <v-col cols="3" sm="3" >
                <div>
                  <v-img
                    height="80%"
                    width="121"
                    src="@/assets/images/3d-characters/launching-soon.png"
                    class="gamification-john-pose-2"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
        </v-container>
        </v-card>

    <!-- Number of ratings -->
    <v-card class="mb-6" color="primary" >
        <v-container>
            <v-row>
                <v-col cols="12" sm="12">
                    <v-card-text class="d-flex align-center mt-5 text-h5 white--text font-weight-black">
                            Which breweries are the most popular in each state ?
                    </v-card-text>
                </v-col>
            </v-row>
        </v-container>
    </v-card>


    <v-card>
        <v-card-title>Ratings per brewery</v-card-title>
          <v-tabs color="primary">

            <v-tab>Washington </v-tab>
            <v-tab>Virginia</v-tab>
            <v-tab>Massachusetts</v-tab>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-container><v-row align="center" justify="center">
                        <v-col cols="10" sm="10"><v-img src="@/assets/images/wash1.png"></v-img></v-col></v-row>
                    <v-row>
                        <v-card-text>
                        The 3 breweries with the highest number of comments dominate by far the other breweries in the top 10, and are the breweries to watch.
                        <strong> Yakima Brewing and Malting Co. </strong>
                        is far ahead of its competitors with
                        <strong> 1,627 ratings </strong>
                        , twice as many as the brewery just behind it.
                        </v-card-text>
                </v-row></v-container>
            </v-card-text>
            </v-card>
            </v-tab-item>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-container><v-row align="center" justify="center">
                        <v-col cols="10" sm="10"><v-img src="@/assets/images/vir1.png"></v-img></v-col></v-row>
                    <v-row>
                        <v-card-text>
                        The distribution of the
                        <strong> number of ratings is more uniform </strong>
                         among the breweries here. This is not surprising, as this is the state with the most breweries in the country (33 breweries) and therefore fewer market leaders like in Washington. Howewer, we can note that Blue & Gray Brewing Co. slightly dominates the market.
                        </v-card-text></v-row></v-container>
                </v-card-text>
            </v-card>
            </v-tab-item>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                <v-container><v-row align="center" justify="center">
                    <v-col cols="7"><v-img src="@/assets/images/m1.png"></v-img></v-col></v-row>
                <v-row>
                    <v-card-text>
                    The
                    <strong> top 3 breweries </strong>
                    here share
                    <strong> more than half of the total number of ratings of the 10 most popular breweries </strong>
                    , and are therefore the breweries to watch.
                </v-card-text></v-row></v-container>
                </v-card-text>
            </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>

    <v-card class="mb-6 my-6">
        <v-card-text class="text-subtitle-2">
            Following the analysis of the number of ratings per brewery for each state, we can observe that there are generally
            <strong> fewer ratings per brewery in Virginia : </strong>
            the
            <strong> most popular brewery </strong>
            has only
            <strong> 346 ratings </strong>
            , while this number is
            <strong> much higher in Massachusetts (1627) and Virginia (1493) </strong>
            . This means that there are fewer breweries dominating the market. The sector will be
            <strong> less competitive </strong>
            for our client, which is a positive point.
            <br><br>
            Let's continue to fill the table containing the scores determined through our analysis. We recommend the state of Virginia for this criterion since it is the state with the least number of popular competitors (high number of ratings).
        </v-card-text>
    </v-card>

    <!-- Number of years -->
    <v-card class="mb-6" color="primary" >
        <v-container>
            <v-row>
                <v-col cols="12" sm="12">
                    <v-card-text class="d-flex align-center mt-5 text-h5 white--text font-weight-black">
                        Which breweries are well-established in the market ?
                    </v-card-text>
                </v-col>
            </v-row>
        </v-container>
    </v-card>

    <v-card class="mb-6 my-8">
        <v-card-text class="font-weight-semibold">
            In this analysis, we will identify breweries that are <strong>well-established in the market</strong> and <strong>have a reputation for quality among consumers</strong>.
            <br><br>
            We will focus on breweries that have the most years of experience, as these are likely to have a strong presence in the market and be well-known by consumers. By identifying these breweries, we can better understand the competitive landscape and determine which ones may pose the greatest threat to our client's success.
        </v-card-text>
    </v-card>

    <v-card>
        <v-card-title>Number of years since first rating</v-card-title>
          <v-tabs color="primary">

            <v-tab>Washington </v-tab>
            <v-tab>Virginia</v-tab>
            <v-tab>Massachusetts</v-tab>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-container><v-row align="center" justify="center">
                        <v-col cols="10" sm="10"><v-img src="@/assets/images/w2.png"></v-img></v-col></v-row>
                    <v-row>
                        <v-card-text>
                        The oldest breweries in the comments have a significant amount of experience, with the first one having been in the area for 17 years and the second one for 16 years. The next three breweries have been in the area for 14 years. These breweries are well-established and <strong>may be considered institutions in Washington.</strong>
                        <br>
                        Additionally, the large number of established breweries in the area may make it more difficult for new breweries to gain a foothold, as consumers may be more inclined to visit established breweries out of habit. As such, these breweries
                        <strong> may pose a real threat to our client as potential competitors.</strong>
                    </v-card-text></v-row></v-container>
            </v-card-text>
            </v-card>
            </v-tab-item>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-container><v-row align="center" justify="center">
                        <v-col cols="8" sm="8"><v-img src="@/assets/images/v2.png"></v-img></v-col></v-row>
                    <v-row>
                        <v-card-text>
                        In Virginia, there is
                        <strong> a greater difference between long-established breweries and newer breweries </strong>
                        than there is in Washington. The top three breweries in Virginia have been in the reviews for 16, 14, and 13 years, respectively, while the 10th brewery has only been rated for 3 years. This indicates that
                        <strong> most of the breweries in Virginia are relatively new </strong>,
                        with only 5 of the 33 breweries having been in the comments for more than 7 years.
                        <br><br>
                        Despite having the largest number of potential competitors among the states we analyzed, Virginia also has
                        <strong> the highest score in terms of the evolution of the number of users over the years </strong>.
                        This suggests that
                        <strong> there may be more room for new breweries to succeed in Virginia </strong>
                        compared to Washington, and that our client may be able to find a place in the market more easily in this state.
                    </v-card-text></v-row></v-container>
                </v-card-text>
            </v-card>
            </v-tab-item>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                <v-container><v-row align="center" justify="center">
                    <v-col cols="7" sm="7"><v-img src="@/assets/images/m2.png"></v-img></v-col></v-row>
                <v-row>
                    <v-card-text>
                    In Massachusetts, 4 breweries are present in the comments since 15 years and dominate the other breweries in the top 10. Except for Gardner Ale House, the period since the first rating is twice as long as in the other breweries.
                    <br><br>
                    We find the same pattern as in Virginia, with only 5 breweries appearing in the comments for more than 10 years. <strong>These are the ones to watch, but the market is quite favorable for our client.</strong>
                </v-card-text></v-row></v-container>
                </v-card-text>
            </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>



    <v-card class="mb-6 my-8">
        <v-card-text class="font-weight-semibold">
            There are a large number of long-established breweries in Washington. We do not recommend this state because the competition could be tough. The number of institutions is lower in Virginia and Massachusetts, which seems to be more suitable for our client.        </v-card-text>
    </v-card>


    <!-- Number of locals -->
    <v-card class="mb-6" color="primary" >
        <v-container>
            <v-row>
                <v-col cols="10" sm="8">
                    <v-card-text class="d-flex align-center mt-5 text-h5 white--text font-weight-black">
                        Which are the local breweries ?
                    </v-card-text>
                </v-col>
            </v-row>
        </v-container>
    </v-card>

    <v-card>
        <v-card-title>Percentage of local ratings</v-card-title>
          <v-tabs color="primary">

            <v-tab>Washington </v-tab>
            <v-tab>Virginia</v-tab>
            <v-tab>Massachusetts</v-tab>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-container><v-row align="center" justify="center">
                        <v-col cols="8" sm="8"><v-img src="@/assets/images/w3.png"></v-img></v-col></v-row>
                    <v-row>
                        <v-card-text>
                        The percentage of local ratings is
                        <strong> very high </strong>
                        for these 10 breweries, ranging from 62% for Ghostfish Brewing Company to almost 95% for Top Rung Brewing Company. This suggests an audience in Washington with a preference for local beers, which is very interesting for our client.
                    </v-card-text></v-row>
                    </v-container>
                </v-card-text>
            </v-card>
            </v-tab-item>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-container><v-row align="center" justify="center">
                        <v-col cols="8" sm="8"><v-img src="@/assets/images/v3.png"></v-img></v-col></v-row>
                    <v-row>
                        <v-card-text>
                        The percentage of local ratings is
                        <strong> much lower </strong>
                        in Virginia than in Washington. In fact, only 61% of the ratings are local for the first brewery, which is 1% less than the last brewery in the top 10 of Washington.
                        <br><br>
                        However, the population in Virginia
                        <strong> seems to be more and more interested in local beers </strong>
                        as it has the highest score for the evolution of the percentage of local ratings. Our client could therefore position itself as a market leader with its brewery.
                      </v-card-text></v-row></v-container>
                </v-card-text>
            </v-card>
            </v-tab-item>

            <v-tab-item>
            <v-card flat>
                <v-card-text>
                <v-container><v-row align="center" justify="center">
                    <v-col cols="8" sm="8"><v-img src="@/assets/images/m3.png"></v-img></v-col></v-row>
                <v-row>
                    <v-card-text>
                    Similarly to Virginia,
                    <strong> the trend for local is less pronounced than in Washington. </strong>
                    Moreover, the percentage of local ratings is quite tight for the breweries in the top 10. Down the Road Beer Company still stands out among the other breweries.
                </v-card-text></v-row></v-container>
                </v-card-text>
            </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>

    <v-card class="mb-6 my-8">
        <v-card-text class="font-weight-semibold">
            Washington stands out from the other two states with a very high percentage of local ratings for the 10 breweries in the top 10. Even though these breweries are potential competitors, there is a very strong trend for local here and that is why we recommend this state.
        </v-card-text>
    </v-card>


    <!-- Results -->
    <v-card class="mb-6" color="primary">
        <v-img
            height="200"
            width="100%"
            src="@/assets/images/res_img.jpg"
        ></v-img>

        <v-card-text class="d-flex align-center mt-5 text-h5 white--text font-weight-black">
            Results
        </v-card-text>
    </v-card>

    <!-- Top 5 breweries -->
    <v-card class="mb-6" color="#ECEFF1">
      <v-container fill-height>
        <v-row>
          <v-card width="100%">
            <v-card-text>
              <span class="text-subtitle-1 font-weight-medium primary--text">
                Let's determine which breweries are leaders in each state according to the criteria studied : number of ratings, number of years since the first rating, percentage of local comments.
              </span>
            </v-card-text>
          </v-card>
        </v-row>

        <v-row>
            <v-card width="100%">
                <v-tabs color="primary">

                    <v-tab>Washington </v-tab>
                    <v-tab>Virginia</v-tab>
                    <v-tab>Massachusetts</v-tab>

                    <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-container>
                                <v-row align="center" justify="center">
                                <v-col cols="8" sm="8">
                                    <v-img src="@/assets/images/resw.png"></v-img>
                                </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                    </v-tab-item>

                    <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-container>
                                <v-row align="center" justify="center">
                                <v-col cols="8" sm="8">
                                    <v-img src="@/assets/images/resv.png"></v-img>
                                </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                    </v-tab-item>

                    <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-container>
                                <v-row align="center" justify="center">
                                <v-col cols="8" sm="8">
                                    <v-img src="@/assets/images/resm.png"></v-img>
                                </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                    </v-tab-item>
                </v-tabs>
            </v-card>

        </v-row>

      </v-container>
    </v-card>


    <!-- Scores -->
    <v-card class="mb-6" color="#ECEFF1">
      <v-container fill-height>
        <v-row>
          <v-card width="100%">
            <v-card-text color="primary">
              <span class="text-subtitle-1 font-weight-medium primary--text">
                Let's find the best state in which our client should locate its brewery among Washington, Virginia and Massachusetts.
              </span>
            </v-card-text>
          </v-card>
        </v-row>

        <v-row align="center" justify="center">
            <v-col cols="8" sm="8">
                <v-img src="@/assets/images/resbilan.png"></v-img>
            </v-col>
            <v-col cols="4" sm="4">
                <v-container>
                    <v-row>
                        <v-img src="@/assets/images/flag_virginia.png"></v-img>
                    </v-row>
                    <v-row>
                        <v-img src="@/assets/images/wash_pres.png"></v-img>
                    </v-row>
                    <v-row>
                        <v-img src="@/assets/images/flag_massachu.png"></v-img>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <v-row>
        <v-card class="mb-6 my-8">
        <v-container>
            <v-row class="ma-0 pa-0" align="center" justify="center">
              <v-col cols="9" sm="9">
                <v-card-text class="text-subtitle-2 font-weight-bold">
                    <span class=" text-l my-6 primary--text">
                        Virginia is the top state with a total score of 6, making it an attractive location for our client's brewery. There are several reasons why Virginia stands out as a favorable market:
                    </span>
                    <v-timeline dense class="timeline-custom-dense timeline-custom-dots mt-6">

                        <v-timeline-item small color="primary">
                            <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-semibold me-1">
                                The population in Virginia has shown a rapid increase in interest in beer in recent years, with a growing number of active consumers on beer review sites. This presents a strong opportunity for our client to tap into a receptive market.
                            </h4>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item small color="primary">
                            <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-semibold me-1">
                                Consumers in Virginia are increasingly turning to local beers, with a steady rise in the number of local ratings. With fewer local breweries than Washington, our client could potentially capture a significant market share with customers attracted to its local offerings.
                            </h4>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item small color="primary">
                            <div class="d-flex justify-space-between align-center flex-wrap">
                            <h4 class="font-weight-semibold me-1">
                                Despite being the state with the most potential competitors, none of these breweries dominate the market in Virginia. This means that our client may have an easier time gaining a foothold in the industry, as many of the breweries in this state are relatively new and have not been in the comments for more than 7 years.
                            </h4>
                            </div>
                        </v-timeline-item>

                        </v-timeline>

                    </v-card-text>
              </v-col>

              <v-col cols="3" sm="3" >
                <v-img
                contain
                height="160"
                width="160"
                class="greeting-card-trophy"
                src="@/assets/images/virginia.gif"
                ></v-img>
              </v-col>


            </v-row>
        </v-container>
        </v-card>

        </v-row>
    </v-container>
    </v-card>












</div>
</template>

<script>
</script>


<style lang="scss" scoped>
.gamification-tree-4,
.gamification-john-pose-2,
.gamification-tree {
  position: absolute;
}
.gamification-tree {
  top: 10%;
  right: 0;
}
.gamification-john-pose-2 {
  bottom: 0;
  right: 15%;
}
.gamification-tree-4 {
  bottom: 0;
  right: 30%;
}
.greeting-card {
  position: relative;
  .greeting-card-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .greeting-card-trophy {
    position: absolute;
    bottom: 10%;
    right: 8%;
  }
}
@media (max-width: 600px) {
  .gamification-tree,
  .gamification-tree-4 {
    display: none;
  }
  .gamification-john-pose-2 {
    right: 5%;
  }
}

@media (max-width: 500px) {
  .gamification-john-pose-2 {
    max-width: 70px;
  }
}

@media (max-width: 400px) {
  .greeting-title {
    font-size: 1.2rem !important;
  }
}

// rtl
.v-application {
  &.v-application--is-rtl {
    .gamification-john-pose-2 {
      right: initial;
      left: 15%;
    }
    .gamification-tree {
      right: initial;
      left: 0;
    }
    .gamification-tree-4 {
      left: 30%;
      right: initial;
    }
    .greeting-card-bg {
      right: initial;
      left: 0;
      transform: rotateY(180deg);
    }
    .greeting-card-trophy {
      left: 8%;
      right: initial;
    }
  }
}
</style>
