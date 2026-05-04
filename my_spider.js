var rule = {
    title: '厂长资源',
    host: 'https://www.cz01.org',
    // 网站首页链接，用于推荐获取
    homeUrl: '/',
    // 分类页面链接，fypage是页数，fyclass是分类标签
    url: '/fyclass/page/fypage',
    // 搜索链接，**代表搜索词
    searchUrl: '/boss1O1?q=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    // 静态分类
    class_name: '最新电影&豆瓣Top250&国产剧&美剧&韩剧&番剧&剧场版',
    class_url: 'zuixindianying&dbtop250&gcj&meijutt&hanjutv&fanju&dongmanjuchangban',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 推荐列表（首页）
    // 采用源码中的 .leibox 结构
    推荐: '.leibox li;h3.dytit a&&Text;img.thumb&&data-original;.inzhuy&&Text;a&&href',
    
    // 一级列表（分类页）
    // 厂长资源的分类页通常使用 .bt_img li 结构，图片地址在 data-original 属性中
    一级: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original;.jidi span&&Text||.hdinfo&&Text;a&&href',
    
    // 二级详情
    // title: 片名;类型
    // desc: 主要信息;年代;地区;演员;导演
    二级: {
        "title": "h1&&Text;.tag-link&&Text",
        "img": ".dyimg img&&src||.dyimg img&&data-original",
        "desc": ".moviedteail_list li:eq(0)&&Text;.moviedteail_list li:eq(1)&&Text;.moviedteail_list li:eq(2)&&Text;.moviedteail_list li:eq(7)&&Text;.moviedteail_list li:eq(6)&&Text",
        "content": ".yp_context&&Text",
        "tabs": ".mi_paly_box .tj-slogan", // 播放线路名称
        "lists": ".paly_list_btn:eq(#id) a"  // 对应线路下的集数列表
    },
    
    // 搜索结果
    搜索: '.bt_img li;h3.dytit a&&Text;img.thumb&&data-original;.jidi span&&Text;a&&href'
};
