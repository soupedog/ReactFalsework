import APlayer from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'
import {useEffect} from "react";

function MusicPlayer() {
    useEffect(() => {
        // 依赖静态值表示仅初始化时调用一次
        document.title = "音乐播放器";
        // 初始化播放器
        APlayer().init({
            container: document.getElementById('playerContainer')!,
            audio: [{
                name: '歌曲名称',
                artist: '歌手名称',
                url: 'song.mp3',
                cover: 'cover.jpg'
            }],
            volume: 1,        // 音量 0-1
            theme: '#b7daff'    // 主题色
        });
    });

    return (
        <div id={"playerContainer"}/>
    )
}

export default MusicPlayer;