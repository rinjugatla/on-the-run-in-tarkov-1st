import type { Member } from "./types/on-the-run/Member"


export const MEMBERS: Member[] = [
    { team: '本配信', name: 'ギルテックス', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/cd454bb0-7bbb-4f5d-a0f0-1888dfbd762d-profile_image-300x300.png', twitch: 'gilltex', twitch_id: '255849926', twitter: 'GillTeX_Twitch', archive_ids: [2154772051], digest_ids: [], clip_ids: [] },
    { team: '本配信', name: 'みずいろ兵長', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/82d1574a-00c1-4a98-a443-7a2e2a50c72f-profile_image-300x300.png', twitch: 'mizuiroch', twitch_id: '689749428', twitter: 'mizu1ro55', archive_ids: [], digest_ids: [], clip_ids: [] },
    { team: '本配信', name: 'しゅーたー', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/54730a92-148c-4105-a520-9600b146d359-profile_image-300x300.png', twitch: 'shootingmoon', twitch_id: '125575465', twitter: 'shooting_moon07', archive_ids: [], digest_ids: [], clip_ids: [] },

    { team: '赤', name: 'かきゅう', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/39b0b7b7-2448-4edf-8f48-b84d29f0e31b-profile_image-300x300.png', twitch: 'kakyu_ttv', twitch_id: '520092504', twitter: 'xkakyux', archive_ids: [2154766988], digest_ids: [], clip_ids: [] },
    { team: '赤', name: '蒼音カノン', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/84a95805-643a-4263-a742-a00dc48ae06c-profile_image-300x300.png', twitch: 'aone_kanon', twitch_id: '682441785', twitter: 'aone_kanon', archive_ids: [2154766397], digest_ids: [], clip_ids: [] },
    { team: '赤', name: 'ちーちゃんん', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c96ff00e-5fa3-4dec-a5b0-2df200caae76-profile_image-300x300.png', twitch: 'chi_chaan', twitch_id: '644642707', twitter: 'chi_chaan_tw', archive_ids: [2154764131], digest_ids: [2163693235], clip_ids: [] },

    { team: '緑', name: 'もりんちゅ', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bd40dcae-0ddb-4e83-b7d3-eac3264778fb-profile_image-300x300.png', twitch: 'morinchuuu', twitch_id: '439505716', twitter: 'morinomorinchu', archive_ids: [2154763488], digest_ids: [], clip_ids: [] },
    { team: '緑', name: 'せかめん', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/46bccf10-30ab-4298-97d9-f9e48020125e-profile_image-300x300.png', twitch: 'sekamenz', twitch_id: '927242788', twitter: 'sekamen_games', archive_ids: [2154764476], digest_ids: [], clip_ids: [] },
    { team: '緑', name: 'りえぺこ', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9391e043-c3d6-4ce3-a525-1f9a6ae8dca9-profile_image-300x300.png', twitch: 'riepeko', twitch_id: '277818090', twitter: 'Riepeko_yolo', archive_ids: [2154761598], digest_ids: [], clip_ids: [] },
    { team: '緑', name: '相生あい', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c34808b7-125e-498a-8c54-dce90ef4bbf3-profile_image-300x300.png', twitch: 'aioi_ai', twitch_id: '133061268', twitter: 'AioiAi_v', archive_ids: [2154768585], digest_ids: [], clip_ids: [] },

    { team: '青', name: 'るぴぃ', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1c31ee72-edce-4ae9-82c1-f6682f4de4cb-profile_image-300x300.png', twitch: 'iamrupi', twitch_id: '728189924', twitter: 'iamrupii', archive_ids: [2154772247], digest_ids: [], clip_ids: [] },
    { team: '青', name: '和花葉ちる', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/41412d5a-dcea-45f2-b5f9-a8653841724b-profile_image-300x300.png', twitch: 'chilmelphary', twitch_id: '179246347', twitter: 'Chil_Twitch', archive_ids: [2154771724], digest_ids: [], clip_ids: [] },
    { team: '青', name: 'みやまる', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9a6198bd-f35e-4dc3-b20a-f154ddfbe483-profile_image-300x300.png', twitch: 'miyamarumaru', twitch_id: '216686393', twitter: 'Toricha___n', archive_ids: [2154770656], digest_ids: [], clip_ids: [] },
    { team: '青', name: 'ゲームする女', twitch_icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/5f2beff3-c817-4f01-ace4-982d16434079-profile_image-300x300.png', twitch: 'sumi_oy', twitch_id: '782185458', twitter: 'game_onna', archive_ids: [2154769117], digest_ids: [], clip_ids: [] },
]

/**
 * メイン配信チャンネル
 */
export const MAIN_MEMBER = MEMBERS[0];