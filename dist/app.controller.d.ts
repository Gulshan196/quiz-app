import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    adminLogin(req: any): Promise<{
        access_token: string;
    }>;
    userLogin(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
