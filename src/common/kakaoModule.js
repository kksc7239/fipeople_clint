function init() {
    window.Kakao.init(process.env.REACT_APP_KAKAO_API);
}

init();

export const templateLink = function (templateId) {
    if (!window.Kakao.isInitialized()) {
        init();
    }
    window.Kakao.Link.sendCustom({
        templateId,
        templateArgs: {}
    });
}