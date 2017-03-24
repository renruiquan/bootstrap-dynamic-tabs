**使用说明** 

- 创建对象： var tabs = $("ul.nav-tabs");
- 创建计数器： var count = $(".nav-tabs li").length;  （此行代码可省略）
- 调用addTabs方法： 
`tabs.addTabs({
                    "id": "abc" + count,
                    "title": "新建工单-" + count,
                    "content": "<p><h1>新建工单-" + count + "的内容</h1></p>" + data
                });`
