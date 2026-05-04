var rule = {
    类型: '影视',
    title: '真狼影视', 
    host: 'https://www.zhenlang.cc',
    
    // 【修改点 1】摒弃可能失效的 vodshow，改为适配它真实源码的 vodtype 翻页路径
    // 假设它的翻页规律是 dianying-2.html，如果不显示列表，需要你在浏览器点一下第二页看看真实规律
    url: '/vodtype/fyclass-fypage.html', 
    
    searchUrl: '/vodsearch/-------------.html?wd=**', 
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    
    // 【修改点 2】删除写死的 class_name，改为动态去网站导航栏抓取！
    // 逻辑：定位所有导航 li -> 获取文字 -> 获取链接 -> 用正则截取出拼音标识
    class_parse: '.nav_list li;a&&title;a&&href;/vodtype/(.*?).html',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 【修改点 3】更稳妥的元素定位法，防止 drpy 解析连写标签时出错
    一级: '.vodlist_item;.vodlist_title a&&Text;.vodlist_thumb&&data-original;.pic_text&&Text;.vodlist_thumb&&href',
    
    二级: {
        "title": "h1&&Text", 
        "img": ".vodlist_thumb&&data-original", 
        "desc": ".vodlist_sub&&Text", 
        "content": ".vod_content&&Text", 
        "tabs": ".play_source_tab a", 
        "lists": ".content_playlist:eq(#id) a" 
    },
    
    搜索: '.vodlist_item;.vodlist_title a&&Text;.vodlist_thumb&&data-original;.pic_text&&Text;.vodlist_thumb&&href'
};
