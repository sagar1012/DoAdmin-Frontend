import { Component, Input, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { OwnAuthService } from '../../services/auth.service';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}
@Component({
  selector: 'ngx-subdomain',
  templateUrl: './subdomain.component.html',
  styleUrls: ['./subdomain.component.scss']
})
export class SubdomainComponent implements OnInit {

  customColumn = 'name';
  defaultColumns = ['size', 'kind', 'items'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  subdomains: any = [];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  modal: any;
  details: any;
  uuiD: any;
  screenShot: any;
  domains: any;

  constructor(private AuthService: OwnAuthService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    // this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit() {
    if (localStorage.getItem('domain'))
      this.getDomains();
    this.modal = document.getElementById("myModal");

    this.getDomainList();
  }

  closeModel() {
    this.modal.style.display = "none";
  }
  openModel() {
    this.modal.style.display = "block";
  }
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
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

  viewDetails(item) {
    // this.openModel();

    const body = {
      subDomainId: item._id,
      url: item.subDomain.replace(/(\r\n|\n|\r)/gm, "")
    }
    localStorage.setItem('subDomainId', item._id);
    localStorage.setItem('subUrl', item.subDomain.replace(/(\r\n|\n|\r)/gm, ""));

    this.AuthService.postapiurl("urlScan", body).subscribe(async (resp) => {
      console.log(resp);
      this.scanForGUID(item.subDomain.replace(/(\r\n|\n|\r)/gm, ""));
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

  getScreenShot(data) {
    const body = {
      uuid: data.address.uuid,
      name: this.getRandomString(10)
    }
    console.log(body);

    this.AuthService.postapiurl("urlScan/screenshot", body).subscribe(async (resp) => {
      console.log(resp);
    });
  }

  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }


  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
