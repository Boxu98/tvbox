var rule = {
    title: '真狼影视',
    host: 'https://www.zhenlang.cc', 
    
    // 海螺主题最标准的分类筛选伪静态路径
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        // 伪装成真实的手机浏览器，防止被拦截
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    },
    
    // 拼音分类
    class_name: '电影&连续剧&综艺&动漫',
    class_url: 'dianying&lianxuju&zongyi&dongman',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 【全新重写】真正海螺主题的列表解析规则：定位列表项 -> 获取a标签标题 -> 获取a标签真实图片 -> 获取右上角清晰度 -> 获取链接
    一级: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href',
    
    二级: {
        "title": "h1&&Text", 
        "img": ".vodlist_thumb&&data-original", 
        "desc": ".vodlist_sub&&Text", 
        "content": ".vod_content&&Text", 
        "tabs": ".play_source_tab a", 
        "lists": ".content_playlist:eq(#id) a" 
    },
    
    搜索: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href'
}
