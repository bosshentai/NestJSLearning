import { createParamDecorator } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContextHost): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
