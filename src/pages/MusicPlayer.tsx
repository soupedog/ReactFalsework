import APlayer from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'
import {useEffect} from "react";

function MusicPlayer() {
    useEffect(() => {
        // 初始化播放器
        APlayer().init({
            container: document.getElementById('playerContainer')!,
            audio: [{
                name: '歌曲名称',
                artist: '歌手名称',
                url: 'song.mp3',
                cover: 'cover.jpg'
            }],
            loop: 'all',        // 循环模式：'all', 'one', 'none'
            autoplay: true,    // 是否自动播放
            volume: 0.7,        // 音量 0-1
            theme: '#b7daff'    // 主题色
        });
    });

    return (
        <div id={"playerContainer"}/>
    )
}

export default MusicPlayer;