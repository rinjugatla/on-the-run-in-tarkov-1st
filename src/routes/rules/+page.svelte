<script lang="ts">
    /**
     * 説明画像
     */
    const images = [
        {path: "rules/1.jpg", title: "ルール"},
        {path: "rules/2.jpg", title: "必須装備/設定"},
        {path: "rules/3.jpg", title: "報酬/特別報酬"},
        {path: "rules/4.jpg", title: "逃走を手助けしてくれるKilla"},
        {path: "rules/5.jpg", title: "注意!!"},
        {path: "rules/6.jpg", title: "チーム分け"},
        {path: "rules/7.jpg", title: "ミッション②"},
    ];
</script>

<div class="text-right">
    <div class="m-2 text-white text-xs">※配信中に一部ルールが変更されています。</div>
</div>

{#each images as image}
<div class="m-5">
    <img src={image.path} title={image.title} alt={image.title}>
</div>
{/each}