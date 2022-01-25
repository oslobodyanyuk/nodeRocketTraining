function task01() {
    let nums = [1, 5, 7, 4, 3]
    console.log('nums->', nums)
    let str = ['a', 'bb', 'ccc', 'dddd', 'eeeee']
    console.log('str->', str)
    let mas = [true, 1, 'true', 2, 3, false, NaN]
    console.log('mas->', mas)
}
window.onload = function() {
//  function task02() {
    for (i=0;i<10;i++) {
        let div_block = document.createElement('div')
        let div_text = document.createTextNode('div '+i)
        div_block.appendChild(div_text)
        document.body.appendChild(div_block)
    }


}
task01()
