import { Component } from '@angular/core';
import { BComponent } from '../b/b.component';
import { FormsModule } from '@angular/forms';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [BComponent, FormsModule],   // servisi kullanabilmem için FormsModule ekledim
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  constructor(         // servis e erişebilmek için constructor metodu kullanırız
    public ex: ExampleService        // public yazarak html yapısı içinde de kullanılabilir hale getirdik.
  ){}
  
}
