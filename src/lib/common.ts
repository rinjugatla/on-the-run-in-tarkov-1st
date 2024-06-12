import axios from 'redaxios';

export const initTwitchApiClient = async () => {
    const response = await axios.get<Response>(
        '/api/twitch/init'
    );
}