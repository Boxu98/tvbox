var rule = {
    title: '真狼影视',
    host: 'https://www.zhenlang.cc',
    
    // 我们先用标准的 vodshow 路径测试，如果不出列表再改
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    
    // 最原始、最暴力的写死分类，只要引擎没挂，屏幕上100%会显示这四个按钮！
    class_name: '电影&连续剧&综艺&动漫',
    class_url: 'dianying&lianxuju&zongyi&dongman',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 海螺主题最强提取方案
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
};
