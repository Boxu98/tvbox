var rule = {
    类型: '影视',
    title: '真狼影视诊断版',
    host: 'https://www.zhenlang.cc',
    url: '/vodtype/fyclass-fypage.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
        // 尝试加上一些常见的请求头，伪装得更像真人
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        // 有些网站必须带 Referer
        'Referer': 'https://www.zhenlang.cc/'
    },
    
    // 【终极诊断逻辑】在这里拦截请求，看看爬虫到底抓到了什么鬼东西
    预处理: `
        // 尝试请求一次首页
        let html = request(rule.host, {headers: rule.headers});
        
        // 打印出网页的前 500 个字符
        log('=========== 爬虫抓取到的网页内容前500字 ===========');
        log(html.substring(0, 500));
        log('===================================================');
        
        // 如果网页里有 'window.PROMO_CONFIG' (你发给我的源码里的特征)，说明抓到了真网页
        if(html.indexOf('window.PROMO_CONFIG') !== -1){
             log('恭喜！抓到了真实的网页源码！');
        } else {
             log('糟糕！被防火墙拦截了，或者抓到了假页面！');
             // 把假页面提示作为分类显示出来，这样你在电视上就能直接看到死因
             rule.class_name = '被防火墙拦截了&请查看日志';
             rule.class_url = '1&2';
        }
    `,
    
    class_name: '电影&连续剧&综艺&动漫',
    class_url: 'dianying&lianxuju&zongyi&dongman',
    play_parse: true,
    lazy: '',
    limit: 6,
    一级: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href',
    二级: {
        "title": "h1&&Text",
        "img": ".vodlist_thumb&&data-original",
        "desc": ".vodlist_sub&&Text",
        "content": ".vod_content&&Text",
        "tabs": ".play_source_tab a",
        "lists": ".content_playlist:eq(#id) a"
    },
    搜索: '.vodlist_item;a.vodlist_thumb&&title;a.vodlist_thumb&&data-original;.pic_text&&Text;a.vodlist_thumb&&href'
};
