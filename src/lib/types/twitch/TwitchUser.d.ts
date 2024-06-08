export type TwitchUser = {
    id: string,
    name: string,
    displayName: string,
    description: string,
    type: HelixUserType,
    broadcasterType: HelixBroadcasterType,
    profilePictureUrl: string,
    offlinePlaceholderUrl: string
}