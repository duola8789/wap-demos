/**
 * Created by zh on 2018/8/1.
 */
/**
 * 获取url参数
 * @param url: 默认值当前路径
 * @returns 参数键值对组成的对象
 */
function getUrlParam(url = window.location.href) {
  let urlObj = {},
    urlParam = [];
  if (url && url.length > 0) {
    const query = url.split('?');
    if (query && query.length > 1) {
      urlParam = query[1].split('&');
      if (urlParam) {
        for (const i in urlParam) {
          let key = urlParam[i].split('=')[0];
          urlObj[key] = urlParam[i].split('=')[1]
        }
      }
    }
  }
  return urlObj
}

/**
 * 请求接口数据
 * @param url: 接口地址
 * @param query: 接口参数
 * @returns Promise(ret)
 */
function getData(url, query) {
  return axios.get(url, query).then(ret => ret.data)
}

/**
 * 向文档中插入数据
 * @param data：定义好的嵌套字段
 */
function insertData(data) {
  // 插入数据
  const template = document.querySelector('#template').innerHTML;
  document.querySelector('#target').innerHTML = Mustache.render(template, data);
}
