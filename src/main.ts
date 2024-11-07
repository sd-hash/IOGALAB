import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({"projectId":"iogalab","appId":"1:831905939205:web:b398ff714cd248d0e9416c","storageBucket":"iogalab.firebasestorage.app","apiKey":"AIzaSyB1LdeYLfnk93OBDDU8N_JjdfhGOgl9dog","authDomain":"iogalab.firebaseapp.com","messagingSenderId":"831905939205","measurementId":"G-KQ504P5NFK"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService, 
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"iogalab","appId":"1:831905939205:web:b398ff714cd248d0e9416c","storageBucket":"iogalab.firebasestorage.app","apiKey":"AIzaSyB1LdeYLfnk93OBDDU8N_JjdfhGOgl9dog","authDomain":"iogalab.firebaseapp.com","messagingSenderId":"831905939205","measurementId":"G-KQ504P5NFK"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"iogalab","appId":"1:831905939205:web:b398ff714cd248d0e9416c","storageBucket":"iogalab.firebasestorage.app","apiKey":"AIzaSyB1LdeYLfnk93OBDDU8N_JjdfhGOgl9dog","authDomain":"iogalab.firebaseapp.com","messagingSenderId":"831905939205","measurementId":"G-KQ504P5NFK"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()),
  ],
});
