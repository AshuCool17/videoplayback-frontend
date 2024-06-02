import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
    imports: AuthModule.forRoot({
        config: {
            authority: 'goprogramming.eu.auth.com',
            redirectUrl: window.location.origin,
            clientId: 'client-id',
            scope: 'openid profile offline_access',
            responseType: 'code', 
        }
    })
})
export class AuthConfigModule{}