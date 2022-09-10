import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { AuthEffects } from './auth';
export const AkitaStateEffects = AkitaNgEffectsModule.forFeature([AuthEffects]);
