import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-about",
    // buraya zorunlu(default) olan propertylerimizi tanımladık
    standalone: true,
    templateUrl: "./about.component.html",
    styleUrl: "./about.component.css",
    imports:[],    // dış kaynaktan ekleme işlemi
    providers:[],   // servisleri dahil etmek için kullanılır
    encapsulation: ViewEncapsulation.None   // html çıktımızın içindeki propertyleri yönetmemizi sağlar
    // styleUrls: ["./about.component.css", "./about.component.css"]    Eğer birden fazla Css dosyası göstereceksek.
    // Css eklemek istersek de styles yazarak ekleyebiliriz. Bu style kodunu ya burada yazarız ya da ayrı bir css dosyası açıp burada styleUrl yazarak dosyayı çağırabiliriz. 
    // template: ''        
    // componentimin mutlaka html çıktısı olmalıdır yukarıda bu '' kısım boş verildi. Ama onun içinde about klasörü içine html dosyası oluşturabiliriz. Bu sefer bu dosyayı burada gösterebilmek için templateUrl kullanılır.    
}) // export keyword ü ile başlayan bir class yazarız. Class ismi ise component ismidir
export class AboutComponent{

}