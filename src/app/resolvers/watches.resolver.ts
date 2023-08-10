import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

const watchesResolver: ResolveFn<boolean> = (
  _: ActivatedRouteSnapshot,
  __: RouterStateSnapshot,
) => {
  return true;
};

export default watchesResolver;
