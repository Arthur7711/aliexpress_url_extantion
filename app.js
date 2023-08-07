let urls = document.getElementsByTagName("a");
for (let i = 0; i < urls.length; i++) {
  urls[i].href = urls[i].href
    .replace("ru.aliexpress.com", "aliexpress.ru")
    .replace("www.aliexpress.com", "aliexpress.ru")
    .replace("hz.aliexpress.com", "aliexpress.ru");
}
