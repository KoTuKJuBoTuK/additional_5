function check(str, bracketsConfig) {
    var str = '|()|';
	for (var d = /(\u005B|\u0028|\u007B)[^\u005B\u0028\u007B]*?$/,
     e = {
        "(": /\u0028[^\u007D\u005D]*?\u0029/,
        "[": /\u005B[^\u0029\u007D]*?\u005D/,
        "{": /\u007B[^\u0029\u005D]*?\u007D/,
        "|": /\u007C[^\u0029\u005D\u007D]*?\u007C/
    }, b, c = !0; c;) b = str, str = str.replace(d, function (str, b){
        console.log(str)
        return str.replace(e[b], "")
    }), b == str && (c = !1);
    console.log(str)
    return !/[\u005B\u005D\u0028\u0029\u007B\u007D]/.test(str);
}

check();
