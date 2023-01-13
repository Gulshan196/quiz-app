import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class RolesGuard implements CanActivate {
    private rolesPassed;
    constructor(role: string);
    canActivate(context: ExecutionContext): boolean;
}
