// @ts-ignore isolatedModules
console.error('开始加载');


import { init_win_transport, io } from 'ext-msg'
import { newJob, human } from 'human-being';
init_win_transport({ namespace: 'next-monkey' });
const socket = io<any>();

console.error(20251003);

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
    console.error('切换播放状态成功0.0.9');
    return true;
}


socket.on('bilibili.video.fast', async (data: any) => {
    return await video_fast(data.data.value);
});

// 新增的 video_fast 函数
export async function video_fast(value: number = 1) {
    // 允许的播放速度选项
    const allowedSpeeds = [2, 1.5, 1.25, 1, 0.75, 0.5];
    if (!allowedSpeeds.includes(value)) {
        console.error(`无效的播放速度: ${value}x`);
        return '无效的播放速度, 只能是 2, 1.5, 1.25, 1, 0.75, 0.5';
    }

    console.log('video_fast', value);
    await newJob()
        .next(async (ctx: any) => {
            ctx.playbackRateItem = await ctx.finder.query(`.bpx-player-ctrl-playbackrate-menu-item[data-value="${value}"]`);
        })
        .next(async (ctx: any) => {
            human.cursor.clickElement(ctx.playbackRateItem.toDom());
        })
        .do();

    return true;
}




console.error('加载结束');
