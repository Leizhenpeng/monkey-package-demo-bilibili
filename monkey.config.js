import { defineMonkeyConfig } from "next-monkey/config";

export default defineMonkeyConfig({
    name: "bilibili",
    author: "river",
    description: "monkey #1 package ! Bilibili video play page atom.",
    type: "dom",
    keywords: [
        "bilibili",
        "video",
        "monkey",
        "monkey-mvp"
    ],
    matches: [
        "*://*.bilibili.com/*"
    ],
    repository:"https://github.com/leizhenpeng/bilibili-monkey",
    default_page: "https://www.bilibili.com",
    compatibilityDate: "2024-09-29",
    srcDir: "/api",
});
