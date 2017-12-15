function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    const params = formatParams(options.data);

    if (window.XMLHttpRequest) {
        const xhr = new XMLHttpRequest();
    } else {
        const xhr = new ActiveXObject();
    }
}
