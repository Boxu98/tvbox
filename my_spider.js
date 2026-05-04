var rule = {
    title: '真狼影视',
    host: 'https://www.zhenlang.cc', 
    // 分类页面的链接规律 (基础的CMS系统通常是这个规律)
    url: '/vodshow/fyclass--------fypage---.html',
    // 搜索页面的链接规律
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA' // 模拟手机端访问以获取更简洁的网页结构
    },
    // 手动写死分类，1、2、3、4 分别对应网站的 电影、连续剧、综艺、动漫
    class_name: '电影&连续剧&综艺&动漫',
    class_url: '1&2&3&4',
    
    play_parse: true,
    lazy: '',
    limit: 6,
    
    // 一级页面(分类列表页)的解析规则：获取视频外层区块 ; 获取标题 ; 获取图片 ; 获取更新集数 ; 获取详情页链接
    // 提示：'.module-item' 是这类网站常用类名。如果不出列表，需要按F12检查实际网页类名。
    一级: '.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    
    // 二级页面(视频详情页)的解析规则
    二级: {
        "title": "h1&&Text", // 电影名称通常在 h1 标签
        "img": ".lazyload&&data-src", // 海报图片
        "desc": ".video-info-items:eq(0)&&Text", // 年份、地区等描述
        "content": ".vod_content&&Text", // 剧情简介
        "tabs": ".module-tab-item", // 播放线路选项卡
        "lists": ".module-play-list:eq(#id) a" // 具体的播放集数按钮
    },
    
    // 搜索结果页面的解析规则，通常和一级页面结构一致
    搜索: '.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href'
}