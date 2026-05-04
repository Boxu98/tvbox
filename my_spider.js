var rule = {
    title: '真狼影视',
    host: 'https://www.zhenlang.cc', 
    
    // fyclass 会自动替换为下面的 dianying、lianxuju 等拼音
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    
    // 【破案关键点：分类参数改成拼音】
    class_name: '电影&连续剧&综艺&动漫',
    class_url: 'dianying&lianxuju&zongyi&dongman',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 以下全部保留我们上一回合打磨出的“完美提取规则”
    一级: '.balist_thumb;a&&title;a&&style;.vodlist_sub&&Text;a&&href',
    
    二级: {
        "title": "h1&&Text", 
        "img": ".balist_thumb&&style", 
        "desc": ".vodlist_sub&&Text", 
        "content": ".vod_content&&Text", 
        "tabs": ".play_source_tab a", 
        "lists": ".content_playlist:eq(#id) a" 
    },
    
    搜索: '.balist_thumb;a&&title;a&&style;.vodlist_sub&&Text;a&&href'
}
