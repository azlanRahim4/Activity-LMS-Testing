<template>
  <q-page class="bg-white text-primary font-sans">
    <!-- Navigation -->
    <div class="q-px-md q-py-lg" style="max-width: 1200px; margin: 0 auto">
      <div class="row items-center justify-between">
        <div class="text-h5 text-weight-bold tracking-tighter">
          TUTION<span class="text-accent">MANAGER</span>
        </div>
        <div class="gt-sm">
          <q-btn flat no-caps label="Features" class="text-weight-medium q-mr-sm" />
          <q-btn flat no-caps label="Solutions" class="text-weight-medium q-mr-sm" />
          <q-btn flat no-caps label="Pricing" class="text-weight-medium q-mr-sm" />
          <q-btn flat no-caps label="About" class="text-weight-medium" />
        </div>
        <div>
          <q-btn flat no-caps label="Log In" class="q-mr-sm text-weight-bold" to="/login" />
          <q-btn unelevated color="primary" text-color="white" no-caps label="Get Started" class="q-px-lg rounded-borders" to="/register" />
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="q-px-md q-pb-xl" style="max-width: 1200px; margin: 0 auto; min-height: 70vh;">
      <div class="row items-center q-col-gutter-xl full-height">
        <div class="col-12 col-md-6">
          <q-badge color="grey-2" text-color="primary" class="q-py-xs q-px-md q-mb-md text-weight-bold rounded-borders">
            #1 EDUCATION MANAGEMENT PLATFORM
          </q-badge>
          <h1 class="text-weight-bolder q-mt-none q-mb-md" style="font-size: 3.5rem; line-height: 1.1; letter-spacing: -1px;">
            Manage your <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-black to-grey-6" style="background: -webkit-linear-gradient(45deg, #000, #9e9e9e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Tuition Center</span>
            <br /> like a Pro.
          </h1>
          <p class="text-secondary q-mb-xl text-h6" style="max-width: 500px; line-height: 1.6;">
            The all-in-one solution to streamline attendance, fees, scheduling, and student progress. Simple, powerful, and effective.
          </p>
          <div class="row q-gutter-md">
            <q-btn unelevated color="primary" size="lg" no-caps label="Start Free Trial" class="q-px-xl rounded-borders" to="/register" />
            <q-btn outline color="primary" size="lg" no-caps label="Watch Demo" icon="play_circle_outline" class="q-px-lg rounded-borders" />
          </div>
          
          <div class="q-mt-xl row items-center text-grey-7">
            <div class="row items-center -space-x-2"> 
               <!-- Avatar placeholders using icons for simplicity or actual images if available -->
               <q-avatar size="32px" color="grey-3" text-color="primary" icon="person" font-size="16px" style="border: 2px solid white"/>
               <q-avatar size="32px" color="grey-4" text-color="primary" icon="person" font-size="16px" style="border: 2px solid white; margin-left: -10px;"/>
               <q-avatar size="32px" color="grey-5" text-color="primary" icon="person" font-size="16px" style="border: 2px solid white; margin-left: -10px;"/>
            </div>
            <div class="q-ml-md text-caption text-weight-medium">
              Trusted by 500+ Institutes
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 flex flex-center fade-in-up">
           <div class="relative-position full-width">
              <div class="absolute-center bg-grey-2 rounded-full" style="width: 80%; padding-bottom: 80%; border-radius: 50%; z-index: 0; opacity: 0.5; filter: blur(60px);"></div>
              <img src="~assets/tuition_hero_modern.png" alt="Tuition Management" class="relative-position shadow-20 rounded-borders" style="width: 100%; z-index: 1; border-radius: 24px;" />
           </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-black text-white q-py-xl">
       <div class="q-px-md" style="max-width: 1200px; margin: 0 auto">
          <div class="text-center q-mb-xl">
             <div class="text-accent text-uppercase text-weight-bold q-mb-sm tracking-widest">Why Choose Us</div>
             <h2 class="text-h3 text-weight-bold q-mt-none">Everything you need to <br/> run your institute</h2>
          </div>

          <div class="row q-col-gutter-lg">
             <div class="col-12 col-md-4">
                <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders full-height hover-effect">
                   <div class="bg-primary q-pa-md inline-block rounded-borders q-mb-md border-white">
                      <q-icon name="dashboard" size="32px" color="white" />
                   </div>
                   <div class="text-h5 text-weight-bold q-mb-sm">Smart Dashboard</div>
                   <p class="text-grey-5">Get a bird's eye view of your entire institute's performance, attendance, and financials in one place.</p>
                </q-card>
             </div>
             <div class="col-12 col-md-4">
                <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders full-height hover-effect">
                   <div class="bg-primary q-pa-md inline-block rounded-borders q-mb-md border-white">
                      <q-icon name="payments" size="32px" color="white" />
                   </div>
                   <div class="text-h5 text-weight-bold q-mb-sm">Fee Management</div>
                   <p class="text-grey-5">Automate fee collection, send reminders, and track pending payments effortlessly.</p>
                </q-card>
             </div>
             <div class="col-12 col-md-4">
                <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders full-height hover-effect">
                   <div class="bg-primary q-pa-md inline-block rounded-borders q-mb-md border-white">
                      <q-icon name="schedule" size="32px" color="white" />
                   </div>
                   <div class="text-h5 text-weight-bold q-mb-sm">Scheduling</div>
                   <p class="text-grey-5">Organize classes, manage timetables, and notify students of changes instantly.</p>
                </q-card>
             </div>
             <div class="col-12 col-md-4">
                <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders full-height hover-effect">
                   <div class="bg-primary q-pa-md inline-block rounded-borders q-mb-md border-white">
                      <q-icon name="checklist_rtl" size="32px" color="white" />
                   </div>
                   <div class="text-h5 text-weight-bold q-mb-sm">Attendance Tracking</div>
                   <p class="text-grey-5">Monitor student attendance in real-time with digital check-ins and generate automated daily reports.</p>
                </q-card>
             </div>
             <div class="col-12 col-md-4">
                <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders full-height hover-effect">
                   <div class="bg-primary q-pa-md inline-block rounded-borders q-mb-md border-white">
                      <q-icon name="insights" size="32px" color="white" />
                   </div>
                   <div class="text-h5 text-weight-bold q-mb-sm">Exam Results</div>
                   <p class="text-grey-5">Publish exam scores instantly, analyze class performance, and share progress reports with parents.</p>
                </q-card>
             </div>
             <div class="col-12 col-md-4">
                <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders full-height hover-effect">
                   <div class="bg-primary q-pa-md inline-block rounded-borders q-mb-md border-white">
                      <q-icon name="credit_score" size="32px" color="white" />
                   </div>
                   <div class="text-h5 text-weight-bold q-mb-sm">Automated Payments</div>
                   <p class="text-grey-5">Enable secure online payments, set up recurring billing, and eliminate manual reconciliation work.</p>
                </q-card>
             </div>
          </div>
       </div>
    </section>

    <!-- CTA Section -->
    <section class="q-py-xl q-px-md bg-white">
       <div class="bg-grey-2 rounded-borders q-pa-xl text-center relative-position overflow-hidden" style="max-width: 1200px; margin: 0 auto; border-radius: 32px">
          <div class="relative-position" style="z-index: 2">
             <h2 class="text-h3 text-weight-bold q-mb-md text-primary">Ready to scale your tuition?</h2>
             <p class="text-h6 text-secondary q-mb-xl" style="max-width: 600px; margin-left: auto; margin-right: auto;">Join thousands of educators who trust TuitionManager for their daily operations.</p>
             <q-btn unelevated color="primary" text-color="white" size="lg" no-caps label="Get Started Now" class="q-px-xl rounded-borders" to="/register" />
          </div>
       </div>
    </section>
    
    <!-- Detailed Footer -->
    <footer class="bg-black text-white q-pt-xl q-pb-lg border-top-dark">
       <div style="max-width: 1200px; margin: 0 auto" class="q-px-md">
          <div class="row q-col-gutter-xl q-mb-xl">
             <!-- Brand & Social -->
             <div class="col-12 col-md-4">
                <div class="text-h5 text-weight-bold tracking-tighter q-mb-md">
                   TUTION<span class="text-accent">MANAGER</span>
                </div>
                <p class="text-grey-5 q-mb-lg" style="max-width: 300px; line-height: 1.6;">
                   Empowering educators with world-class tools to manage their institutes efficiently. Join the revolution in education technology.
                </p>
                <div class="q-gutter-sm">
                   <q-btn flat dense round color="white" icon="fa-brands fa-twitter" />
                   <q-btn flat dense round color="white" icon="fa-brands fa-facebook-f" />
                   <q-btn flat dense round color="white" icon="fa-brands fa-linkedin-in" />
                   <q-btn flat dense round color="white" icon="fa-brands fa-instagram" />
                </div>
             </div>

             <!-- Links Column 1 -->
             <div class="col-6 col-md-2">
                <div class="text-subtitle1 text-weight-bold q-mb-md">Product</div>
                <div class="flex column q-gutter-y-sm text-grey-5">
                   <a href="#" class="footer-link">Features</a>
                   <a href="#" class="footer-link">Pricing</a>
                   <a href="#" class="footer-link">Solutions</a>
                   <a href="#" class="footer-link">Updates</a>
                </div>
             </div>

             <!-- Links Column 2 -->
             <div class="col-6 col-md-2">
                <div class="text-subtitle1 text-weight-bold q-mb-md">Company</div>
                <div class="flex column q-gutter-y-sm text-grey-5">
                   <a href="#" class="footer-link">About Us</a>
                   <a href="#" class="footer-link">Careers</a>
                   <a href="#" class="footer-link">Contact</a>
                   <a href="#" class="footer-link">Partners</a>
                </div>
             </div>

             <!-- Newsletter -->
             <div class="col-12 col-md-4">
                <div class="text-subtitle1 text-weight-bold q-mb-md">Stay Updated</div>
                <p class="text-grey-5 q-mb-md">Subscribe to our newsletter for the latest updates and tips.</p>
                <div class="row no-wrap">
                   <q-input dark dense outlined placeholder="Enter your email" class="col bg-grey-9 rounded-borders q-mr-sm" style="border-radius: 8px;">
                      <template v-slot:prepend>
                         <q-icon name="mail" size="xs" color="grey-5" />
                      </template>
                   </q-input>
                   <q-btn color="primary" text-color="white" label="Subscribe" no-caps class="rounded-borders" />
                </div>
             </div>
          </div>

          <q-separator dark color="grey-9" class="q-mb-lg" />

          <div class="row justify-between items-center text-grey-6 text-caption">
             <div>
                © 2025 TuitionManager. All rights reserved.
             </div>
             <div class="flex q-gutter-x-md">
                <a href="#" class="footer-link">Privacy Policy</a>
                <a href="#" class="footer-link">Terms of Service</a>
                <a href="#" class="footer-link">Cookie Settings</a>
             </div>
          </div>
       </div>
    </footer>

  </q-page>
</template>

<script setup>
// No script logic needed for this static landing page yet
</script>

<style scoped>
.hover-effect {
   transition: transform 0.3s ease, background-color 0.3s ease;
   border: 1px solid #333;
}
.hover-effect:hover {
   transform: translateY(-5px);
   background-color: #212121; /* Slightly lighter than grey-10 */
}
.border-white {
   border: 1px solid rgba(255,255,255,0.1);
}
.fade-in-up {
   animation: fadeInUp 1s ease-out;
}
@keyframes fadeInUp {
   from {
      opacity: 0;
      transform: translateY(20px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
}
.footer-link {
   text-decoration: none;
   color: #9e9e9e; /* grey-5 */
   transition: color 0.3s ease;
}
.footer-link:hover {
   color: white;
}
.border-top-dark {
   border-top: 1px solid #333;
}
</style>
