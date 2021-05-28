function stringToArrays(s) {
    return s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}
console.log(stringToArrays("📖모던자바스크립트 입문"));