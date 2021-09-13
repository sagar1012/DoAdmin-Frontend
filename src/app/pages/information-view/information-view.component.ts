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
  domains: any;
  subdomains: any;
  ports: any;
  isLoading: boolean = false;

  constructor(private AuthService: OwnAuthService,) { }

  ngOnInit(): void {
    this.viewDetails();
    this.getDomainList();
  }

  getDomainList() {
    this.AuthService.postapiurl("fetchZIP/get").subscribe(async (resp) => {
      this.domains = resp.data.data;
    });
  }

  changeDomain(value) {
    const result = this.domains.filter(item => { return item._id == value });
    localStorage.setItem('domain', result[0].domain);
    localStorage.setItem('domainId', result[0]._id);
    this.getDomains();
  }

  changeSubDomain(value) {
    const result = this.subdomains.filter(item => { return item._id == value });
    localStorage.setItem('subUrl', result[0].subDomain);
    localStorage.setItem('subDomainId', result[0]._id);
    this.viewDetails();
  }

  getDomains() {
    const body = {
      domain: localStorage.getItem('domain').replace(/(\r\n|\n|\r)/gm, ""),
      domainId: localStorage.getItem('domainId')
    }
    this.AuthService.postapiurl("subdomain", body).subscribe(async (resp) => {
      this.subdomains = resp.address;
      this.subdomains = this.subdomains.filter(function (el) {
        return el.subDomain != "";
      });
      this.subdomains = this.subdomains.filter(function (el) {
        return el.subDomain != "\r\n";
      });
    });
  }

  viewDetails(item?) {

    const body = {
      subDomainId: localStorage.getItem('subDomainId'),
      url: localStorage.getItem('subUrl')
    }
    this.AuthService.postapiurl("urlScan", body).subscribe(async (resp) => {
      this.scanForGUID("17andrewroadeastchester.com");
      this.details = resp.address;
      console.log(this.details.data.asn.ip);
      if (this.details.data.asn) {
        localStorage.setItem('subUrlIP', this.details.data.asn.ip);

        this.scanForPorts(localStorage.getItem('subUrlIP'));
      }
    });
  }

  scanForGUID(url) {
    this.AuthService.postapiurl("urlScan/guid", {
      url: url
    }).subscribe(async (resp) => {
      this.uuiD = resp.address.uuid;
      setTimeout(() => {
        this.screenShot = "https://urlscan.io/screenshots/" + (resp.address.uuid).toString() + ".png";
      }, 120000);
      // this.getScreenShot(resp);

    });
  }


  scanForPorts(ip) {
    this.isLoading = true;
    this.AuthService.postapiurl("urlScan/getport", {
      ip: ip
    }).subscribe(async (resp) => {
      this.ports = resp.address;
      this.isLoading = false;
    });
  }

}
