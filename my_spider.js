// my_spider.js
var rule = {
    title: '我的自建测试站',
    // 1. 目标网站的网址 (这里以一个假设的网站为例，你需要换成真实的)
    host: 'https://www.example.com', 
    
    // 2. 分类页面的链接特征 (fyclass代表分类名，fypage代表页码)
    url: '/category/fyclass/page/fypage.html',
    
    // 3. 搜索页面的链接特征 (**代表搜索的关键词)
    searchUrl: '/search/**/page/fypage.html',
    
    // 4. 开启浏览器伪装，防止被拦截
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    
    // --- 下面是 dr_py 最核心的“填空题”语法 ---
    // 语法规则通常是： 列表范围 ; 标题 ; 图片 ; 描述 ; 链接
    
    // 5. 首页推荐列表怎么抓？
    推荐: '.list-item; a&&title; img&&src; .remark&&Text; a&&href',
    
    // 6. 分类列表页怎么抓？ (和推荐往往是一样的)
    一级: '.list-item; a&&title; img&&src; .remark&&Text; a&&href',
    
    // 7. 视频详情页怎么抓？
    二级: {
        "title": "h1&&Text",         // 抓大标题
        "img": ".poster img&&src",   // 抓海报
        "desc": ".info&&Text",       // 抓简介
        "tabs": ".play-tab",         // 抓播放线路名 (比如 线路一, 线路二)
        "lists": ".play-list:eq(#id) a" // 抓具体的集数按钮
    },
    
    // 8. 搜索结果页怎么抓？
    搜索: '.search-list; a&&title; img&&src; .remark&&Text; a&&href'
};