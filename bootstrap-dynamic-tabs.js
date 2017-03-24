$.fn.addTabs = function (options) {

    //判断是否已存在指定ID的tab
    if ($("#" + options.id).length > 0) {
        throw "当前ID的Tab已存在．";
    }

    //构建li元素
    var li = $("<li />", {
        "id": options.id + "-li",
    });

    //构建a元素
    var a = $("<a />", {
        "href": "#" + options.id,
        "text": options.title,
        "click": function () {
            $(this).tab("show");
        }
    });

    //合并li和a元素
    li.append(a);

    var ul = $(this);
    //合并ul和li元素
    ul.append(li);

    //添加完成显示当前li
    $(li).tab("show");

    //构建div内容元素
    var div = $("<div />", {
        "id": options.id,
        "class": "tab-pane fade in active",
    });


    //兼容纯文本和html片段
    typeof options.content == "string" ? div.append(options.content) : div.html(options.content);

    var container = $(".tab-content");
    container.append(div);

    //添加完成后显示div
    $(div).siblings().removeClass("active");
}