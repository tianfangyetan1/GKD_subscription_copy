import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.clinmaster',
  name: '临床决策',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.dxy.clinmaster.home.MainActivity',
          matches:
            '@[vid="iv_close"][clickable=true][visibleToUser=true] -2 [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/25459821',
        },
      ],
    },
  ],
});
