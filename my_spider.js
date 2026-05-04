var rule = {
    类型: '影视',
    title: '厂长资源',
    host: 'https://www.cz01.org',
    
    // 基础路径配置
    url: '/fyclass/page/fypage', 
    searchUrl: '/boss1O1?q=**',
    searchable: 2,
    quickSearch: 0,
    
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://www.cz01.org/'
    },
    
    class_name: '最新电影&豆瓣Top250&国产剧&美剧&韩剧&番剧&剧场版',
    class_url: 'zuixindianying&dbtop250&gcj&meijutt&hanjutv&fanju&dongmanjuchangban',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 一级解析：验证成功
    一级: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original||img.thumb&&src;.jidi span&&Text||.hdinfo&&Text;a&&href',
    
    // 二级解析：针对调试结果进行了精准修复
    二级: {
        // 修正：排除“发表评论”字样，精准定位标题
        "title": ".my_style h1&&Text", 
        "img": ".dyimg img&&src||.dyimg img&&data-original", 
        "desc": ".moviedteail_list li&&Text", 
        "content": ".yp_context&&Text", 
        // 修正：厂长资源目前的线路名通常在 .paly_list_tit 或 .yp_context 上方的 span
        "tabs": ".mi_paly_box .paly_list_tit&&Text", 
        "lists": ".paly_list_btn a" 
    },
    
    搜索: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original;.jidi span&&Text||.hdinfo&&Text;a&&href'
};
