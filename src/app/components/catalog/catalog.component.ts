import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  auctions = [
    {
      id: 1,
      title: 'Toro Brahman',
      description: 'Toro joven, ideal para reproducción. Excelente genética.',
      category: 'Bovino',
      status: 'active',
      price: 3500
    },
    {
      id: 2,
      title: 'Cerda Yorkshire',
      description: 'Cerda en edad fértil, lista para reproducción o venta.',
      category: 'Porcino',
      status: 'closed',
      price: 1200
    },
    {
      id: 3,
      title: 'Oveja Merina',
      description: 'Oveja de lana fina, 2 años de edad, buena salud.',
      category: 'Ovino',
      status: 'active',
      price: 900
    },
    {
      id: 4,
      title: 'Cabra Saanen',
      description: 'Cabra lechera, alta producción diaria.',
      category: 'Caprino',
      status: 'active',
      price: 1100
    }
  ];

  filteredAuctions = [...this.auctions];

  searchQuery = '';
  selectedCategory = '';
  selectedStatus = '';

  categories = ['Bovino', 'Porcino', 'Ovino', 'Caprino', 'Aves', 'Otros'];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.applyFilters();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  applyFilters() {
    this.filteredAuctions = this.auctions.filter(auction => {
      const matchesSearch = auction.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            auction.description.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesCategory = this.selectedCategory ? auction.category === this.selectedCategory : true;
      const matchesStatus = this.selectedStatus ? auction.status === this.selectedStatus : true;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }
}
