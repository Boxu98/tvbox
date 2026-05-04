var rule = {
    类型: '影视',
    title: '厂长资源',
    host: 'https://www.cz01.org',
    
    // WordPress 主题标准的翻页规律
    url: '/fyclass/page/fypage',
    searchUrl: '/boss1O1?q=**',
    
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    
    // 【完美对齐源码导航栏的静态分类】
    class_name: '最新电影&豆瓣Top250&国产剧&美剧&韩剧&番剧&剧场版',
    class_url: 'zuixindianying&dbtop250&gcj&meijutt&hanjutv&fanju&dongmanjuchangban',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 【修改点：抛弃 .leibox，改用全站通杀的 .bt_img li】
    // 逻辑：定位到 .bt_img 下的 li ; 取标题 ; 取图片 ; 取更新集数或评分 ; 取播放链接
    一级: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original;.jidi span&&Text||.hdinfo&&Text;a&&href',
    
    // 盲猜二级（根据该主题历史结构编写，如后续线路出不来，需要发详情页源码微调）
    二级: {
        "title": "h1&&Text", 
        "img": ".dyimg img&&src||.dyimg img&&data-original", 
        "desc": ".moviedteail_list li&&Text", 
        "content": ".yp_context&&Text", 
        "tabs": ".mi_paly_box .tj-slogan", 
        "lists": ".paly_list_btn a" 
    },
    
    // 搜索结果结构与列表一致
    搜索: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original;.jidi span&&Text||.hdinfo&&Text;a&&href'
};
