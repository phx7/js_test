function func(s, a, b) {

    if (!s.length) {
        return -1;
    }

    var aIndex = s.lastIndexOf(a);
    var bIndex = s.lastIndexOf(b);

    return Math.max(aIndex, bIndex);
}
