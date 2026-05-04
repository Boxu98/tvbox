var rule = {
    title: '真狼影视',
    host: 'https://www.zhenlang.cc', 
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    class_name: '电影&连续剧&综艺&动漫',
    class_url: '1&2&3&4',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 列表页：精准匹配背景图和卡片信息
    一级: '.balist_thumb;a&&title;a&&style;.vodlist_sub&&Text;a&&href',
    
    // 详情页：精准匹配独立盒子里的线路和集数
    二级: {
        "title": "h1&&Text", 
        "img": ".balist_thumb&&style", 
        "desc": ".vodlist_sub&&Text", 
        "content": ".vod_content&&Text", 
        "tabs": ".play_source_tab a", 
        "lists": ".content_playlist:eq(#id) a" 
    },
    
    // 搜索页：结构与列表页一致
    搜索: '.balist_thumb;a&&title;a&&style;.vodlist_sub&&Text;a&&href'
}
