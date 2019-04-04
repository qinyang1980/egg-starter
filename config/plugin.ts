import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  decorators: {
    enable: true,
    package: 'egg-decorators',
  },
};

export default plugin;
