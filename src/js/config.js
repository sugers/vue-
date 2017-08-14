const others='http://139.199.192.48:8888';
export default {
    others:others,
    newslist:others+'/api/getnewslist',
    newsdetails:others + '/api/getnew/',
    //评论区
    commentsubmit:others+'/api/postcomment/',
    commentlist:others+'/api/getcomments/',

    //图片区
    imageList:others+'/api/getimages/',
    imagecategory:others+'/api/getimgcategory',
    imageThu:others+'/api/getthumimages/',
    imageInfo:others+'/api/getimageInfo/'
}