import { NgModule } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTagModule } from 'ng-zorro-antd/tag';

const NG_ZORRO_MODULES = [
    NzGridModule,
    NzTagModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzTabsModule,
    NzCardModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzImageModule,
    NzDropDownModule,
    NzSelectModule,
    NzDatePickerModule,
    NzSkeletonModule,
    NzPageHeaderModule,
    NzTableModule,
    NzModalModule,
    NzPaginationModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSwitchModule,
    NzIconModule,
    NzToolTipModule,
    NzTimelineModule,
    NzBadgeModule,
    NzDescriptionsModule,
    NzUploadModule,
    NzCollapseModule,
    NzTreeModule
];

@NgModule({
    imports: [...NG_ZORRO_MODULES],
    exports: [...NG_ZORRO_MODULES],
    providers: [provideNzI18n(en_US)]
})
export class NgZorroCustomModule {}
