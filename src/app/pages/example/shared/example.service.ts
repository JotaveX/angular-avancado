import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Example } from './example.model';

@Injectable({
  providedIn: 'root'
})
export class ExampleService extends BaseResourceService<Example> {

  constructor(protected override injector: Injector) {
    super("api/examples", injector, Example.fromJson);
   }
}
