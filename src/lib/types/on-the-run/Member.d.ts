import type { TeamName } from "./TeamName";

export type Member = {
    /**
     * チーム名
     */
    team: TeamName,
    /**
     * 表示名(任意の名前)
     */
    name: string;
    /**
     * Twitch ID(string)
     */
    twitch: string;
    /**
     * Twitch ID(Number UID)
     */
    twitch_id: string;
    /**
     * Twitter ScreenID
     */
    twitter: string;
    /**
     * アーカイブ Video ID
     */
    archive_ids: int[];
    /**
     * ダイジェスト Video ID
     */
    digest_ids: int[];
    /**
     * クリップID
     */
    clip_ids: string[];
}