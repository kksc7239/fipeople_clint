function GetUrlParams(key) {
    // 전체 Url을 가져온다.
    var str = location.href;
 
    // QueryString의 값을 가져오기 위해서, ? 이후 첫번째 index값을 가져온다.
    var index = str.indexOf("?") + 1;
 
    // Url에 #이 포함되어 있을 수 있으므로 경우의 수를 나눴다.
    var lastIndex = str.indexOf("#") > -1 ? str.indexOf("#") + 1 : str.length;
 
    // index 값이 0이라는 것은 QueryString이 없다는 것을 의미하기에 종료
    if (index == 0) {
        return "";
    }
 
    // str의 값은 a=1&b=first&c=true
    str = str.substring(index, lastIndex); 
 
    // key/value로 이뤄진 쌍을 배열로 나눠서 넣는다.
    str = str.split("&");
 
    // 결과값
    var rst = "";
 
    for (var i = 0; i < str.length; i++) {
 
        // key/value로 나눈다.
        // arr[0] = key
        // arr[1] = value
        var arr = str[i].split("=");
 
        // arr의 length가 2가 아니면 종료
        if (arr.length != 2) {
            break;
        }
 
        // 매개변수 key과 일치하면 결과값에 셋팅
        if (arr[0] == key) {
            rst = arr[1];
            break;
        }
    }
    return rst;
}
export default GetUrlParams;