import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

@Injectable()
export class CrisisDetailResolveService implements Resolve<string>{
    resolve():string{
        return 'crystal';
    }

}