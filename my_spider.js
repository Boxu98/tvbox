var rule = {
    类型: '影视',
    title: '真狼影视',
    host: 'https://www.zhenlang.cc',
    
    // 分类页面的翻页规律，通常配合下面的动态抓取使用 vodshow 路径
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    
    // 【全新杀招：动态抓取分类】
    // 逻辑：定位到 nav_list 下的 li 标签 ; 获取 a 标签的标题 ; 获取 a 标签的链接 ; 利用正则只提取带有 /vodtype/ 的链接拼音（完美避开"首页"、"自助解析"等无关按钮）
    class_parse: '.nav_list li;a&&title;a&&href;/vodtype/(.*?).html',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 列表解析
    一级: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href',
    
    // 详情解析
    二级: {
        "title": "h1&&Text",
        "img": ".vodlist_thumb&&data-original",
        "desc": ".vodlist_sub&&Text",
        "content": ".vod_content&&Text",
        "tabs": ".play_source_tab a",
        "lists": ".content_playlist:eq(#id) a"
    },
    
    // 搜索解析
    搜索: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href'
};
