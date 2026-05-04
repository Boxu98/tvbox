var rule = {
    类型: '影视',
    title: '真狼影视',
    host: 'https://www.zhenlang.cc',
    
    // 适配真实源码的 vodtype 翻页路径
    url: '/vodtype/fyclass-fypage.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    
    // 采用静态拼音分类，速度最快且最稳定
    class_name: '电影&连续剧&综艺&动漫',
    class_url: 'dianying&lianxuju&zongyi&dongman',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 海螺主题列表解析规则：定位列表项 ; 获取a标签标题 ; 获取懒加载图片 ; 获取右上角清晰度 ; 获取链接
    一级: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href',
    
    // 详情页解析规则
    二级: {
        "title": "h1&&Text",
        "img": ".vodlist_thumb&&data-original",
        "desc": ".vodlist_sub&&Text",
        "content": ".vod_content&&Text",
        "tabs": ".play_source_tab a",
        "lists": ".content_playlist:eq(#id) a"
    },
    
    // 搜索结果解析规则
    搜索: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href'
};
