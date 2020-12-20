import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatChipsModule
    //MatTableDataSource
  
  } from '@angular/material';
  import { NgModule } from '@angular/core';
  
  import { LayoutModule } from '@angular/cdk/layout';
  import { DragDropModule } from '@angular/cdk/drag-drop';
  //import { ToastrModule } from 'ngx-toastr';
  
  @NgModule({
    imports: [
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      LayoutModule,
      MatListModule,
      MatSidenavModule,
      MatTabsModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatPaginatorModule,
      MatSortModule,
      MatRadioModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatRippleModule,
      DragDropModule,
      MatAutocompleteModule,
      // ToastrModule.forRoot({
      //   timeOut: 1000,
      //   positionClass: "toast-top-right",
      //   preventDuplicates: false
      // }),
      MatTooltipModule
      //MatTableDataSource
    ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      LayoutModule,
      MatListModule,
      MatSidenavModule,
      MatTabsModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatPaginatorModule,
      MatSortModule,
      MatRadioModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatRippleModule,
      DragDropModule,
      MatAutocompleteModule,
      //ToastrModule,
      MatTooltipModule
      //MatTableDataSource
    ]
  })
  export class CustomMaterialModule { }
  