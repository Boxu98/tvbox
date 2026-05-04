var rule = {
    类型: '影视',
    title: '厂长资源',
    host: 'https://www.cz01.org',
    
    // 修正：厂长资源的标准分类路径通常是 /category-slug/page/fypage
    // 如果分类页带 .html，则改为 /category-slug/page/fypage.html
    url: '/fyclass/page/fypage', 
    searchUrl: '/boss1O1?q=**',
    
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
        'Referer': 'https://www.cz01.org/'
    },
    
    // 【分类排查点】：请务必核对以下后缀是否与官网地址栏一致
    class_name: '最新电影&豆瓣Top250&国产剧&美剧&韩剧&番剧&剧场版',
    class_url: 'zuixindianying&dbtop250&gcj&meijutt&hanjutv&fanju&dongmanjuchangban',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 一级列表：优化选择器，确保在分类页能抓取到 li
    一级: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original;.jidi span&&Text||.hdinfo&&Text;a&&href',
    
    二级: {
        "title": "h1&&Text", 
        "img": ".dyimg img&&src||.dyimg img&&data-original", 
        "desc": ".moviedteail_list li&&Text", 
        "content": ".yp_context&&Text", 
        "tabs": ".mi_paly_box .tj-slogan", 
        "lists": ".paly_list_btn a" 
    },
    
    搜索: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original;.jidi span&&Text||.hdinfo&&Text;a&&href'
};
