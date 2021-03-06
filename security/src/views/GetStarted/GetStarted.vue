<template>
  <div
    class="bx--grid bx--grid--full-width landing-page"
    style="padding-left: 0rem; padding-right: 0rem;"
  >
    <!-- Header -->
    <div
      class="bx--row landing-page__banner"
      style="padding-top: 4rem;padding-bottom: 4rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col-lg-16">
        <h1
          class="landing-page__heading"
          style="font-size:3rem;line-height: normal;"
        >Get Started - Set up the Sample Application</h1>
      </div>
    </div>

    <!-- Introduction -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Introduction</h1>
              <p class="landing-page__p">At this point the code is run locally which means you need a JVM and Maven. For the web application you also need yarn. In this setup, Keycloak is installed on a Red Hat OpenShift cluster on IBM Cloud.
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img class="landing-page__illo" src="../../assets/architecture-security-local.png" />
              <p class="landing-page__p"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 1 Create a OpenShift cluster -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >1. Create an OpenShift cluster, e.g. on the IBM Cloud</h1>
              <p
                class="landing-page__p"
              >The sample application runs on any Kubernetes cluster. However the easiest way to get started it to use Minikube which the instructions on this page will cover.</p>
              <p
                class="landing-page__p"
              >In order to setup OpenShift on IBM Cloud, follow the steps in the documentation.</p>
              <p class="landing-page__p" style="padding-top: 15px;">
                <cv-button
                  style="padding-right: 12px;font-size: 20px;"
                  v-on:click="onSetupReHatOpenShiftClicked"
                >Setup instructions</cv-button>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 2 Login in a Terminal -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">2. Login in a Terminal</h1>
              <p
                class="landing-page__p"
              >Get the login command from the OpenShift Web Console, e.g.
              <cv-code-snippet>
$ oc login --token=OnMwHZ4FLgZnWdcxxxxxxxxxxxxxxx --server=https://c107-e.us-south.containers.cloud.ibm.com:30058              </cv-code-snippet>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 Clone project -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3; padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >3. Clone GitHub project</h1>
              <p
                class="landing-page__p"
              >              
              <cv-code-snippet>
$ git clone https://github.com/IBM/cloud-native-starter.git
$ cd security
$ ROOT_FOLDER=$(pwd)
             </cv-code-snippet>
             </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4 Install the Keycloak Operator -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >4. Install the Keycloak Operator</h1>
              <p
                class="landing-page__p"
              >Follow these steps to install the operator via the OpenShift Web Console <cv-link
                  style="font-size: inherit;"
                  href="https://www.keycloak.org/getting-started/getting-started-operator-openshift"
                >(Documentation)</cv-link>.<br>Alternatively you can install it programmatically:
              <cv-code-snippet>
$ oc new-project keycloak
$ oc create -f keycloak-operator.yaml
              </cv-code-snippet>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5 Create a Keycloak Cluster -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3; padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >5. Create a Keycloak Cluster</h1>
              <p
                class="landing-page__p"
              >You can create the Keycloak cluster either in the OpenShift Web Console or programmatically:
              <cv-code-snippet>
$ oc create -f keycloak.yaml
$ oc get keycloak/example-keycloak -o jsonpath='{.status.ready}'
              </cv-code-snippet>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6 Get the admin password and Keycloak URLs -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >6. Get the admin password and Keycloak URLs</h1>
              <p
                class="landing-page__p"
              >
              Get admin password:
              <cv-code-snippet>
$ cd $ROOT_FOLDER/IKS
$ bash oc-get-admin-password.sh
              </cv-code-snippet>
              Get Keycloak URLs:
              <cv-code-snippet>
$ cd $ROOT_FOLDER/IKS
$ bash oc-get-keycloak-urls.sh
              </cv-code-snippet>
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7 Import realm in Keycloak -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3; padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >7. Import realm in Keycloak</h1>
              <p
                class="landing-page__p"
              >
             Open the Keycloak console and log in as admin. Then import <cv-link
                  style="font-size: inherit;"
                  href="https://github.com/IBM/cloud-native-starter/blob/master/security/IKS/quarkus-realm.json"
                >quarkus-realm.json</cv-link>. Check the  <cv-link
                  style="font-size: inherit;"
                  href="https://github.com/IBM/cloud-native-starter/blob/master/security/KEYCLOAK-SETUP.md"
                >setup Keycloak documentation</cv-link> for how to import the realm.
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 8 Configure articles-secure -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >8. Configure articles-secure</h1>
              <p
                class="landing-page__p"
              >
             Insert your the auth-server-url URL of your Keycloak instance in <cv-link
                  style="font-size: inherit;"
                  href="https://github.com/IBM/cloud-native-starter/blob/master/security/articles-secure/src/main/resources/application.properties"
                >application.properties</cv-link>. Therefore you use the Keycloak URL of the output in your terminal.
                <cv-code-snippet>
Keycloak [auth-server-url]: https://YOUR_URL/auth/realms/quarkus
                </cv-code-snippet>
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 9 Configure web-api-secure -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3; padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >9. Configure web-api-secure</h1>
              <p
                class="landing-page__p"
              >
             Insert your the auth-server-url URL you know from above in <cv-link
                  style="font-size: inherit;"
                  href="https://github.com/IBM/cloud-native-starter/blob/master/security/web-api-secure/src/main/resources/application.properties"
                >application.properties</cv-link>.
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 10 Configure web-app -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >10. Configure web-app</h1>
              <p
                class="landing-page__p"
              >
              Now insert the Keycloak URL `Keycloak URL`/auth from the output of your terminal session in <cv-link
                  style="font-size: inherit;"
                  href="https://github.com/IBM/cloud-native-starter/blob/master/security/web-app/src/main.js"
                >main.js</cv-link>.
                <cv-code-snippet>
urls = {
  api: 'http://localhost:8081/',
  login: 'https://YOUR_URL/auth' // insert your http or https://[KeycloakURL]/auth
}
                </cv-code-snippet>
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 11 Run web-app -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3; padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >11. Run web-app</h1>
              <p
                class="landing-page__p"
              >
              Run first terminal (on port 8080).
                <cv-code-snippet>
$ cd security/web-app
$ yarn install
$ yarn serve
                </cv-code-snippet>
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 12  Run web-api -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >12. Run web-api</h1>
              <p
                class="landing-page__p"
              >
              Run first terminal (on port 8080):
                <cv-code-snippet>
$ cd security/web-api-secure
$ mvn clean package quarkus:dev
                </cv-code-snippet>
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 13 Run articles-secure -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3; padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >13. Run articles-secure</h1>
              <p
                class="landing-page__p"
              >
              Run third terminal (on port 8082):
                <cv-code-snippet>
$ cd security/articles-secure
$ mvn clean package quarkus:dev
                </cv-code-snippet>
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 14 Open Web App -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >14. Open Web App</h1>
              <p
                class="landing-page__p"
              >
              Open a browser and log in with the test user: alice, alice
              <cv-code-snippet>
http://localhost:8080
                </cv-code-snippet>
              </p>      
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What's next? -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3; padding-top: 3rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <img class="landing-page__illo" src="../../assets/next.png" />
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">What's next?</h1>
              <p
                class="landing-page__p"
              >Choose how you prefer to learn more about Cloud Native Starter.</p>

              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/capabilities"
                    >Learn about the capabilities</router-link>
                  </cv-list-item>
                  <!-- Exclude 
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/talks"
                    >Watch recorded talks</router-link>
                  </cv-list-item>
                  -->
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/blogs"
                    >Read blogs</router-link>
                  </cv-list-item>
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/workshops"
                    >Get your hands dirty with workshops</router-link>
                  </cv-list-item>
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/about"
                    >Contact the Cloud Native Starter developers</router-link>
                  </cv-list-item>
                </cv-list>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-8 bx--col-lg-14">
              <cv-link
                style="font-size: inherit;"
                href="https://github.com/IBM/cloud-native-starter/tree/master/security"
              >Repo on GitHub</cv-link> |
              <cv-link
                style="font-size: inherit;"
                href="https://www.ibm.com/privacy/us/en/"
              >IBM Privacy Statement</cv-link> |
              <cv-link
                style="font-size: inherit;"
                href="https://www.ibm.com/legal/us/en/"
              >Terms of Use</cv-link> |
              <cv-link
                style="font-size: inherit;"
                href="https://www.ibm.com/legal"
              >Imprint / Impressum</cv-link> |
              <cv-link
                style="font-size: inherit;"
                href="https://www.ibm.com/de-de/about?lnk=flg"
              >Impressum (German)</cv-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetStarted',
  created() {},
  methods: {
    onGithubClicked() {
      window.open('https://github.com/IBM/cloud-native-starter/tree/master/security', '_blank');
    },
    onSetupReHatOpenShiftClicked() {
      window.open(
        'https://cloud.ibm.com/kubernetes/catalog/create?platformType=openshift',
        '_blank'
      );
    },
    onGetStartedClicked() {
      this.$router.push('get-started');
    },
    onInstallDockerClicked() {
      window.open('https://docs.docker.com/install/', '_blank');
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import './../carbon-overrides';
@import './../mixins';

.landing-page__illo {
  max-width: 100%;
}

.cv-feedback-button  {
 display:none }
ol,
ul {
  list-style-type: circle;
  padding-left: 20px;
}
.landing-page__banner {
  padding-top: $spacing-05;
  padding-bottom: $spacing-07 * 4;
  @include landing-page-background;
}

.landing-page__heading {
  @include carbon--type-style('productive-heading-05');
}

.landing-page__r2 {
  margin-top: rem(-40px);
}

.landing-page__tab-content {
  padding-top: $layout-05;
  padding-bottom: $layout-05;
}

.landing-page__subheading {
  @include carbon--type-style('productive-heading-03');
  @include carbon--font-weight('semibold');
}

.landing-page__p {
  @include carbon--type-style('productive-heading-03');
  margin-top: $spacing-06;
  margin-bottom: $spacing-08;

  @include carbon--breakpoint-between((320px + 1), md) {
    max-width: 75%;
  }
}

.landing-page__r3 {
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;
  @include landing-page-background;
}

.landing-page__label {
  @include carbon--type-style('heading-01');
}

.code {
    background-color: #eee;
    border-radius: 3px;
    font-family: courier, monospace;
    padding: 0 3px;
}
</style>
