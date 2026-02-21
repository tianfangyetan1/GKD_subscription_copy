import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.idxyer',
  name: '丁香园',
  groups: [
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.biz.main.MainActivity',
          matches: '[vid="iv_image_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24851243',
            'https://i.gkd.li/i/24868496',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@[vid="iv_close"] <<n [vid="include_ad"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24858514',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.biz.main.MainActivity',
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24852395',
            'https://i.gkd.li/i/24852398',
          ],
        },
        {
          key: 1,
          name: '内容对你有帮助吗-反馈页面',
          activityIds:
            'cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity',
          matches:
            '[text*="有帮助吗"] + [text*="参与反馈"] +n ImageView[clickable=true][width<100 && height<100]',
          snapshotUrls: 'https://i.gkd.li/i/24995535',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      desc: '点击:x取消',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.biz.main.MainActivity',
          matches: '[vid="iv_close_open_notification"]',
          snapshotUrls: 'https://i.gkd.li/i/24877703',
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-悬浮小窗播放权限',
      desc: '点击取消',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.common.WebViewActivity',
          matches: ['[text="开启悬浮小窗播放功能"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/24865283',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-丁香园安全中心-自动点击继续访问',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          activityIds: '.common.OuterWebViewActivity',
          matches: '@Button[text="继续访问"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24845324',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动点击查看答案',
      rules: [
        {
          key: 1,
          name: '点击查看答案按钮',
          activityIds: [
            '.biz.post.PostDetailActivity',
            '.biz.post.CommentDetailActivity',
          ],
          action: 'clickCenter',
          matches: [
            '@Button[text=" 查看答案"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24857800',
            'https://i.gkd.li/i/24864724',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24875801',
        },
        {
          preKeys: [1],
          name: '执行返回操作',
          activityIds: '.biz.post.ShowAnswerActivity',
          matches: '@ImageButton[desc="转到上一层级"] < [vid="toolbar"]',
          snapshotUrls: 'https://i.gkd.li/i/24900979',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-药品说明书-表格全屏自动横屏观看',
      rules: [
        {
          key: 0,
          activityIds:
            'cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity',
          matches: '@TextView[text="横屏"]',
          snapshotUrls: 'https://i.gkd.li/i/24860315',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-自动点击查看原图',
      rules: [
        {
          fastQuery: true,
          activityIds: '.common.image.GalleryActivity',
          matches: '[vid="iv_item_bottom_ll"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865469',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-📋病例视频自动慢速x0.5_选你想要的但不要多选!',
      desc: '适合CT,MRI影像学深入分析',
      actionMaximum: 1,
      activityIds: '.biz.post.PostDetailActivity',
      rules: [
        {
          key: 0,
          name: '调出倍速栏',
          action: 'clickCenter',
          matches: '[text="Playback Rate"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865795',
        },
        {
          preKeys: [0],
          key: 1,
          name: '使用x0.5',
          action: 'clickCenter',
          matches: '@MenuItem[text="0.5x"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865795',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-📋病例视频自动慢速x0.8_选你想要的但不要多选!',
      desc: '适合CT,MRI影像学深入分析',
      actionMaximum: 1,
      activityIds: '.biz.post.PostDetailActivity',
      rules: [
        {
          key: 0,
          name: '调出倍速栏',
          action: 'clickCenter',
          matches: '[text="Playback Rate"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865795',
        },
        {
          preKeys: [0],
          key: 1,
          name: '使用x0.8',
          action: 'clickCenter',
          matches: '@MenuItem[text="0.8x"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865795',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-📋病例视频自动倍速x1.5_选你想要的但不要多选!',
      desc: '提高观看效率',
      actionMaximum: 1,
      activityIds: '.biz.post.PostDetailActivity',
      rules: [
        {
          key: 0,
          name: '调出倍速栏',
          action: 'clickCenter',
          matches: '[text="Playback Rate"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865795',
        },
        {
          preKeys: [0],
          key: 1,
          name: '使用x1.5',
          action: 'clickCenter',
          matches: '@MenuItem[text="1.5x"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865795',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-📋病例视频自动倍速x2.0_选你想要的但不要多选!',
      desc: '极限观看效率',
      actionMaximum: 1,
      activityIds: '.biz.post.PostDetailActivity',
      rules: [
        {
          key: 0,
          name: '调出倍速栏',
          action: 'clickCenter',
          matches: '[text="Playback Rate"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865795',
        },
        {
          preKeys: [0],
          key: 1,
          name: '使用x2.0',
          action: 'clickCenter',
          matches: '@MenuItem[text="2x"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24865795',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-📖课程视频自动倍速x1.2⚠️选你想要的但不要多选!',
      desc: '我们导师再也不卡壳啦',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          activityIds: '.openclass.biz.video.detail.VideoDetailActivity',
          matches: '[vid="play_speed"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24866929',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-📖课程视频自动倍速x1.5⚠️选你想要的但不要多选',
      desc: '显著提高讲师效率',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionMaximum: 2,
          activityIds: '.openclass.biz.video.detail.VideoDetailActivity',
          matches: '[vid="play_speed"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24866929',
        },
      ],
    },
    {
      key: 15,
      name: '功能类-📖课程视频自动倍速x2.0⚠️选你想要的但不要多选',
      desc: '导师讲到冒烟不带停',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionMaximum: 3,
          activityIds: '.openclass.biz.video.detail.VideoDetailActivity',
          matches: '[vid="play_speed"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24866758',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-自动解除医学领域图片内容',
      desc: '查看-返回操作',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.biz.post.PostDetailActivity',
          action: 'clickCenter',
          matches:
            'Button[visibleToUser=true] -6 View > @[desc^="涉及医学专业领域的"][clickable=true][visibleToUser=true] <<n View[childCount=9] <<n FrameLayout - [vid="post_detail_title_fl"]',
          snapshotUrls: 'https://i.gkd.li/i/25459917', // 有时加载不全，无法捕获到‘查看’控件
        },
        {
          preKeys: [0],
          activityIds: '.common.WebViewActivity',
          matches: '[vid="toolbar"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25459975',
        },
      ],
    },
  ],
});
