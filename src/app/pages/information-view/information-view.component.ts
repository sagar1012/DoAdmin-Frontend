import { Component, OnInit } from '@angular/core';
import { OwnAuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.scss']
})
export class InformationViewComponent implements OnInit {

  details: any;
  uuiD: any;
  screenShot: any;

  constructor(private AuthService: OwnAuthService,) { }

  ngOnInit(): void {
    this.viewDetails()
  }

  viewDetails(item?) {

    const body = {
      subDomainId: "613614df497fb1478412619c",
      url: "17andrewroadeastchester.com"
    }
    this.AuthService.postapiurl("urlScan", body).subscribe(async (resp) => {
      this.scanForGUID("17andrewroadeastchester.com");
      this.details = resp.address;
    });
  }

  scanForGUID(url) {
    this.AuthService.postapiurl("urlScan/guid", {
      url: url
    }).subscribe(async (resp) => {
      this.uuiD = resp.address.uuid;
      setTimeout(() => {
        this.screenShot = "https://urlscan.io/screenshots/" + (resp.address.uuid).toString() + ".png";
      }, 1000);
      // this.getScreenShot(resp);

    });
  }


}
