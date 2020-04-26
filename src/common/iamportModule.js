let imp;
export const iamport = function () {
    if (!imp) {
        imp = window.IMP;
        imp.init(process.env.REACT_APP_IAMPORT_USER_CODE);
    }
    return imp;
}