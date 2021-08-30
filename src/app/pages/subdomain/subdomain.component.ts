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

  constructor(private AuthService: OwnAuthService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit() {
    this.getDomains();
    this.modal = document.getElementById("myModal");

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

  private data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
      children: [
        { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
        { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
        { data: { name: 'project-3', kind: 'txt', size: '466 KB' } },
        { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
      ],
    },
    {
      data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
      children: [
        { data: { name: 'Report 1', kind: 'doc', size: '100 KB' } },
        { data: { name: 'Report 2', kind: 'doc', size: '300 KB' } },
      ],
    },
    {
      data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
      children: [
        { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
        { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
      ],
    },
  ];

  getDomains() {
    const body = {
      domain: "king504.club",
      domainId: "612ca84a9651c4b47a0f59e5"
    }
    this.AuthService.postapiurl("subdomain", body).subscribe(async (resp) => {
      this.subdomains = resp.address;
      this.subdomains = this.subdomains.filter(function (el) {
        return el.subDomain != "";
      });
    });
  }

  viewDetails(item) {
    this.openModel();

    const body = {
      subDomainId: item._id,
      url: item.subDomain.replace(/(\r\n|\n|\r)/gm, "")
    }
    this.AuthService.postapiurl("urlScan", body).subscribe(async (resp) => {
      console.log(resp);
      this.details = resp.address;
    });
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
