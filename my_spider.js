var rule = {
    类型: '影视',
    title: '厂长资源(加固版)',
    host: 'https://www.cz01.org',
    
    // 兼容性翻页逻辑
    url: '/fyclass/page/fypage', 
    searchUrl: '/boss1O1?q=**',
    searchable: 2,
    quickSearch: 0,
    
    // 【加固点 1】更加真实的 Headers，防止被识别为无头浏览器
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://www.cz01.org/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9'
    },
    
    class_name: '最新电影&豆瓣Top250&国产剧&美剧&韩剧&番剧&剧场版',
    class_url: 'zuixindianying&dbtop250&gcj&meijutt&hanjutv&fanju&dongmanjuchangban',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 【加固点 2】URL 补全逻辑
    // 很多框架在解析 a&&href 时如果不带 host 会导致请求 404
    一级: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original||img.thumb&&src;.jidi span&&Text||.hdinfo&&Text;a&&href',
    
    二级: {
        "title": "h1&&Text", 
        "img": ".dyimg img&&src||.dyimg img&&data-original", 
        "desc": ".moviedteail_list li&&Text", 
        "content": ".yp_context&&Text", 
        // 【加固点 3】线路名备选策略：如果 .paly_list_tit 不行，尝试匹配包含“播放”字样的容器
        "tabs": ".mi_paly_box .paly_list_tit||.mi_paly_box .tj-slogan", 
        "lists": ".paly_list_btn a" 
    },
    
    搜索: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original;.jidi span&&Text||.hdinfo&&Text;a&&href'
};
