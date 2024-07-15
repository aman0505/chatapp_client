import moment from "moment";

const fileformate = (url) => {
    const fileExtension = url.split(".").pop()
    if (fileExtension === "mp4" || fileExtension === "webm" || fileExtension === "0gg") {
        return "video";
    }

    if (fileExtension === "mp3" || fileExtension === "wav") {
        return "audio";
    }


    if (fileExtension === "png" || fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "gif") {

        return "image";
    }

    return "file"


}

const transformImage = (url, width = 100) => {
    return url

}

const getLastSevendays = () => {


    const currentDate = moment()
    let lastsevendays = []

    for (let i = 0; i < 7; i++) {
        const dayDate = currentDate.clone().subtract(i, "days");
        const dayName = dayDate.format("dddd");
        lastsevendays.unshift(dayName)
    }
    return lastsevendays


}
export {
    fileformate,
    transformImage,
    getLastSevendays
}