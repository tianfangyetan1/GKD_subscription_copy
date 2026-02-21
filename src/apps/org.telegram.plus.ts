import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.plus',
  name: 'Plus Messenger',
  groups: [
    {
      key: 1,
      name: '功能类-更多-保存到相册',
      desc: '右上角菜单-点击[保存到相册]',
      rules: [
        {
          fastQuery: true,
          matches: '@[clickable=true][left>350] > [text="保存到相册"]',
          snapshotUrls: 'https://i.gkd.li/i/24337783',
          excludeSnapshotUrls: 'https://i.gkd.li/i/24450853', // [left=83]
          exampleUrls: 'https://e.gkd.li/d09a281b-5652-4072-ae19-42d944f01d95',
          activityIds: 'org.telegram.ui.LaunchActivity',
        },
      ],
    },
  ],
});
