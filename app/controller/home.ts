import { Controller } from 'egg';
import { Resource, Get } from 'egg-decorators';

@Resource
export default class HomeController extends Controller {
  @Get('')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
