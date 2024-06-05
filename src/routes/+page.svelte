<script lang="ts">
	import { browser } from "$app/environment";

    const tweets = [
        {
            title: 'BIGイベントのお知らせ',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【🌟BIGイベントのお知らせ🌟】<br>ギルテックス配信をはじめ遂に2周年🎉<br>過去最高のイベントを開催するため<br>現在も企画を練っている真っ最中‼<br><br>■開催日:5月25日19時～<br><br>みなさんご存じの豪華なゲスト今回のイベントに参戦<br>本気で全勢力を上げてガンガン盛り上げていきます🔥… <a href="https://t.co/sVPAVkD4Jd">pic.twitter.com/sVPAVkD4Jd</a></p>&mdash; ギルテックス🎮Twitch&amp;YouTube🎮 (@GillTeX_Twitch) <a href="https://twitter.com/GillTeX_Twitch/status/1790682607711404466?ref_src=twsrc%5Etfw">May 15, 2024</a></blockquote>'
        },
        {
            title: '訂正のお知らせ',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【お知らせ】<br>以前指摘いただいた点を訂正させたPVを<br>Youtubeにアップいたしました‼<br>またこちらのイベントの感想や逃走者の<br>応援メッセージ、クリップなどを<br>専用タグ➡ <a href="https://twitter.com/hashtag/%E3%82%BF%E3%83%AB%E3%82%B3%E3%83%95%E9%80%83%E8%B5%B0%E4%B8%AD?src=hash&amp;ref_src=twsrc%5Etfw">#タルコフ逃走中</a><br>というタグをつけてポストしていただくと抽選で<br>もれなくゆんま先生が作成した今回のイベント… <a href="https://t.co/75cas1ulr1">pic.twitter.com/75cas1ulr1</a></p>&mdash; ギルテックス🎮Twitch&amp;YouTube🎮 (@GillTeX_Twitch) <a href="https://twitter.com/GillTeX_Twitch/status/1792554459199115521?ref_src=twsrc%5Etfw">May 20, 2024</a></blockquote>'
        },
        {
            title: 'ロゴ',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">おはようございます！<br>【タルコフ逃走中】<br>２周年イベントまで<br>残り２日になりました‼<br>最高のゲームになるように<br>配信は当日までおやすみして<br>全力で準備してます🔥<br>お楽しみに✨<br>今日も１日頑張りましょう！ <a href="https://t.co/1ucSa4LghC">pic.twitter.com/1ucSa4LghC</a></p>&mdash; ギルテックス🎮Twitch&amp;YouTube🎮 (@GillTeX_Twitch) <a href="https://twitter.com/GillTeX_Twitch/status/1793438641467048011?ref_src=twsrc%5Etfw">May 23, 2024</a></blockquote>'
        },
        {
            title: 'チーム',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「2周年イベントお知らせ‼️パート１📢」<br>イベントまであと1日です🔥<br>事前情報をちょろっと公開！<br>逃走中は個人で逃げるのですが<br>3色のチーム分けがあります<br>何かありそうですね。。。<br>楽しみです！<a href="https://twitter.com/hashtag/%E3%82%BF%E3%83%AB%E3%82%B3%E3%83%95%E9%80%83%E8%B5%B0%E4%B8%AD?src=hash&amp;ref_src=twsrc%5Etfw">#タルコフ逃走中</a> <a href="https://t.co/leACP58kN3">pic.twitter.com/leACP58kN3</a></p>&mdash; ギルテックス🎮Twitch&amp;YouTube🎮 (@GillTeX_Twitch) <a href="https://twitter.com/GillTeX_Twitch/status/1793748525496541192?ref_src=twsrc%5Etfw">May 23, 2024</a></blockquote>'
        },
        {
            title: 'ルール',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【2周年イベントお知らせ‼️パート2📢】<br>タルコフ逃走中ルールをみなさんにも<br>見てもらいましょう！<br>応援している配信者さんを<br>みんなで共有をして<br>サポートしてあげましょう‼️<br>ボリュームMAXでお届けできるように<br>コンテンツ盛りだくさんです！<a href="https://twitter.com/hashtag/%E3%82%BF%E3%83%AB%E3%82%B3%E3%83%95%E9%80%83%E8%B5%B0%E4%B8%AD?src=hash&amp;ref_src=twsrc%5Etfw">#タルコフ逃走中</a> <a href="https://t.co/qi3HPaTtWB">pic.twitter.com/qi3HPaTtWB</a></p>&mdash; ギルテックス🎮Twitch&amp;YouTube🎮 (@GillTeX_Twitch) <a href="https://twitter.com/GillTeX_Twitch/status/1793781157714416074?ref_src=twsrc%5Etfw">May 23, 2024</a></blockquote>'
        },
        {
            title: 'イラスト',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今回のイベントイラストをゆんまさんに<br>作成いただきました！<br>すごい可愛く今回のイベントにぴったりな<br>作品になっています！<br>壁紙にピッタリなものになっています！<br>景品にもなっていますので是非クリップ賞目指して<br>ゲットしちゃってください！<a href="https://twitter.com/hashtag/%E3%82%BF%E3%83%AB%E3%82%B3%E3%83%95%E9%80%83%E8%B5%B0%E4%B8%AD?src=hash&amp;ref_src=twsrc%5Etfw">#タルコフ逃走中</a> <a href="https://t.co/fhjR99jdnl">https://t.co/fhjR99jdnl</a></p>&mdash; ギルテックス🎮Twitch&amp;YouTube🎮 (@GillTeX_Twitch) <a href="https://twitter.com/GillTeX_Twitch/status/1793996725746864561?ref_src=twsrc%5Etfw">May 24, 2024</a></blockquote>'
        },
        {
            title: 'GillTeX 2nd anniversary',
            contents: '<blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/NU35Lj2VZE">pic.twitter.com/NU35Lj2VZE</a></p>&mdash; ギルテックス🎮Twitch&amp;YouTube🎮 (@GillTeX_Twitch) <a href="https://twitter.com/GillTeX_Twitch/status/1794187011102036150?ref_src=twsrc%5Etfw">May 25, 2024</a></blockquote>'
        },
        {
            title: '終了後のお知らせ',
            contents: '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【２周年イベント-タルコフ逃走中-】<br>おかげさまで無事終了いたしました！<br>逃走者の皆さんご参加ありがとうございました‼️<br>完走されすぎて明日からもやし生活です🌿<br>みんな上手すぎて情けない声を荒げておりましたｗ<br>最高な２周年を迎えることができました！<br>皆さん楽しめましたでしょうか？… <a href="https://t.co/Y3rp8h92ez">pic.twitter.com/Y3rp8h92ez</a></p>&mdash; ギルテックス🎮Twitch&amp;YouTube🎮 (@GillTeX_Twitch) <a href="https://twitter.com/GillTeX_Twitch/status/1794396394482225153?ref_src=twsrc%5Etfw">May 25, 2024</a></blockquote>'
        }
    ];
</script>

<div>
    {#if browser}
        <script async src="https://platform.twitter.com/widgets.js"></script>
    {/if}

    {#each tweets as tweet}
    <div class="text-center flex justify-center">
        <div>
            {@html tweet.contents}
        </div>
    </div>
    {/each}
</div>