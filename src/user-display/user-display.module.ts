import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayComponent } from './user-display.component';
import { UserSearchService } from './user-search.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  providers: [UserSearchService],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [UserDisplayComponent],
  declarations: [UserDisplayComponent],
})
export class UserDisplayModule {}
