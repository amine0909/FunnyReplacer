function init(){
    let i=0
    let listOfImages = []
    for(i;i<25;i++) {
        listOfImages.push(`./pics/${i}.jpg`)
    }


    let j=0
    let imgs = document.getElementsByTagName("img")
    for(j;j<imgs.length;j++) {
        const randomImage = Math.floor(Math.random()* listOfImages.length)
        const url = chrome.extension.getURL(listOfImages[randomImage])
        imgs[j].src=url
        
        

    }
}



init()