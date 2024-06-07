$(window).on('load', function() {
    console.log("loadイベントが発生しました");
});
$(window).on('scroll', function() {
    console.log("scrollイベントが発生しました");
    $('body').addClass('box'); // スタイルの読み込み
});