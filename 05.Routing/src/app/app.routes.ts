import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';

// istersem Route türünde bir değiken tanımlayıp bunu Routes içinde tanımlayabilirim ve bu şekilde de kullanabilirim.
export const homeRoute: Route = {
    path: "",
    component: HomeComponent
}

export const routes: Routes = [
    // layout dışına tanımlanan login componenti 
    {
        path: "login",  // web adres çubuğu yolu
        component: LoginComponent
    },
    {
        path: "",
        component: LayoutsComponent,
        children: [
            homeRoute,
            {
                path: "home",
                component: HomeComponent
            },
            {
                path: "about",
                component: AboutComponent 
            },
            {
                // contact sayfasına erişmek için yazılan kod
                path: "contact",
                component: ContactComponent
            },
            {
                path: "contact/:params",
                component: ContactComponent
            }
        ]
    },
    
    // Eğer home sayfasının başlangıçta açılmasını istersem aşağıdaki gibi tanımlama yapabilirim.
    // {
    //     path: "",
    //     component: HomeComponent
    // },
    // Aşağıda Angular ın adres çubuğuna yazdığımız değere karşılık hangi componenti açması gerektiğini söylediğimiz bir mapleme yaptık
    
];
