var rule = {
    类型: '影视', // 明确类型为影视
    title: '真狼影视', 
    host: 'https://www.zhenlang.cc',
    
    // 网站的分类页面链接，fyclass为拼音，fypage为页数
    url: '/vodshow/fyclass--------fypage---.html', 
    searchUrl: '/vodsearch/-------------.html?wd=**', 
    
    searchable: 2, // 启用全局搜索 (支持 0,1,2)
    quickSearch: 0, // 是否启用快速搜索
    
    headers: {
        // 使用 Drpy 引擎内置的手机端 UA 常量，更简洁
        'User-Agent': 'MOBILE_UA' 
    },
    
    // 静态分类名称与标识拼接（刚才我们破案得出的拼音分类）
    class_name: '电影&连续剧&综艺&动漫',
    class_url: 'dianying&lianxuju&zongyi&dongman',
    
    // 服务器解析播放
    play_parse: true,
    lazy: '',
    limit: 6, // 首页推荐显示数量
    
    // 一级列表：海螺主题标准提取法
    // 列表盒子; 标题; 懒加载图片; 右上角文本(清晰度/集数); 链接
    一级: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href',
    
    // 二级详情页提取
    二级: {
        "title": "h1&&Text", 
        "img": ".vodlist_thumb&&data-original", 
        "desc": ".vodlist_sub&&Text", 
        "content": ".vod_content&&Text", 
        "tabs": ".play_source_tab a", 
        "lists": ".content_playlist:eq(#id) a" 
    },
    
    // 搜索结果页：结构与一级列表一致
    搜索: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href'
};
