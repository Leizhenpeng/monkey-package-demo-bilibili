// @ts-ignore isolatedModules
console.error('开始加载');


import { init_win_transport, io } from 'ext-msg'
import { newJob, human } from 'human-being';
init_win_transport({ namespace: 'next-monkey' });
const socket = io<any>();

console.error(202422002);

socket.on('bilibili.video.play', async () => {
    return await video_play();
});


export async function video_play() {
    await newJob()
        .next(async ctx => {
            ctx.btn = await ctx.finder.query("div[aria-label='播放/暂停']");
        })
        .next(async ctx => {
            human.cursor.clickElement(ctx.btn.toDom());
        })
        .do();
    console.error('切换播放状态成功0.0.7');
    return true;
}




console.error('加载结束');