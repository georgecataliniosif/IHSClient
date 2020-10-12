import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/authService.service';
import { CompanyService } from 'src/app/services/company.service';
import { startWith, map } from 'rxjs/operators';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  role: string;
  currentUser: User;
  companySearchResults: Observable<any>;
  myControl = new FormControl();
  filteredOptions: Observable<any>;


  constructor(public authService: AuthService,
    public router: Router,
    public companyService: CompanyService) {
    debugger
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
    else {
      this.role = this.currentUser.Role;
    }
  }


  ngOnInit(): void {
    
    this.companySearchResults = this.myControl.valueChanges.pipe(startWith(''),
      map(
        value => { return this.searchCompany(value) })
    )




  }

  searchCompany(searchText) {

    this.companyService.searchCompamny(searchText)
      .subscribe((res) => {
        // this.companySearchResults = res;
        return res;
        debugger
      })
  }

}
