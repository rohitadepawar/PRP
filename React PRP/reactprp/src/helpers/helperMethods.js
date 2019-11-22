export const getDevice = () => {
    let resoultion = window.screen.width;
    if ( resoultion >= 1024 ){
        return "desktop";
    } else if ( resoultion >= 768) {
        return "tablet";
    } else {
        return "mobile";
    }
}