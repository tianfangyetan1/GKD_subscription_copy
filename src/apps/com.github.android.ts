import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.android',
  name: 'GitHub',
  groups: [
    {
      key: 1,
      name: '功能类-自动关闭登录批准结果',
      desc: '登录批准/不批准-关闭',
      rules: [
        {
          activityIds: '.twofactor.TwoFactorActivity',
          matches:
            'View[childCount=3] > View[childCount=2][clickable=true] > [text="关闭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25366549',
            'https://i.gkd.li/i/25366553',
          ],
        },
      ],
    },
  ],
});
