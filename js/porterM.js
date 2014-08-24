function porterCheckBoxHead() {
    if($('.board-head .porterM > input').is(':checked')) {
        $('.notice-content .porterM > input').prop("checked", true);
    } else {
        $('.notice-content .porterM > input').prop("checked", false);
    }
}
