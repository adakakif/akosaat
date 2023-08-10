import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import WatchApiService from '../services/api/watch-api.service';
import Watch from '../models/watch';

const watchesResolver: ResolveFn<Watch[]> = (
  _: ActivatedRouteSnapshot,
  __: RouterStateSnapshot,
  watchApiService: WatchApiService = inject(WatchApiService),
) => {
  return watchApiService.getWatches();
};

export default watchesResolver;
