import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { ProfileComponent } from './profile/profile.component';
// import { LoginComponent } from './demo/components/auth/login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'profile', component: ProfileComponent },
                    // { path: 'logout', component: ProfileComponent },
                    // blood bank
                    { path: 'donars', loadChildren: () => import('./component/donars/donars.module').then(m => m.DonarsModule) },             
                    { path: 'directorys', loadChildren: () => import('./component/directorys/directorys.module').then(m => m.DirectorysModule) },             
                    { path: 'stocks', loadChildren: () => import('./component/stocks/stocks.module').then(m => m.StocksModule) },             
                    { path: 'donation', loadChildren: () => import('./component/donation/donation.module').then(m => m.DonationModule) },             
                    { path: 'donationreport', loadChildren: () => import('./component/donationreport/donationreport.module').then(m => m.DonationreportModule) },             
                    { path: 'history', loadChildren: () => import('./component/history/history.module').then(m => m.HistoryModule) },             

                    // gym related:
                    { path: 'members', loadChildren: () => import('./component/members/members.module').then(m => m.MembersModule) },             
                    { path: 'trainers', loadChildren: () => import('./component/trainers/trainers.module').then(m => m.TrainersModule) },
                    { path: 'subscription', loadChildren: () => import('./component/subscription/subscription.module').then(m => m.SubscriptionModule) },
                    { path: 'subreports', loadChildren: () => import('./component/subreports/subreports.module').then(m => m.SubreportsModule) },
                    { path: 'dashboard', loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    // { path: 'notice', loadChildren: () => import('./component/notice/notice.module').then(m => m.NoticeModule) },



                    { path: 'students', loadChildren: () => import('./components/students/students.module').then(m => m.StudentsModule) },
                    // { path: 'login', loadChildren: () => import('../app/demo/components/auth/login/login.module').then(m => m.LoginModule) },
                    // { path: 'login',  component: LoginComponent  },
                    { path: 'members', loadChildren: () => import('./component/members/members.module').then(m => m.MembersModule) },
                    { path: 'tc', loadChildren: () => import('./components/tc/tc.module').then(m => m.TcModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            
            { path: 'registration', loadChildren: () => import('./demo/components/registration/registration.module').then(m => m.RegistrationModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
